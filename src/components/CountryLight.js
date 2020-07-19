import React from 'react';
import Card  from 'react-bootstrap/Card';

const CountryLight = (props) => {
  return (
      <Card className="d-inline-flex m-4">
          <div className="card-img-wrapper">
            <Card.Img variant="top" src={props.flag} />
          </div>
          <Card.Body className="p-4">
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                <li><b>Capital:</b> {props.capital}</li>
                <li><b>Region:</b> {props.region}</li>
                <li><b>Population:</b> {props.population}</li>
            </Card.Text>
            <a className="text-dark stretched-link" href={"/" + props.name.replace(/ /g, "_")} />
          </Card.Body>
      </Card>
  );
}

export default CountryLight;
