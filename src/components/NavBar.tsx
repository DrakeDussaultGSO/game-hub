import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

function navbar() {
  return (
    <HStack justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Text>Game Hub</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
}

export default navbar;
