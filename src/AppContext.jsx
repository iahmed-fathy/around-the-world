import { createContext, useMemo, useState } from "react";
import useLoadData from "./utils/hooks/useLoadData";
import { useTranslation } from "react-i18next";

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
    "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,subregion,currencies,languages,tld,translations",
  );
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const { t, i18n } = useTranslation();

  const filter = useMemo(() => {
    let data = countriesData;
    if (selectedRegion && selectedRegion.value !== "All") {
      data = data.filter((record) => record.region === selectedRegion.value);
    }
    if (searchValue) {
      data = data.filter(
        (record) =>
          record.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          record.arName.toLowerCase().includes(searchValue.toLowerCase()),
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
      t,
      i18n,
    };
  }, [
    countriesData,
    filter,
    loading,
    error,
    selectedRegion,
    searchValue,
    t,
    i18n,
  ]);

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext };
