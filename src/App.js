import { useState } from 'react';
import LogIn from './components/LogIn/LogIn';
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  const [sessionId,setSessionId] = useState('');
  return (
    <ChakraProvider>
      <LogIn setSessionId={setSessionId}/>
    </ChakraProvider>
  );
}

export default App;
