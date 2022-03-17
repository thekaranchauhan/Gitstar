import React from "react";
import { Flex, Image, Box, Heading, Text } from "@chakra-ui/react";

export default function Brand() {
    <Flex alignItems="center">
        <Image
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            height="65px"
            width="75px"
        />
        <Box ml="10px">
            <Heading fontSize="24px">Gitstar</Heading>
            <Text color="#FF7ABA">Find most starred Github repositories.

</Text>
        </Box>
    </Flex>
};