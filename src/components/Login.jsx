import React, { useState } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/kafka-api/users/login', {
        username: username,
        password: password,
      });

      const userType = response.data;
      console.log('User type:', userType);
      onLogin(userType);
      //history.push('/${userType}');

    } catch (error) {
      console.error('Error logging in:', error);
    }  
    
  };

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
