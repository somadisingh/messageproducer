import React, { useState } from 'react';
import Login from './components/Login';
import AdminSection from './components/AdminSection';
import UserSection from './components/UserSection';

const App = () => {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  }

  return (
    <div>
      <h1>Message Producer Tool</h1>
      {userRole ? (
        <button onClick={handleLogout}>Logout</button>
      ) : null}
      {!userRole ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          {userRole === 'admin' ? (
            <AdminSection />
          ) : (
            <UserSection />
          )}
        </div>
      )}
    </div>
  );
};

export default App;