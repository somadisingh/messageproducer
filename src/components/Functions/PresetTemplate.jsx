import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageSendButton from '../Buttons/MessageProducer';
import '../../designs/PresetTemplate.css';

const PresetTemplate = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [replacement, setReplacement] = useState('');
  const [modifiedTemplate, setModifiedTemplate] = useState('');

  useEffect(() => {
    runQuery('select * from message_template');
  }, []);

  const runQuery = async (sql) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8081/query/execute', { sql });
      const result = response.data;
      setResult(result);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRadioChange = (templateContent) => {
    setSelectedTemplate(templateContent);
    setReplacement('');
    setModifiedTemplate('');
  };

  const handleUpdateMessage = () => {
    let temp = selectedTemplate.split(' ');
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].startsWith('#')) {
        const newReplacement = prompt(`Enter replacement for ${temp[i]}`);
        temp[i] = newReplacement;
      }
    }
    temp = temp.join(' ');
    setModifiedTemplate(temp);
    console.log('Updated Message:', temp);
     
  };

  const handleRefreshTable = () => {
    runQuery('select * from message_template');
  };

  return (
    <div className ="container">
      <h2 className ="heading">Preset Templates</h2>
      {loading && <p className="loading">Loading...</p>}
      {result.length > 0 && (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Template Name</th>
                <th>Template Content</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {result.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.template_name}</td>
                  <td>{row.template_content}</td>
                  <td>
                    <input
                      type="radio"
                      name="selectedTemplate"
                      onChange={() => handleRadioChange(row.template_content)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="refreshButton" onClick={handleRefreshTable}>Refresh Table</button>
          {selectedTemplate && (
            <div>
              <h4 className="selectedTemplate">Selected Template Content:</h4>
              <p>{selectedTemplate}</p>
              <p className="modifiedTemplate">Modified Template:</p>
              <p>{modifiedTemplate}</p>
              <button className="updateButton" onClick={handleUpdateMessage}>Update Message</button>
            </div>
          )}
        </div>
      )}
      <MessageSendButton modifiedTemplate={modifiedTemplate} />
    </div>
  );
};

export default PresetTemplate;
