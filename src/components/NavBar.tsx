import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo/logo.webp";

function navbar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>Game Hub</Text>
    </HStack>
  );
}

export default navbar;
