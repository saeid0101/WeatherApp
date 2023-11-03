import { Text, Image, Flex } from "@chakra-ui/react";
import "./DayCard.css";

function DayCard({ entry, selected }) {
  //mean is used to show the weather at the middle of the day
  const mean = parseInt(Math.round(entry.values.length / 2));

  return (
    <Flex
      flexDirection={"column"}
      gap={{ base: 6, md: 3 }}
      justifyContent={"space-between"}
      mt={{ base: 2, md: 3, lg: 3, xl: 3 }}
      mb={{ base: 2, md: 3, lg: 3, xl: 3 }}
      _hover={{
        cursor: "pointer",
        transform: "scale(1.06)",
      }}
    >
      <Text
        fontSize={{ base: "0.9rem", md: ".9rem", lg: "1.2rem", xl: "1.4rem" }}
        textAlign={"center"}
        color={selected ? "accent.500" : null}
        fontWeight={selected ? "800" : null}
      >
        {entry.date.day}
      </Text>
      <Image
        boxSize={{ base: "28px", md: "32px", lg: "40px", xl: "40px" }}
        src={`icons/${entry.values[mean - 1].weather[0].icon}.png`}
        objectFit={"fill"}
      />
    </Flex>
  );
}

export default DayCard;
