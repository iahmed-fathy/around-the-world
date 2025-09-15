import CountryList from "../components/CountryList";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../AppContext";

function Home() {
  const contentRef = useRef(null);
  const { i18n } = useContext(AppContext);

  useEffect(() => {
    if (contentRef.current) {
      const direction = i18n.language === "ar" ? "rtl" : "ltr";
      contentRef.current.dir = direction;
      contentRef.current.lang = i18n.language;
    }
  }, [i18n.language]);

  return (
    <div className="mx-5">
      <div className="mt-12 flex items-center justify-between max-sm:mx-10 max-sm:mt-6 max-sm:flex-col">
        <SearchInput />
        <RegionMenu />
      </div>
      <div ref={contentRef}>
        <CountryList />
      </div>
    </div>
  );
}

export default Home;
