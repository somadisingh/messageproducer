import React, { useState } from 'react';
import LoginPage from './components/Login';
import AdminSection from './components/Dashboards/AdminSection';
import UserSection from './components/Functions/PresetTemplate';
import NormalSection from './components/Dashboards/NormalSection';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  const [userType, setUserType] = useState(null);

  const handleLogin = (role) => {
    setUserType(role);
  };

  const handleLogout = () => {
    setUserType(null);
    return <Navigate to="/" />;
  }

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
