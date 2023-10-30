"use client";

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  Heading
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, } from "@chakra-ui/icons";
import {FaGithub} from "react-icons/fa"

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading size='lg'>Persona <span style={{color:"#38a169"}}>Protocol</span></Heading>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <HStack>
                <a href="https://github.com/Mayank2808sharma/PersonaProtocols-frontend" target="_blank">
                <Button colorScheme="green" leftIcon={<FaGithub />}>
                  Github
                </Button>
                </a>
              </HStack>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
