import { useTranslation } from "react-i18next";

function CountryCard(props) {
  const { population, arName, name, region, capital, flag } = props;
  const { t, i18n } = useTranslation();

  const lang = i18n.language;

  return (
    <div className="h-[350px] max-w-[264px] rounded-[10px] bg-white p-[10px] text-[#111827] shadow dark:bg-gray-800 dark:text-gray-100">
      <img
        src={flag}
        alt={`${name} flag`}
        loading="lazy"
        className="h-40 w-full"
      />
      <div className="ml-3">
        <h3 className="my-3 text-lg font-extrabold">
          {lang === "ar" ? arName : name}
        </h3>
        <p className="text-sm leading-8">
          <span className="font-semibold">{t("Population")} : </span>
          <span className="font-light">
            {new Intl.NumberFormat().format(population)}
          </span>
        </p>
        <p className="text-sm leading-8">
          <span className="font-semibold">{t("Region")} : </span>
          <span className="font-light">{t(`Regions.${region}`)}</span>
        </p>
        <p className="text-sm leading-8">
          <span className="font-semibold">{t("Capital")} : </span>
          <span className="font-light">{t(`Capitals.${capital}`)}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
