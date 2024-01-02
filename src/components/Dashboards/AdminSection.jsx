import React from 'react';
import MessageTemplate from '../Functions/MessageTemplate';
import PresetTemplate from '../Functions/PresetTemplate';

const AdminSection = ({onLogout}) => {
  return (
    <div>
      <h2>Admin Section</h2>
      <button onClick={onLogout}>Logout</button>
      <MessageTemplate />
      <PresetTemplate />
      
    </div>
  );
};

export default AdminSection;
