// LogIn.js
import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Heading, Input, Flex, Box, Button, useBreakpointValue } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';

const LogIn = ({setSessionId,setLoggedIn}) => {
  const toast = useToast()
  const navigate = useNavigate();
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const fontSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  const [name,setName] = useState('');
  const handleClickEvent=async(e)=>{
    const trimmedName = name.trim();
    if (!trimmedName) {
      toast({
        title: 'Account Creation Failed',
        description: "Enter Name to log in",
        status: 'error',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      })
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:5000/start-session");
      setSessionId(data.sessionId);
      setLoggedIn(true);
      setName("");
      toast({
        title: 'Session Created',
        description: "Account created successfully",
        status: 'success',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      })
      navigate('/home'); // Redirect to home after successful login
    } catch (error) {
      toast({
        title: 'Session not created',
        description: "Error starting session",
        status: 'error',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      })
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
