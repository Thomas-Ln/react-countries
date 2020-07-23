import React  from 'react';
import {Link} from 'react-router-dom';

const Country = (props) => {
  const currencies = props.currencies.map((currency) => {
    return (
      <span>
        {(props.currencies.length > 1) ? <br/> : '' }
        {currency.name} ({currency.symbol})
      </span> )
  });

  const languages = props.languages.map((language) => language.name);

  const borders = props.borders.map((el) => {
    return (
      <Link
        className="borders-countries stretched-link border mx-1 px-2"
        to={"/" + props.name.replace(/ /g, "_")}>
        {el}
      </Link> )
  });

  return (
    <article id="details" className="container">
      <div className="row">
        <img className="col-4" src={props.flag} alt="" />
        <div className="row col-8">
          <div className="col p-2 m-2">
            <h2>{props.name}</h2>
            <ul className="list-unstyled">
              <li><b>Native Name: </b>{props.nativeName}</li>
              <li><b>Capital: </b>{props.capital}</li>
              <li><b>Region: </b>{props.region}</li>
              <li><b>Sub Region: </b>{props.subregion}</li>
              <li><b>Population: </b>{props.population}</li>
            </ul>
          </div>
          <div className="col p-2 m-2 d-flex align-items-center">
            <ul className="list-unstyled">
              <li><b>TLD:</b> {props.topLevelDomain}</li>
              <li>
                <b>Currencies: </b>
                {currencies}
              </li>
              <li>
                <b>Languages: </b>
                {languages.join(', ')}
              </li>
            </ul>
          </div>
          <div className="row col-12 px-5">
            <b>Border Countries: </b>
            {borders}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Country;
