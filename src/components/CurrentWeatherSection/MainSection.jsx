import { VStack } from "@chakra-ui/react";
import TopHeadingMainSection from "./TopHeadingMainSection";
import TempIconMainSection from "./TempIconMainSection";

function MainSection({ weather, fetchTime }) {
  return (
    <VStack align={"flex-start"} pl={8} pt={6}>
      <TopHeadingMainSection fetchTime={fetchTime} cityName={weather.name} />
      <TempIconMainSection weather={weather} />
    </VStack>
  );
}

export default MainSection;
