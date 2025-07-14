import { useContext } from "react";
import Select from "react-select";
import { AppContext } from "../AppContext";

const options = [
  { value: "All", label: "All regions" },
  { value: "Europe", label: "Europe" },
  { value: "Asia", label: "Asia" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Oceania", label: "Oceania" },
  { value: "Antarctic", label: "Antarctic" },
];

function RegionMenu() {
  const { selectedRegion, setSelectedRegion } = useContext(AppContext);

  function onChangeSelectValue(selectValue) {
    setSelectedRegion(selectValue);
  }

  return (
    <Select
      value={selectedRegion || options[0]}
      onChange={onChangeSelectValue}
      options={options}
      placeholder="Filter by Region"
      className="self-start max-sm:mt-6"
      classNames={{
        control: () =>
          "w-[200px] !rounded-[5px] h-[56px] shadow dark:bg-gray-800 !border-none max-sm:mt-4 max-sm:ml-4",
        menu: () => "dark:bg-gray-800 dark:text-gray-100 !w-[200px]",
        singleValue: () => "dark:text-gray-100",
        option: ({ isSelected, isFocused }) =>
          isSelected
            ? "!bg-gray-800 !text-gray-100 dark:!bg-gray-100 dark:!text-gray-800"
            : isFocused
              ? "!text-gray-800"
              : "bg-white hover:bg-gray-100 hover:!text-gray-800",
        indicatorSeparator: () => "hidden",
      }}
    ></Select>
  );
}

export default RegionMenu;
