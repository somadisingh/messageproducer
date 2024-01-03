import React, { useState, useEffect } from 'react';
import LoginPage from './components/Login';
import AdminSection from './components/Dashboards/AdminSection';
import UserSection from './components/Functions/PresetTemplate2';
import NormalSection from './components/Dashboards/NormalSection';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // Check if there's already a role stored in local storage
    const role = localStorage.getItem('userRole');

    // If there's a role stored in local storage, set the user type
    if (role) {
      setUserType(role);
    }
  }, []);

  const handleLogin = (role) => {
    // Store the role in local storage
    localStorage.setItem('userRole', role);
    setUserType(role);
};

  const handleLogout = () => {
    // Remove the role from local storage
    localStorage.removeItem('userRole');
    setUserType(null);
    return <Navigate to="/" />;
  };

  return (
    <Router>
      <div>
      <h1>KafkaLite: A Message Producer Tool</h1>
      <Routes>
        <Route
          path="/"
          element={
            userType ? (
              userType === 'admin' ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/normal" />
              )
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/admin"
          element={
            userType === 'admin' ? (
              <AdminSection onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/normal"
          element={
            userType === 'normal' ? (
              <NormalSection onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
