import React from 'react';
import './App.css';
import CitySelector from './components/CitySelector';
import {Container} from "react-bootstrap";

const App = () => {
  return (
    <Container className="App">
      <CitySelector />
    </Container>
  );

}

export default App;