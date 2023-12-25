import React from 'react';
import MessageTemplate from './MessageTemplate';
import KafkaDetails from './KafkaDetails';

const AdminSection = ({onLogout}) => {
  return (
    <div>
      <h2>Admin Section</h2>

      <MessageTemplate />
      <KafkaDetails />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AdminSection;
