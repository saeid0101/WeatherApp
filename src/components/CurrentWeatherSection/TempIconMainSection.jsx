import { Flex, Text, Box, Heading, Image } from "@chakra-ui/react";

function TempIconMainSection({ weather }) {
  return (
    <Flex
      mb={{ base: 6, md: 4, lg: 6 }}
      mt={3}
      justifyContent={"flex-start"}
      alignItems={"center"}
      gap={3}
    >
      <Box maxW={"12vw"}>
        <Image
          src={`icons/${weather.weather[0].icon}.png`}
          objectFit={"fill"}
        />
      </Box>
      <Box alignContent={"center"}>
        <Heading size={"3xl"} as={"h3"} color={"accent.500"}>
          {Math.round(weather.main.temp)} °C
        </Heading>
        <Text fontSize={"xl"}>
          Feels like: {Math.round(weather.main.feels_like)} °C
        </Text>
      </Box>
    </Flex>
  );
}

export default TempIconMainSection;
