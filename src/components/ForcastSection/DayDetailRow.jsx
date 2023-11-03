import { VStack, Text, Image } from "@chakra-ui/react";
import React from "react";

function DayDetailRow({ time, HourlyWeather }) {
  return (
    <VStack
      bg={"primary.600"}
      spacing={{ base: 4, md: 5, lg: 5, xl: 5 }}
      paddingY={{ base: 8, md: 5, lg: 5, xl: 5 }}
    >
      <Text
        color={"text.200"}
        fontSize={{ base: "0.9rem", md: ".9rem", lg: "1.2rem", xl: "1.4rem" }}
      >
        {time}
      </Text>

      <Image
        boxSize={{ base: "24px", md: "32px", lg: "50px" }}
        src={`icons/${HourlyWeather.weather[0].icon}.png`}
        objectFit={"fill"}
      />
      <Text
        fontWeight={"normal"}
        color="accent.500"
        fontSize={{ base: ".9rem", md: ".9rem", lg: "1.2rem", xl: "1.4rem" }}
      >
        {Math.round(HourlyWeather.main.temp)} °C
      </Text>
    </VStack>
  );
}

export default DayDetailRow;
