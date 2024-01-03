import React, { useState, useEffect } from "react";
import PresetTemplate2 from "../Functions/PresetTemplate2";
import AddDeleteTemplate from "../Functions/AddDeleteTemplate";
import UseTemplate from "../Functions/UseTemplate";

const AdminSection = ({ onLogout }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    console.log("Selected Template:", selectedTemplate);
  }, [selectedTemplate]);

  return (
    <div className="container">
      <h2>Admin Section</h2>
      <button className="button" onClick={onLogout}>
        Logout
      </button>

      <h2 className="heading">Preset Templates 2</h2>
      <AddDeleteTemplate
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      <PresetTemplate2 setSelectedTemplate={setSelectedTemplate} />

      <UseTemplate
        selectedTemplate={selectedTemplate && selectedTemplate.template_content}
      />
    </div>
  );
};

export default AdminSection;
//templateID now prints out the correct value, next step is to passit to MessageTemplate
