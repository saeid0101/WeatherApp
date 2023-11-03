import { useQuery } from "react-query";
import CitiesClient from "../services/citiesClient";

const citiesClient = new CitiesClient("/cities");

function useCities(searchInput) {
  return useQuery({
    queryKey: ["city", searchInput],
    queryFn: () =>
      citiesClient.getCity({ params: { namePrefix: searchInput } }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}

export default useCities;
