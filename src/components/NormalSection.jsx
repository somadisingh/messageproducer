import React from 'react';
import MessageTemplate from './MessageTemplate';
import UserSection from './PresetTemplate';

const AdminSection = ({onLogout}) => {
  return (
    <div>
      <h2>Normal User Section</h2>

      {/* <MessageTemplate /> */}
      {/* <KafkaDetails /> */}
      <UserSection />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AdminSection;
