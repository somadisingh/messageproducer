import React, { useState } from "react";
import axios from "axios";
import "../../designs/AddTemplate.css";

const HandleAddTemplateComponent = ({
  setTemplateName,
  setTemplateContent,
}) => {
  const [templateName, setName] = useState("");
  const [templateContent, setContent] = useState("");

  const handleAddTemplate = () => {
    const templateData = {
      templateName: templateName,
      templateContent: templateContent,
    };

    axios
      .post("http://localhost:8081/template/save", templateData)
      .then((response) => {
        console.log("Template added successfully:", response.data);
        setName("");
        setContent("");
      })
      .catch((error) => {
        console.error("Error adding template:", error);
      });
  };

  return (
    <div className="container">
      <h3 className="heading">Add Template</h3>
      <label className="label" htmlFor="templateName">
        Template Name:
      </label>
      <input
        className="input"
        type="text"
        id="templateName"
        value={templateName}
        placeholder="Enter template name"
        onChange={(e) => setName(e.target.value)}
      />

      <label className="label" htmlFor="templateContent">
        Template Content:
      </label>
      <textarea
        className="textarea"
        id="templateContent"
        value={templateContent}
        placeholder="Enter template content"
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="button" onClick={handleAddTemplate}>
        Add Template
      </button>
    </div>
  );
};

export default HandleAddTemplateComponent;
