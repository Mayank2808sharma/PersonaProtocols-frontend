// LogIn.js
import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Heading, Input, Flex, Box, Button, useBreakpointValue } from '@chakra-ui/react';
import axios from 'axios';

const LogIn = ({setSessionId,setLoggedIn}) => {
  const navigate = useNavigate();
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const fontSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  const [name,setName] = useState('');
  const handleClickEvent=async(e)=>{
    try {
      const { data } = await axios.post("http://localhost:5000/start-session");
      setSessionId(data.sessionId);
      setLoggedIn(true);
      setName("");
      navigate('/home'); // Redirect to home after successful login
    } catch (error) {
      console.error('Error starting session', error);
    }
  }
  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="calc(100vh - 60px)"
        textAlign="center"
        px={4}
      >
        <Box mb={20}>
          <Heading size={fontSize}>
            Welcome to Persona <span style={{ color: "#38a169" }}>Protocol</span>
          </Heading>
          <Heading size="lg">A GPT trained on your dataset</Heading>
        </Box>
        <Flex direction="column" align="center" w="full" maxW="md">
          <Input
            placeholder="Enter your Name"
            variant="flushed"
            size={buttonSize}
            mb={2}
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
          <Button
            rightIcon={<BsArrowRight />}
            colorScheme="green"
            size={buttonSize}
            fontSize={fontSize}
            onClick={handleClickEvent}
          >
            Enter
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default LogIn;
