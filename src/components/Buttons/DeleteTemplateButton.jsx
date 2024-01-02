import React, { useState } from 'react';
import axios from 'axios';
import "../../designs/DeleteTemplate.css";

const HandleDeleteTemplateComponent = ({ setTemplateId }) => {
  const [templateID, setId] = useState('');

  const handleDeleteTemplate = () => {
    if (!templateID) {
      console.error('Please provide a template ID for deletion.');
      return;
    }

    axios.delete(`http://localhost:8081/template/delete/${templateID}`)
      .then(response => {
        console.log('Template deleted successfully:', templateID);
        setTemplateId('');
        //runQuery('select * from message_template');
      })
      .catch(error => {
        console.error('Error deleting template:', error);
      });
  };

  return (
    <div className="container">
      <h3 className="heading">Delete Template</h3>
      <label className="label" htmlFor="templateId">Template ID:</label>
      <input
        className="input"
        type="text"
        id="templateId"
        value={templateID}
        placeholder='Enter template ID for deletion'
        onChange={(e) => setId(e.target.value)}
      />

      <button className="button" onClick={handleDeleteTemplate}>Delete Template</button>
    </div>
  );
};

export default HandleDeleteTemplateComponent;
