import React, { useState, useRef } from 'react';
import { Input, Button, Flex, Box, useColorModeValue, IconButton } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';

const ChatInput = ({ onSendMessage, onSendFile }) => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const cardBgColor = useColorModeValue('white', 'gray.700');
  const inputBgColor = useColorModeValue('gray.100', 'gray.600');
  const buttonColorScheme = useColorModeValue('blue', 'teal');

  const handleSendMessage = () => {
    console.log(message)
    setMessage("");
  };

  const handleSendFile = () => {
    console.log(file);
    setFile(null);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Flex justify="center" p={3}>
      <Box
        bg={cardBgColor}
        borderRadius="lg"
        w="100%"
      >
        <Flex align="center">
          <IconButton
            icon={<AttachmentIcon />}
            onClick={openFileInput}
            colorScheme={buttonColorScheme}
            mr={2}
            aria-label="Attach file"
          />
          <Input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            hidden
          />
          <Input
            bg={inputBgColor}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleEnterKeyPress}
            placeholder="Type your message..."
            borderRadius="md"
            flexGrow={1}
          />
          <Button
            colorScheme={buttonColorScheme}
            onClick={handleSendMessage}
            ml={2}
            borderRadius="md"
          >
            Send
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ChatInput;
