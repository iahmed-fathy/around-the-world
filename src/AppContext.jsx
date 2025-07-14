import { createContext, useMemo, useState } from "react";
import useLoadData from "./utils/hooks/useLoadData";

const AppContext = createContext({
  countriesData: [],
  setCountriesData: () => {},
  filter: [],
  loading: true,
  error: null,
  selectedRegion: [],
  setSelectedRegion: () => {},
  searchValue: [],
  setSearchValue: () => {},
});

export default function AppContextProvider(props) {
  const [countriesData, loading, error] = useLoadData(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,subregion,currencies,languages,tld",
  );
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const filter = useMemo(() => {
    let data = countriesData;
    if (selectedRegion && selectedRegion.value !== "All") {
      data = data.filter((record) => record.region === selectedRegion.value);
    }
    if (searchValue) {
      data = data.filter((record) =>
        record.name.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }
    return data;
  }, [countriesData, selectedRegion, searchValue]);

  const contextValue = useMemo(() => {
    return {
      countriesData,
      filter,
      loading,
      error,
      selectedRegion,
      setSelectedRegion,
      searchValue,
      setSearchValue,
    };
  }, [countriesData, filter, loading, error, selectedRegion, searchValue]);

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext };
