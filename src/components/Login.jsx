import React, { useState } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [kafkaServer, setKafkaServer] = useState('');
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

  const handleUpdateConfig = () => {
    axios.post('http://localhost:8081/server/update', {
      kafkaServer: kafkaServer,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error updating Kafka configuration:', error);
    });
  };

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>

      <h3>Kafka Server Configuration</h3>
      <label htmlFor="bootstrapServers">Kafka Server Address (Format -> broker:port):</label>
      <input
        type="text"
        id="bootstrapServers"
        value={kafkaServer}
        onChange={(e) => setKafkaServer(e.target.value)}
      />

      <button onClick={handleUpdateConfig}>Update Kafka Configuration</button>
    </div>
  );
};

export default Login;
