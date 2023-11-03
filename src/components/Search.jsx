import { AsyncPaginate } from "react-select-async-paginate";
import CitiesClient from "../services/citiesClient";
import { Box } from "@chakra-ui/react";
import useCity from "../store";

const citiesClient = new CitiesClient("/cities");

function Search() {
  const { city, setCity } = useCity();

  const loadOptions = async (inputValue) => {
    const { data: cities, error } = await citiesClient.getCity({
      params: { namePrefix: inputValue },
    });
    if (error) throw error;
    const options = cities?.map((city) => ({
      label: city.name,
      value: { lat: city.latitude, lon: city.longitude },
    }));

    return {
      options,
      hasMore: false,
    };
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
    }),
    option: (provided, state) => ({
      ...provided,
      marginTop: "0px",
      backgroundColor: state.isFocused
        ? "var(--chakra-colors-primary-600)"
        : null,
      color: state.isFocused ? "var(--chakra-colors-text-200)" : null,
    }),
    input: (provided, state) => ({
      ...provided,
      height: "5vh",
    }),
  };

  return (
    <Box w={"100%"} h={"6vh"}>
      <AsyncPaginate
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "hotpink",
            primary: "black",
          },
        })}
        placeholder="Enter a city name..."
        onChange={(value) => setCity(value)}
        value={city}
        loadOptions={loadOptions}
        debounceTimeout={600}
      />
    </Box>
  );
}

export default Search;
