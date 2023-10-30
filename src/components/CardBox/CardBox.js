import React from 'react';
import messages from './../data.json';
import { Box, Flex, Text, useColorMode } from '@chakra-ui/react';
const CardBox = () => {
  const { colorMode } = useColorMode();
  
  const userBgColor = { light: 'green.100', dark: 'green.200' };
  const botBgColor = { light: 'gray.100', dark: 'gray.200' };
  const userTextColor = { light: "green.800", dark: "green.900" };
  const botTextColor = { light: "gray.800", dark: "gray.900" };
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
