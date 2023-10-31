import React, { useState, useRef } from "react";
import {
  Input,
  Button,
  Flex,
  Box,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { useToast } from '@chakra-ui/react'
import axios from "axios";

const ChatInput = ({ sessionId, setEntireMessages}) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const toast = useToast()

  const cardBgColor = useColorModeValue("white", "gray.700");
  const inputBgColor = useColorModeValue("gray.100", "gray.600");
  const buttonColorScheme = useColorModeValue("blue", "teal");

  const handleSendMessage = async (e) => {
    const trimmedMsg = message.trim();
    if (!trimmedMsg) {
      toast({
        title: 'Query Failed',
        description: "Cannot sent empty query",
        status: 'error',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      })
      return;
    }
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/chat", {
        message,
        sessionId,
      });
      setEntireMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: message },
      ]);
      setEntireMessages((prevMessages) => [
        ...prevMessages,
        { type: "bot", text: data.response },
      ]);
      toast({
        title: 'Query Sent SuccessFully',
        description:"wait for the response",
        status: 'info',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Query not sent',
        description:error.response.data,
        status: 'error',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      })
    }
    setMessage("");
 };

  const handleSendFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("sessionId", sessionId);
    setFile(null);
    try {
      const resp = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast({
        title: 'File Submitted Successfully',
        status: 'success',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'File not submitted',
        description:error.response.data,
        status: 'error',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      })
      
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
      <Box bg={cardBgColor} borderRadius="lg" w="100%">
        <Flex align="center">
          <IconButton
            icon={<AttachmentIcon />}
            onClick={openFileInput}
            colorScheme={message!==""?"tranparent":buttonColorScheme}
            mr={2}
            aria-label="Attach file"
          />
          <Input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            disabled={message!==""}
            hidden
          />
          <Input
            bg={inputBgColor}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            borderRadius="md"
            flexGrow={1}
            disabled={file !== null}
          />
          <Button
            colorScheme={buttonColorScheme}
            onClick={file === null ? handleSendMessage : handleSendFile}
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
