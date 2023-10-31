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
import axios from "axios";

const ChatInput = ({ sessionId, setEntireMessages}) => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const cardBgColor = useColorModeValue("white", "gray.700");
  const inputBgColor = useColorModeValue("gray.100", "gray.600");
  const buttonColorScheme = useColorModeValue("blue", "teal");

  const handleSendMessage = async (e) => {
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
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.error("Error submitting form", error);
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
            placeholder="Type your message..."
            borderRadius="md"
            flexGrow={1}
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
