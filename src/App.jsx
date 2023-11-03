import { Box } from "@chakra-ui/react";
import useCity from "./store";
import MainContent from "./components/MainContent";
import HomePage from "./components/HomePage";

function App() {
  const city = useCity((s) => s.city);
  const latitude = city?.value?.lat;
  const longitude = city?.value?.lon;

  return (
    <Box bg={"primary.300"} w={"100vw"} h={[null, null, "100vh"]}>
      {!city && <HomePage />}
      {city && <MainContent latitude={latitude} longitude={longitude} />}
    </Box>
  );
}

export default App;
