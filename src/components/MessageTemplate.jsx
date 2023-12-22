import React, { useState } from 'react';

const MessageTemplate = () => {
  const [templateName, setTemplateName] = useState('');
  const [templateContent, setTemplateContent] = useState('');

  const handleAddTemplate = () => {
    // Add logic to send the template details to the server or state
    console.log('Adding template:', { templateName, templateContent });
    // Clear the form fields after adding the template
    setTemplateName('');
    setTemplateContent('');
  };

  return (
    <div>
      <h3>Message Template Form</h3>
      <label htmlFor="templateName">Template Name:</label>
      <input type="text" id="templateName" value={templateName} onChange={(e) => setTemplateName(e.target.value)} />

      <label htmlFor="templateContent">Template Content:</label>
      <textarea id="templateContent" value={templateContent} onChange={(e) => setTemplateContent(e.target.value)} />

      <button onClick={handleAddTemplate}>Add Template</button>
    </div>
  );
};

export default MessageTemplate;
