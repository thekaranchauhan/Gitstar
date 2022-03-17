import React from "react";
import { Flex, Image, Box, Heading, Text } from "@chakra-ui/react";

export default function Brand() {
  return (
    <Flex alignItems="center">
      <Image
        src={`${process.env.PUBLIC_URL}/logo.png`}
        height="65px"
        width="75px"
      />
      <Box ml="10px">
        <Heading color="#fff" fontSize="24px">Gitstar</Heading>
        <Heading color="#00FFDD" as='h5' size='sm'>
        Shows most starred github repositories.
        </Heading>
      </Box>
    </Flex>
  );
}
