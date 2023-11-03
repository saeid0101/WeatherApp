import { Flex, Button } from "@chakra-ui/react";
import SideSectionItem from "./SideSectionItem";

function SideSection({ weather, handleTimeZone, destinationTimeZone }) {
  return (
    <Flex
      flexWrap={"wrap"}
      p={{ base: 0, md: 8 }}
      ml={{ base: 0, md: 4 }}
      mr={{ base: 0, md: 8 }}
      justifyContent={{ base: "space-evenly", md: "space-between" }}
      h={{ base: "150px", md: "100%" }}
      bg={"primary.700"}
      direction={{ base: "row", md: "column" }}
    >
      <Button
        fontSize={{ md: ".9rem", lg: "1.1rem", xl: "1.1rem" }}
        borderRadius={"0"}
        onClick={handleTimeZone}
        w={"100%"}
        mb={{ md: 4 }}
        p={{ md: 4 }}
      >
        {destinationTimeZone ? "To System Time" : "To Local Time"}
      </Button>
      <SideSectionItem
        label={"Pressure"}
        value={weather.main.pressure}
        unit={"Pa"}
      />
      <SideSectionItem
        label={"Humidity"}
        value={weather.main.humidity}
        unit={"%"}
      />
      <SideSectionItem
        label={"Wind speed"}
        value={weather.wind.speed}
        unit={"m/s"}
      />
    </Flex>
  );
}

export default SideSection;
