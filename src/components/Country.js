import React from 'react';

const Country = (props) => {
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
              {/*CURRENCIES*/}
              <li><b>Currencies: </b>
              {props.currencies.map((el) => {
                return (
                    <span>
                      {el.name} ({el.symbol})
                      <br/>
                    </span>
                )})}
              </li>
            {/*LANGUAGES*/}
              <li><b>Languages: </b>
              {props.languages.map((el) => {
                  return (
                      <span className="badge border"> {el.name} </span>
                  )})}
              </li>
            </ul>
          </div>
          <div className="row col-12 px-5">
            <b>Border Countries: </b>
            {/*BORDERS*/}
            {
              props.borders.map((el) => {
                return (
                  <span className="badge border">
                      {el}
                  </span>
                )})
            }
          </div>
        </div>
      </div>
    </article>
  );
}

export default Country;
