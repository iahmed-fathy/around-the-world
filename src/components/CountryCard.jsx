function CountryCard(props) {
  const { population, name, region, capital, flag } = props;
  return (
    <div className="h-[350px] max-w-[264px] rounded-[10px] bg-white p-[10px] text-[#111827] shadow dark:bg-gray-800 dark:text-gray-100">
      <img
        src={flag}
        alt={`${name} flag`}
        loading="lazy"
        className="h-40 w-full"
      />
      <div className="ml-3">
        <h3 className="my-3 text-lg font-extrabold">{name}</h3>
        <p className="text-sm">
          <span className="font-semibold">Population: </span>
          <span className="font-light">{population}</span>
        </p>
        <p className="text-sm">
          <span className="font-semibold">Region: </span>
          <span className="font-light">{region}</span>
        </p>
        <p className="text-sm">
          <span className="font-semibold">Capital: </span>
          <span className="font-light">{capital}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
