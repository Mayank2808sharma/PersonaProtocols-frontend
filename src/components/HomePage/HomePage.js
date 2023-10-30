// HomePage.js
import React from 'react';
import Navbar from "./../Navbar/Navbar";
import { BsArrowRight } from 'react-icons/bs';
import { Heading, Input, Flex, Box, Button, useBreakpointValue } from '@chakra-ui/react';

const HomePage = () => {
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const fontSize = useBreakpointValue({ base: 'xl', md: '2xl' });

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
          />
          <Button
            rightIcon={<BsArrowRight />}
            colorScheme="green"
            size={buttonSize}
            fontSize={fontSize}
          >
            Enter
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
