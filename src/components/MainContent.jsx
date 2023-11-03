import useWeather from "../hooks/useWeather";
import useForcast from "../hooks/useForcast";
import convertTime from "../utility/convertTime";
import { Box } from "@chakra-ui/react";
import CurrentWeather from "./CurrentWeatherSection/CurrentWeather";
import HourlyForcastList from "./ForcastSection/HourlyForcastList";
import { useState } from "react";
import Search from "./Search";

function MainContent({ latitude, longitude }) {
  const [destinationTimeZone, setdestinationTimeZone] = useState(false);
  const { data: weather, isLoading, error } = useWeather(latitude, longitude);
  const { data: forcast, isLoadingF, errorF } = useForcast(latitude, longitude);

  const handleTimeZone = () => {
    setdestinationTimeZone(!destinationTimeZone);
  };
  const fetchTime = convertTime(
    weather?.dt,
    destinationTimeZone && weather?.timezone
  );

  return (
    <Box h={{ md: "100vh" }}>
      <Search />

      {weather && (
        <CurrentWeather
          weather={weather}
          fetchTime={fetchTime}
          handleTimeZone={handleTimeZone}
          destinationTimeZone={destinationTimeZone}
        />
      )}
      {forcast && (
        <HourlyForcastList
          forcast={forcast}
          destinationTimeZone={destinationTimeZone && weather?.timezone}
        />
      )}
    </Box>
  );
}

export default MainContent;
