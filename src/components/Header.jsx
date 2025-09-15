import Logo from "./Logo";
import ThemeSwithcer from "./ThemeSwithcer";
import { useContext } from "react";
import { AppContext } from "../AppContext";

function Header() {
  const { i18n } = useContext(AppContext);

  return (
    <header className="mb-6 bg-white px-6 py-5 shadow dark:bg-gray-800 md:mb-12">
      <div className="grid h-20 grid-cols-1 items-center justify-between gap-5">
        <div className="flex justify-end px-1 font-black">
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`${
              i18n.language?.startsWith("ar")
                ? "scale-125 transform transition-transform duration-200"
                : "hidden"
            }`}
          >
            English
          </button>

          <button
            onClick={() => i18n.changeLanguage("ar")}
            className={`${
              i18n.language?.startsWith("en")
                ? "scale-125 transform transition-transform duration-200"
                : "hidden"
            }`}
          >
            العربية
          </button>
        </div>

        <div className="flex justify-between">
          <Logo />
          <ThemeSwithcer />
        </div>
      </div>
    </header>
  );
}

export default Header;
