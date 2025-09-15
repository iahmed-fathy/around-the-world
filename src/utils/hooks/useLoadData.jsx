import { useEffect, useState } from "react";

function useLoadData(url) {
  const localStorageKey = "aroundTheWorldData";
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      const localStorageData = localStorage.getItem(localStorageKey);
      setLoading(true);

      if (localStorageData && localStorageData !== "undefined") {
        const parsedData = localStorageData
          ? JSON.parse(localStorageData)
          : null;
        setCountriesData(parsedData);
        setLoading(false);
      } else {
        try {
          const res = await fetch(url);

          if (res.ok) {
            const jsonData = await res.json();
            const mappedData = jsonData.map((record) => ({
              key: record?.name.official,
              flag: record?.flags.png,
              // population: parseInt(record?.population).toLocaleString(),
              population: record?.population,
              name: record?.name.common,
              region: record?.region,
              subregion: record?.subregion,
              capital: record?.capital?.[0] || "N/A",
              currencies:
                record?.currencies &&
                Object.values(record?.currencies)
                  .map((c) => c.name)
                  .join(", "),
              languages:
                record?.languages &&
                Object.values(record?.languages).join(", "),
              topLevelDomain: record?.tld[0] || "N/A",
              arName: record?.translations.ara.official,
            }));
            localStorage.setItem(localStorageKey, JSON.stringify(mappedData));
            setCountriesData(mappedData);
            setLoading(false);
          }
        } catch (error) {
          setError(error.message);
        }
      }
    }
    getData();
  }, []);

  return [countriesData, loading, error];
}

export default useLoadData;
