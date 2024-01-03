import React, { useState, useEffect } from "react";
import PresetTemplate2 from "../Functions/PresetTemplate2";
import ModifyTemplate from "../Functions/ModifyTemplate";
import SendMessageTemplate from "../Functions/SendMessageTemplate";

const AdminSection = ({ onLogout }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    console.log("Selected Template:", selectedTemplate);
  }, [selectedTemplate]);

  return (
    <div>
      <h2>Admin Section</h2>
      <button className="button" onClick={onLogout}>
        Logout
      </button>
      {/* {console.log('Selected Template before pt:', templateID)} */}

      {/* <MessageTemplate />
      <PresetTemplate /> */}
      {/* {console.log('Selected Template after pt:', templateID)} */}
      <div className="container">
        <h2 className="heading">Preset Templates 2</h2>
        <ModifyTemplate
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
        <PresetTemplate2 setSelectedTemplate={setSelectedTemplate} />

        <SendMessageTemplate
          selectedTemplate={
            selectedTemplate && selectedTemplate.template_content
          }
        />
      </div>
    </div>
  );
};

export default AdminSection;
//templateID now prints out the correct value, next step is to passit to MessageTemplate
