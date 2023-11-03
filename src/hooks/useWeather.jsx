import { useQuery } from "react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient("/weather");

function useWeather(lat, lon) {
  return useQuery({
    queryKey: ["currentWeather", lat, lon],
    queryFn: () =>
      apiClient.getWeather({
        params: {
          lat: lat,
          lon: lon,
          units: "metric",
        },
      }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}

export default useWeather;
