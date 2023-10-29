import React, { useState } from 'react';
import FileUploadComponent from './components/FileUpload';
import ChatComponent from './components/Chat';

function App() {
  const [sessionId] = useState('unique-session-id'); // In a real app, generate a unique session ID for each user.

  return (
    <div>
      <h1>Chat with GPT</h1>
      <FileUploadComponent sessionId={sessionId} />
      <ChatComponent sessionId={sessionId} />
    </div>
  );
}

export default App;
