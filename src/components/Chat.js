import React, { useState } from 'react';
import axios from 'axios';

function ChatComponent({ sessionId }) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const onSend = async () => {
    const userMessage = message;
    setMessage('');
    setChatHistory([...chatHistory, { role: 'user', content: userMessage }]);
    
    try {
      const response = await axios.post('http://localhost:5000/chat', {
        message: userMessage,
        sessionId,
      });
      const botResponse = response.data.message;
      setChatHistory([...chatHistory, { role: 'user', content: userMessage }, { role: 'bot', content: botResponse }]);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div>
      <div>
        {chatHistory.map((msg, index) => (
          <div key={index}>
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <textarea value={message} onChange={onMessageChange} />
      <button onClick={onSend}>Send</button>
    </div>
  );
}

export default ChatComponent;
