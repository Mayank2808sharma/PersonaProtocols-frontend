import React from 'react';
import { Box, Flex, Text, useColorMode,Heading } from '@chakra-ui/react';
const CardBox = ({messages}) => {
  const { colorMode } = useColorMode();
  
  const userBgColor = { light: 'green.100', dark: 'green.200' };
  const botBgColor = { light: 'gray.100', dark: 'gray.200' };
  const userTextColor = { light: "green.800", dark: "green.900" };
  const botTextColor = { light: "gray.800", dark: "gray.900" };
  if(messages.length==0){
    return(
      <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box
        borderRadius="md"
        px={5}
        py={3}
        maxWidth="100%"
      >
        <Heading fontSize="3xl">Submit file for personalized, document-based query responses.</Heading>
      </Box>
    </Flex>
    )
  }
  return (
    <Flex
      direction="column"
      p={3}
      w="100%"
      h="100%"
      overflowY="auto"
    >
      {messages.map((message, index) => (
        <Flex
          key={index}
          justify={message.type === 'user' ? 'flex-end' : 'flex-start'}
          mb={2}
        >
          <Box
            bg={message.type === 'user' ? userBgColor[colorMode] : botBgColor[colorMode]}
            color={message.type === "user" ? userTextColor[colorMode] : botTextColor[colorMode]}
            borderRadius="md"
            px={3}
            py={1}
            maxWidth="70%"
          >
            <Text fontSize="sm">{message.text}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default CardBox;
