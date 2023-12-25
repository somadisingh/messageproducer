import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MessageProducer from './MessageProducer';

const UserSection = ({ onLogout, setModifiedTemplateProp }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [replacement, setReplacement] = useState('');
  const [modifiedTemplate, setModifiedTemplate] = useState('');

  useEffect(() => {
    // Fetch the saved query table on loading the page
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

  const handleReplacementChange = (e) => {
    setReplacement(e.target.value);
  };

  const handleUpdateMessage = () => {
    let temp = selectedTemplate;
    // remove word starting with # and replace with new word
    temp = temp.substring(0, temp.indexOf('#')) + replacement;
    setModifiedTemplate(temp);
    console.log('Updated Message:', temp);
  };

  return (
    <div>
      <h2>Normal User Section</h2>
      {loading && <p>Loading...</p>}
      {result.length > 0 && (
        <div>
          <h4>Result</h4>
          <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Template Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Template Content</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Select</th>
              </tr>
            </thead>
            <tbody>
              {result.map((row) => (
                <tr key={row.id} style={{ border: '1px solid #ddd' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.template_name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.template_content}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
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

          {selectedTemplate && (
            <div>
              <h4>Selected Template Content:</h4>
              <p>{selectedTemplate}</p>
              <label htmlFor="replacement">Replacement:</label>
              <input
                type="text"
                id="replacement"
                value={replacement}
                onChange={handleReplacementChange}
              />
              <p>Modified Template:</p>
              <p>{modifiedTemplate}</p>
              <button onClick={handleUpdateMessage}>Update Message</button>
            </div>
          )}
        </div>
      )}
      <MessageProducer modifiedTemplate={modifiedTemplate} />
    </div>
  );
};

export default UserSection;
