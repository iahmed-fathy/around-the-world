import AppContextProvider from "../AppContext";
import CountryList from "../components/CountryList";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";

function Home() {
  return (
    <div className="mx-5">
      <div className="mt-12 flex items-center justify-between max-sm:mx-10 max-sm:mt-6 max-sm:flex-col">
        <SearchInput />
        <RegionMenu />
      </div>
      <CountryList />
    </div>
  );
}

export default Home;
