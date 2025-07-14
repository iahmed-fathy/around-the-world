import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

function DetailsPage() {
  const { countryID } = useParams();
  const [countryInfo, setCountryInfo] = useState();

  const { loading, countriesData } = useContext(AppContext);

  useEffect(() => {
    const foundData = countriesData.find(
      (record) => record.name.toLowerCase() === `${countryID.toLowerCase()}`,
    );
    setCountryInfo(foundData);
  }, [countriesData, countryID]);

  if (loading || !countryInfo) {
    return (
      <div className="p-7 text-center text-4xl font-bold max-sm:text-xl">
        Loading country data...
      </div>
    );
  } else {
    return (
      <div className="mx-7 grid gap-5 md:grid-cols-2">
        <Link
          to=".."
          className="col-span-full h-10 w-10 content-center justify-center rounded-lg bg-white p-2 shadow dark:bg-gray-800"
        >
          <svg
            className="fill-black dark:fill-white"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="call-made">
              <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.89269 3.53553L7.0712 4.71405L3.18211 8.60313L18.0314 8.60313L18.0314 10.253L3.18211 10.253L7.0712 14.1421L5.89269 15.3206L0.000132627 9.42809L5.89269 3.53553Z"
              />
            </g>
          </svg>
        </Link>

        <img
          src={countryInfo.flag}
          alt={`${countryID} flag`}
          className="w-[560px] self-center rounded-lg max-md:w-[320px]"
        />

        <div className="grid w-full gap-5 self-center md:grid-cols-2">
          <h1 className="col-span-full text-2xl font-extrabold">
            {countryInfo.name}
          </h1>
          <div>
            <div className="text-start text-base font-semibold leading-8">
              <p>
                <span>Native Name: </span>
                <span className="font-normal">{countryInfo.name}</span>
              </p>

              <p>
                <span>Population: </span>
                <span className="font-normal">{countryInfo.population}</span>
              </p>

              <p>
                <span>Region: </span>
                <span className="font-normal">{countryInfo.region}</span>
              </p>

              <p>
                <span>Sub Region: </span>
                <span className="font-normal">{countryInfo.subregion}</span>
              </p>

              <p>
                <span>Capital: </span>
                <span className="font-normal">{countryInfo.capital}</span>
              </p>
            </div>
          </div>

          <div className="text-base font-semibold leading-8">
            <p>
              <span>Top Level Domain: </span>
              <span className="font-normal">{countryInfo.topLevelDomain}</span>
            </p>

            <p>
              <span>Currencies: </span>
              <span className="font-normal">{countryInfo.currencies}</span>
            </p>

            <p>
              <span>Languages: </span>
              <span className="font-normal">{countryInfo.languages}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsPage;
