import { useQuery } from "react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient("/forecast");

function useForcast(lat, lon) {
  return useQuery({
    queryKey: ["forcast", lat, lon],
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

export default useForcast;
