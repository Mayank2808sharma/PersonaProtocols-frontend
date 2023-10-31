import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import CardBox from "./../CardBox/CardBox";
import ChatInput from "./../ChatInput/ChatInput"; // Import your ChatInput component
import { Box, Flex } from "@chakra-ui/react";
import messages from './../data.json';
const Home = ({ sessionId }) => {
  const[entireMessages, setEntireMessages] = useState(messages);
  console.log(sessionId);
  return (
    <Flex direction="column" minH="100vh">
      <Box position="fixed" top="0" left="0" right="0" zIndex="sticky">
        <Navbar />
      </Box>
      <Flex
        direction="column"
        overflowY="auto"
        padding="60px 0 60px" // Adjust according to the height of your navbar and input
        flex="1"
      >
        <CardBox messages={entireMessages} />
      </Flex>
      <Box position="fixed" bottom="0" left="0" right="0" padding="4">
        <ChatInput sessionId={sessionId} setEntireMessages={setEntireMessages}/>
      </Box>
    </Flex>
  );
};

export default Home;