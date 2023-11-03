import React from "react";
import { Text, VStack } from "@chakra-ui/react";

function SideSectionItem({ label, value, unit }) {
  return (
    <VStack
      fontSize={{ base: "0.9rem", md: ".9rem", lg: "1.1rem", xl: "1.2rem" }}
    >
      <Text textAlign={"center"}>{label}:</Text>
      <Text color={"accent.500"}>
        {value} {unit}
      </Text>
    </VStack>
  );
}

export default SideSectionItem;
