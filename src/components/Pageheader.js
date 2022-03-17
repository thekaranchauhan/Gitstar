import React from "react";
import { Button, Stack, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import Brand from "./Brand";

export default function Pageheader() {
    <Flex justifyContent="space-between" alignItems="center" pt="15px">
        <Brand />
        <Stack isInline>
            <Button
                leftIcon={<FaGithub />}
                colorScheme="teal"
                as="a"
                target="_blank"
                href="https://github.com/thekaranchauhan/Gitstar"
            >
                Source
            </Button>
        </Stack>
    </Flex>
};