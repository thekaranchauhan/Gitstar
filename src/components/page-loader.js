import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export default function PageLoader() {
  return (
    <Flex
      position="fixed"
      left={0}
      right={0}
      bottom={0}
      top={0}
      alignItems="center"
      justifyContent="center"
      bg="#181719"
      zIndex={999}
    >
      <Spinner thickness="4px" color="#00FFDD" />
    </Flex>
  );
}
