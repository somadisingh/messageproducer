import React from 'react';
import MessageTemplate from './MessageTemplate';
import PresetTemplate from './PresetTemplate';

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
