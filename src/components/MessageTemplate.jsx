import React, { useState } from 'react';
import axios from 'axios';

const MessageTemplate = () => {
  const [templateName, setTemplateName] = useState('');
  const [templateContent, setTemplateContent] = useState('');
  const [templateID, setTemplateId]= useState('');

  const handleAddTemplate = () => {
    // Create an object representing the template
    const templateData = {
      templateName: templateName,
      templateContent: templateContent,
    };

    // Make a POST request to the Spring Boot API using Axios
    axios.post('http://localhost:8081/template/save', templateData)
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

  const handleDeleteTemplate = () => {
    // Ensure templateId is not empty
    if (!templateID) {
      console.error('Please provide a template ID for deletion.');
      return;
    }

    axios.delete(`http://localhost:8081/template/delete/${templateID}`)
      .then(response => {
        console.log('Template deleted successfully:', response.data);
        setTemplateName('');
        setTemplateContent('');
        setTemplateId('');
      })
      .catch(error => {
        console.error('Error deleting template:', error);
      });
  }

  return (
    <div>
      <h3>Message Template Form</h3>

      <label htmlFor="templateName">Template Name:</label>
      <input
        type="text"
        id="templateName"
        value={templateName}
        placeholder='Enter template name'
        onChange={(e) => setTemplateName(e.target.value)}
      />

      <label htmlFor="templateContent">Template Content:</label>
      <textarea
        id="templateContent"
        value={templateContent}
        placeholder='Enter template content'
        onChange={(e) => setTemplateContent(e.target.value)}
      />

      <button onClick={handleAddTemplate}>Add Template</button>

      <br />

      <label htmlFor="templateId">Template ID:</label>
      <input
        type="text"
        id="templateId"
        value={templateID}
        placeholder='Enter template ID for deletion'
        onChange={(e) => setTemplateId(e.target.value)}
      />
      <button onClick={handleDeleteTemplate}>Delete Template</button>
    </div>
  );
};

export default MessageTemplate;