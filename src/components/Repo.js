import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Link,
  Stack,
  Button,
} from "@chakra-ui/react";
import { GoStar, GoIssueOpened, GoRepoForked } from "react-icons/go";
import moment from "moment";
import colors from "../data/colors.json";

export default function Repo(props) {
  const { isListView = false, repo } = props;
  return (
    <Flex
      borderWidth={1}
      bg="#BFFFF0"
      p="15px"
      rounded="5px"
      alignItems="flex-start"
      
    >
      <Flex flex={1} flexDir="column">
        {!isListView && (
          <Flex mb="15px">
            <Image
              src={repo.owner.avatar_url}
              w={"35px"}
              h={"35px"}
              rounded="5px"
            />
            <Box ml="10px">
              <Heading fontSize="16px">{repo.owner.login}</Heading>
              <Text
                as="a"
                fontSize="14px"
                href={repo.owner.html_url}
                target="_blank"
              >
                View Profile
              </Text>
            </Box>
          </Flex>
        )}

        <Box mb="15px" flex={1}>
          <Box mb="10px">
            <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
              {isListView && (
                <>
                  <Text as="a" href={repo.owner.html_url} target="_blank">
                    {repo.owner.login}
                  </Text>
                  &nbsp;/&nbsp;
                </>
              )}
              <Text as="a" href={repo.html_url} target="_blank">
                {repo.name}
              </Text>
            </Flex>
            <Text fontSize="14px" color="gray.600">
              <Box as={"span"} d={["none", "none", "inline", "inline"]}>
                Buil by &middot;{" "}
                <Link
                  fontWeight={600}
                  href={repo.owner.html_url}
                  target="_blank"
                >
                  {repo.owner.login}
                </Link>{" "}
                &middot;
              </Box>{" "}
              {moment(repo.created_at).format("MMMM D, YYYY")}
            </Text>
          </Box>

          <Text fontSize="14px" color="gray.900">
            {repo.description}
          </Text>
        </Box>

        <Stack isInline position="static" spacing="10px" bottom="0px">
          {repo.language ? (
            <Button
              as="a"
              cursor="pointer"
              variant="link"
              fontSize="14px"
              iconSpacing="4px"
              target="_blank"
              _hover={{ textDecoration: "none" }}
              color={
                colors[repo.language] ? colors[repo.language].color : "#FF7ABA"
              }
            >
              {repo.language}
            </Button>
          ) : null}
          <Button
            as="a"
            cursor="pointer"
            leftIcon={<GoStar />}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            target="_blank"
            href={`${repo.html_url}/stargazers`}
            _hover={{ textDecor: "none" }}
          >
            {repo.stargazers_count}
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={<GoIssueOpened />}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            target="_blank"
            href={`${repo.html_url}/issues`}
            _hover={{ textDecor: "none" }}
          >
            {repo.open_issues_count}
          </Button>
          <Button
            as="a"
            cursor="pointer"
            leftIcon={<GoRepoForked />}
            variant="link"
            fontSize="14px"
            iconSpacing="4px"
            target="_blank"
            href={`${repo.html_url}/network/members`}
            _hover={{ textDecor: "none" }}
          >
            {repo.forks_count}
          </Button>
        </Stack>
      </Flex>
      {isListView && (
        <Image
          src={repo.owner.avatar_url}
          w={"105px"}
          h={"105px"}
          rounded="100%"
        />
      )}
    </Flex>
  );
}
