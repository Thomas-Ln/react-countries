import React, { useContext } from 'react';
import { useParams }         from 'react-router-dom';
import { CountryContext }    from '../contexts/CountryContext';
import { formatNumber }      from '../helpers';
import Country               from '../components/Country';

const Details = () => {
  const countries = useContext(CountryContext);
  // url/country
  let {country} = useParams();
  // country object
  country = countries.find((el) => el.name === country.replace(/_/g, " "));
  // human readable borders
  let borders = country.borders.map(borderCode =>
    countries.find(countryCode => borderCode === countryCode.alpha3Code)
  );
  borders = borders.map(el => el.name);

  return (
    <Country
      flag={country.flag}
      name={country.name}
      nativeName={country.nativeName}
      capital={country.capital}
      region={country.region}
      subregion={country.subregion}
      population={formatNumber(country.population)}
      topLevelDomain={country.topLevelDomain}
      currencies={country.currencies}
      languages={country.languages}
      borders={borders}
    />
  );
}

export default Details;
