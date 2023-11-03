import { Center, Box, Heading } from "@chakra-ui/react";
import Search from "./Search";
import "./HomePage.css";

function HomePage() {
  return (
    <Box>
      <Box bg={"primary.600"} w={"100vw"} h={"60vh"}>
        <Center h={"100%"} pt={"10vh"}>
          <Heading
            className="welcomeText"
            textAlign={"center"}
            size={"3xl"}
            color="text.500"
          >
            Welcome to Weather App{" "}
          </Heading>
        </Center>
      </Box>

      <Box bg={"accent.500"} w={"100vw"} h={"40vh"}></Box>

      <Box
        w={{ base: "80vw", lg: "60vw" }}
        position={"absolute"}
        top={"57vh"}
        left={{ base: "10vw", lg: "20vw" }}
      >
        <Search />
      </Box>
    </Box>
  );
}

export default HomePage;
