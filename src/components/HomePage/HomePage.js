import React from 'react';
import Navbar from "./../Navbar/Navbar";
import { BsArrowRight } from "react-icons/bs";
import { Heading, Input, Flex, Box, Button } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="calc(100vh - 60px)" // Adjust 60px according to your Navbar's height
        textAlign="center"
      >
        <Box mb={20}>
          <Heading size="4xl">
            Welcome to Persona <span style={{ color: "#38a169" }}>Protocol</span>
          </Heading>
          <Heading size="xl">A GPT trained on your dataset</Heading>
        </Box>
        <Flex align="center">
          <Input
            placeholder="Enter your Name"
            variant="flushed"
            size="lg"
            width="md"
            mr={2}
          />
          <Button
            rightIcon={<BsArrowRight />}
            colorScheme="green"
            size="lg"
            fontSize="2xl"
            px={4}
            py={2}
          >
            Enter
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
