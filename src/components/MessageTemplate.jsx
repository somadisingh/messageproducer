import React, { useState } from 'react';
import axios from 'axios';

const MessageTemplate = () => {
  const [templateName, setTemplateName] = useState('');
  const [templateContent, setTemplateContent] = useState('');

  const handleAddTemplate = () => {
    // Create an object representing the template
    const templateData = {
      templateName: templateName,
      templateContent: templateContent,
    };

    // Make a POST request to the Spring Boot API using Axios
    axios.post('http://localhost:8081/save/template', templateData)
      .then(response => {
        console.log('Template added successfully:', response.data);
        // Clear the form fields after adding the template
        setTemplateName('');
        setTemplateContent('');
      })
      .catch(error => {
        console.error('Error adding template:', error);
      });
  };

  return (
    <div>
      <h3>Message Template Form</h3>
      <label htmlFor="templateName">Template Name:</label>
      <input
        type="text"
        id="templateName"
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
      />

      <label htmlFor="templateContent">Template Content:</label>
      <textarea
        id="templateContent"
        value={templateContent}
        onChange={(e) => setTemplateContent(e.target.value)}
      />

      <button onClick={handleAddTemplate}>Add Template</button>
    </div>
  );
};

export default MessageTemplate;