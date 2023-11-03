import { Text, Box, Heading } from "@chakra-ui/react";

function TopHeadingMainSection({ fetchTime, cityName }) {
  return (
    <Box>
      <Heading
        size={{ base: "3xl", md: "2xl", lg: "4xl" }}
        mb={{ base: 6, md: 4, lg: 6 }}
      >
        {cityName}
      </Heading>
      <Heading size={"xl"} as={"h4"} color={"text.500"}>
        {fetchTime.fullDate}
      </Heading>
      <Text color={"text.200"}>Last updated at: {fetchTime.hour}</Text>
    </Box>
  );
}

export default TopHeadingMainSection;
