import React from "react";
import { Text } from "@chakra-ui/react";
import moment from "moment";

export default function GroupTitle({ startDate, endDate }) {
  if (!startDate || !endDate) {
    return null;
  }

  const startMoment = moment(startDate);
  const endMoment = moment(endDate);

  return (
    <Text fontSize="24px" fontWeight={700} color="#fff">
      {startMoment.fromNow()}{" "}
      <Text
        fontSize="15px"
        fontWeight={500}
        color="#00FFDD"
        ml="5px"
        as="span"
      >
        {startMoment.format("MMMM D, YYYY")} -{" "}
        {endMoment.format("MMMM D, YYYY")}
      </Text>
    </Text>
  );
}
