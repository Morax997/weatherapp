import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import {API_BASE_URL, API_KEY} from "../apis/config";
import WeatherCard from "./WeatherCard";


const CitySelector = () => {
  const [city, setCity] = useState('');
  const [results, setResults] = useState(null)
  const onSearch = () => {
    fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((results) => setResults(results));
  }
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  }

  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4} className="text-center">
          <FormControl
            placeholder="Enter city"
            onChange={(event) => setCity(event.target.value)}
            value={city}
            onKeyDown={onKeyDown}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={onSearch}>Check Weather</Button>
        </Col>
      </Row>
      <div className="weatherListContainer">
        {
          results?.list && results.list.map((result, index) => {
            return <div className="weatherItem">
              <WeatherCard
                key={index}
                dt={result.dt_txt}
                temp_min={result.main.temp_min}
                temp_max={result.main.temp_max}
                main={result.weather[0].main}
                icon={result.weather[0].icon}
              />
            </div>
          })
        }
      </div>
    </>
  );

};

export default CitySelector;