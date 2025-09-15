import { useContext } from "react";
import CountryCard from "./CountryCard";
import { AppContext } from "../AppContext";
import NoResultFound from "./NoResultFound";
import ShowMessage from "./ShowMessage";
import { Link } from "react-router-dom";

function CountryList() {
  const { filter, loading, error } = useContext(AppContext);

  if (error)
    return <ShowMessage message={"Something went wrong!"}></ShowMessage>;
  if (loading)
    return <ShowMessage message={"Loading countries data..."}></ShowMessage>;

  if (!filter?.length && !loading && !error) return <NoResultFound />;

  return (
    <div>
      <p className="mt-5 text-center">
        {`${filter?.length} ${filter?.length === 1 ? "Country" : "Countries"} Found`}
      </p>
      <div className="grid justify-around gap-x-16 gap-y-12 py-8 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
        {filter?.map((record) => (
          <Link key={record.key} to={record.name}>
            <CountryCard
              flag={record.flag}
              population={record.population}
              name={record.name}
              region={record.region}
              capital={record.capital}
              arName={record.arName}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CountryList;
