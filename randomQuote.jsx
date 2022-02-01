//react program to render the random quote
import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
  'Life is like a box of chocolates, you never know what you are gonna get.',
  'I have no special talent. I am only passionately curious.',
  'I am not afraid of dying, I am afraid of not trying.',
  'no pain no gain'
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);
  function random() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }
  return (
    <div className="App">
      <div>{quote}</div>
      <button onClick={random}>click me</button>
    </div>
  )
}

export default App;
