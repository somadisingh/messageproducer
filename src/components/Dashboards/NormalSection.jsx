import React from 'react';
import MessageTemplate from '../Functions/MessageTemplate';
import PresetTemplate from '../Functions/PresetTemplate';

const AdminSection = ({onLogout}) => {
  return (
    <div>
      <h2>Normal User Section</h2>
      <button onClick={onLogout}>Logout</button>
      {/* <MessageTemplate /> */}
      {/* <KafkaDetails /> */}
      <PresetTemplate />
    </div>
  );
};

export default AdminSection;
