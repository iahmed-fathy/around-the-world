import { useContext } from "react";
import Select from "react-select";
import { AppContext } from "../AppContext";

function RegionMenu() {
  const { t } = useContext(AppContext);

  const options = [
    { value: "All", label: t("All regions") },
    { value: "Europe", label: t("Regions.Europe") },
    { value: "Asia", label: t("Regions.Asia") },
    { value: "Africa", label: t("Regions.Africa") },
    { value: "Americas", label: t("Regions.Americas") },
    { value: "Oceania", label: t("Regions.Oceania") },
    { value: "Antarctic", label: t("Regions.Antarctic") },
  ];

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
