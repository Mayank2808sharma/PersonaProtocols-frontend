import HomePage from './components/HomePage/HomePage';
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <HomePage/>
    </ChakraProvider>
  );
}

export default App;
