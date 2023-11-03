import { Box, SimpleGrid } from "@chakra-ui/react";
import DayDetailRow from "./DayDetailRow";
import convertTime from "../../utility/convertTime";

function DayDetail({ day, destinationTimeZone }) {
  return (
    <SimpleGrid
      bg={"primary.300"}
      spacing={3}
      minChildWidth={{ base: "22vw", sm: "20vw", md: "10vw" }}
    >
      {day?.values.map((value) => (
        <Box key={value.dt}>
          <DayDetailRow
            HourlyWeather={value}
            time={convertTime(value.dt, destinationTimeZone).hourSimple}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default DayDetail;
