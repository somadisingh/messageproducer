import React, { useState } from 'react';

const KafkaDetails = () => {
  const [kafkaServer, setKafkaServer] = useState('');
  const [topic, setTopic] = useState('');

  const handleSaveDetails = () => {
    // Add logic to send Kafka details to the server or state
    console.log('Saving Kafka details:', { kafkaServer, topic });
    // Clear the form fields after saving the details
    setKafkaServer('');
    setTopic('');
  };

  return (
    <div>
      <h3>Kafka Details Form</h3>
      <label htmlFor="kafkaServer">Kafka Server:</label>
      <input type="text" id="kafkaServer" value={kafkaServer} onChange={(e) => setKafkaServer(e.target.value)} />

      <label htmlFor="topic">Topic:</label>
      <input type="text" id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} />

      <button onClick={handleSaveDetails}>Save Details</button>
    </div>
  );
};

export default KafkaDetails;
