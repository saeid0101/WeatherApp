import DayCard from "./DayCard";
import DayDetail from "./DayDetail";
import { useState } from "react";
import { Box, Flex, HStack } from "@chakra-ui/react";
import { groupForcastByDay } from "../../utility/groupByDay";

function HourlyForcastList({ forcast, destinationTimeZone }) {
  const newData = groupForcastByDay(forcast, destinationTimeZone);
  const [selectedDay, setSelectedDay] = useState(newData[0]);

  return (
    <Flex justifyContent={"space-between"} flexDir={"column"}>
      <HStack
        bg={"primary.300"}
        justifyContent={"center"}
        spacing={{ base: "5", md: "10" }}
        pb={3}
        pt={3}
      >
        {newData.map((entry) => (
          <Box key={entry.date.day} onClick={() => setSelectedDay(entry)}>
            <DayCard
              entry={entry}
              selected={selectedDay.date.day === entry.date.day}
            />
          </Box>
        ))}
      </HStack>
      <DayDetail day={selectedDay} destinationTimeZone={destinationTimeZone} />
    </Flex>
  );
}

export default HourlyForcastList;
