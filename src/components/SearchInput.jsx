import { useContext } from "react";
import { AppContext } from "../AppContext";

function SearchInput() {
  const { searchValue, setSearchValue } = useContext(AppContext);

  const onSearchHandler = (event) => {
    event.preventDefault();
    if (event.type === "blur") {
      setSearchValue(event.target.value);
    } else {
      setSearchValue(event.target.elements.search.value);
    }
  };
  return (
    <form onSubmit={onSearchHandler}>
      <div className="relative flex max-w-[480px] items-center max-sm:w-[343px] lg:w-[480px]">
        <svg
          className="absolute left-8 fill-gray-800 dark:fill-gray-100"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="search">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            />
          </g>
        </svg>
        <input
          autoComplete="off"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          name="search"
          placeholder="Search for a country…"
          className="dark:text-gray-1000 h-14 w-full rounded-full pl-[74px] shadow-md dark:bg-gray-800"
        />
      </div>
    </form>
  );
}

export default SearchInput;
