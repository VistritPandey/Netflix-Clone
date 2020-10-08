import React from 'react';
import './App.css';
import Row from './Row'
import requests from './Requests';

function App() {
  return (
    <div className="App">
      <h1>Hey there lets make the Netflix Clone</h1>
      <Row title ="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
