import { useState } from "react";
import LogIn from "./components/LogIn/LogIn";
import Home from "./components/Home/Home";
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
function App() {
  const [sessionId, setSessionId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={loggedIn ? "/home" : "/login"} replace />}
          />
          <Route
            path="/home"
            element={loggedIn ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={
              <LogIn setSessionId={setSessionId} setLoggedIn={setLoggedIn} />
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
