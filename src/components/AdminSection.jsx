import React from 'react';
import MessageTemplate from './MessageTemplate';
import KafkaDetails from './KafkaDetails';

const AdminSection = () => {
  return (
    <div>
      <h2>Admin Section</h2>

      <MessageTemplate />
      <KafkaDetails />
    </div>
  );
};

export default AdminSection;
