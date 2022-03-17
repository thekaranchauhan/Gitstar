import React from "react";
import { Button, Stack, Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

import Brand from "./brand";

export default function PageHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" pt="15px">
      <Brand />
      <Stack isInline>
        <Button
          leftIcon={<FaGithub />}
          bg="#00FFDD"
          as="a"
          target="_blank"
          href="https://github.com/thekaranchauhan/Gitstar"
        >
          Source
        </Button>
      </Stack>
    </Flex>
  );
}
