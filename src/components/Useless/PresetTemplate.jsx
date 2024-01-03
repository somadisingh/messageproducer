import React, { useState, useEffect } from "react";
import axios from "axios";
import MessageSendButton from "../Buttons/MessageSendButton";
import "../../designs/PresetTemplate.css";

const PresetTemplate = ({ editToolbar }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [replacement, setReplacement] = useState("");
  const [modifiedTemplate, setModifiedTemplate] = useState("");
  //const [templateID, setaId] = useState('');

  useEffect(() => {
    runQuery("select * from message_template"); // should run just once ideally

    const intervalId = setInterval(() => {
      runQuery("select * from message_template");
    }, 2000); // 2000 ms = 2 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const runQuery = async (sql) => {
    try {
      const response = await axios.post("http://localhost:8081/query/execute", {
        sql,
      });
      const result = response.data;
      setResult(result);
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }
  };

  const handleRadioChange = (row) => {
    setSelectedTemplate(row.template_content);
    //setId(row.id);
    //updateId(row.id);
    console.log("Selected Templatemain:", row.id);
    setReplacement("");
    setModifiedTemplate("");
  };

  // const handleUpdateMessage = () => {
  //   let temp = selectedTemplate.split(' ');
  //   for (let i = 0; i < temp.length; i++) {
  //     if (temp[i].startsWith('#')) {
  //       const newReplacement = prompt(`Enter replacement for ${temp[i]}`);
  //       temp[i] = newReplacement;
  //     }
  //   }
  //   temp = temp.join(' ');
  //   setModifiedTemplate(temp);
  //   console.log('Updated Message:', temp);

  // };

  // const handleUpdateMessage = () => {
  //   let temp = selectedTemplate.split(' ');

  //   for (let i = 0; i < temp.length; i++) {
  //     if (temp[i].match(/{\w+\*}/)) {
  //       // If {word*} format is found, make replacement mandatory
  //       const wordToReplace = temp[i].slice(1, -2);
  //       const newReplacement = prompt(`Enter replacement for ${wordToReplace}:`);
  //       if (newReplacement === null) {
  //         // If user cancels, don't update the message
  //         return;
  //       }
  //       temp[i] = newReplacement + '*';
  //     } else if (temp[i].match(/{\w+}/)) {
  //       // If {word} format is found, prompt for replacement
  //       const wordToReplace = temp[i].slice(1, -1);
  //       const newReplacement = prompt(`Enter replacement for ${wordToReplace}`);
  //       temp[i] = newReplacement;
  //     }
  //   }

  //   temp = temp.join(' ');
  //   setModifiedTemplate(temp);
  //   console.log('Updated Message:', temp);
  // };

  const handleUpdateMessage = async () => {
    let temp = selectedTemplate.split(" ");

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].match(/{\w+\*}/)) {
        // If {word*} format is found, make replacement unskippable
        const wordToReplace = temp[i].slice(1, -2);
        let newReplacement;

        do {
          newReplacement = prompt(
            `Enter replacement for ${wordToReplace} (mandatory):`
          );
          if (newReplacement === null || newReplacement.trim() === "") {
            // If user skips or enters an empty string, show a mandatory message
            alert("Replacement is mandatory. Please enter a value.");
          }
        } while (newReplacement === null || newReplacement.trim() === "");

        temp[i] = newReplacement;
      } else if (temp[i].match(/{\w+}/)) {
        // If {word} format is found, prompt for replacement
        const wordToReplace = temp[i].slice(1, -1);
        const newReplacement = prompt(`Enter replacement for ${wordToReplace}`);
        temp[i] = newReplacement;
      }
    }

    temp = temp.join(" ");
    setModifiedTemplate(temp);
    console.log("Updated Message:", temp);
  };

  const handleRefreshTable = () => {
    runQuery("select * from message_template");
  };

  return (
    <div className="container">
      <h2 className="heading">Preset Templates</h2>
      {result.length == 0 && <p className="loading">Loading...</p>}
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
                      onChange={() => handleRadioChange(row)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="refreshButton" onClick={handleRefreshTable}>
            Refresh Table
          </button>
          {selectedTemplate && (
            <div>
              <h4 className="selectedTemplate">Selected Template Content:</h4>
              <p>{selectedTemplate}</p>
              <p className="modifiedTemplate">Modified Template:</p>
              <p>{modifiedTemplate}</p>
              <button className="updateButton" onClick={handleUpdateMessage}>
                Update Message
              </button>
            </div>
          )}
        </div>
      )}
      <MessageSendButton modifiedTemplate={modifiedTemplate} />
    </div>
  );
};

export default PresetTemplate;
