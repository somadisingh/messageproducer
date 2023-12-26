import React from 'react';
import MessageTemplate from './MessageTemplate';
import PresetTemplate from './PresetTemplate';

const AdminSection = ({onLogout}) => {
  return (
    <div>
      <h2>Admin Section</h2>

      <MessageTemplate />
      {/* <KafkaDetails /> */}
      <PresetTemplate />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AdminSection;
