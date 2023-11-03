import { Box, Grid } from "@chakra-ui/react";
import SideSection from "./SideSection";
import MainSection from "./MainSection";

function CurrentWeather({
  weather,
  fetchTime,
  handleTimeZone,
  destinationTimeZone,
}) {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "5fr 2fr" }}
      color="text.500"
      bg="primary.600"
    >
      <Box mb={{ md: 5, lg: 8 }} pt={{ base: 4, md: 0 }}>
        <MainSection weather={weather} fetchTime={fetchTime} />
      </Box>

      <Box flex="2" h={"100%"}>
        <SideSection
          weather={weather}
          handleTimeZone={handleTimeZone}
          destinationTimeZone={destinationTimeZone}
        />
      </Box>
    </Grid>
  );
}

export default CurrentWeather;
