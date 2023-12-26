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

  // const handleReplacementChange = (e) => {
  //   setReplacement(e.target.value);
  // };

  const handleUpdateMessage = () => {
    //let temp = selectedTemplate;
    // remove word starting with # and replace with new word
    //temp = temp.replace('#', replacement);
    // convert temp to array
    let temp = selectedTemplate.split(' ');
    // iterate over array and replace word starting with # with new word
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].startsWith('#')) {
        const newReplacement = prompt(`Enter replacement for ${temp[i]}`);
        temp[i] = newReplacement;
      }
    }
    // convert back to string
    temp = temp.join(' ');
    setModifiedTemplate(temp);
    console.log('Updated Message:', temp);
     
  };

  return (
    <div>
      <h2>Preset Templates</h2>
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
              {/* <label htmlFor="replacement">Replacement:</label>
              <input
                type="text"
                id="replacement"
                value={replacement}
                onChange={handleReplacementChange}
              /> */}
              <p>Modified Template:</p>
              <p>{modifiedTemplate}</p>
              <button onClick={handleUpdateMessage}>Update Message</button>
            </div>
          )}
        </div>
      )}
      <MessageProducer modifiedTemplate={modifiedTemplate} />
      {/* <button onClick={onLogout}>Logousst</button> */}
    </div>
  );
};

export default UserSection;
