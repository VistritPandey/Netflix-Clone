import React from 'react';
import './App.css';
import Row from './Row'

function App() {
  return (
    <div className="App">
      <h1>Hey there lets make the Netflix Clone</h1>
      <Row title ="Netflix Originals" />
      <Row title = "Trending Now"/>
    </div>
  );
}

export default App;
