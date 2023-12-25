import React, { useState } from 'react';
import Login from './components/Login';
import AdminSection from './components/AdminSection';
import UserSection from './components/UserSection';
import MessageProducer from './components/MessageProducer';

const App = () => {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  return (
    <div>
      <h1>Message Producer Tool</h1>
      <MessageProducer />
      {/* {!userRole ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          {userRole === 'admin' ? (
            <AdminSection />
          ) : (
            <UserSection />
          )}
        </div>
      )} */}
    </div>
  );
};

export default App;
