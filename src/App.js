import './App.css';
import React, { useState, useEffect } from "react";


function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch("https://glen-flossy-perigee.glitch.me/quotes/random")
      .then(res => res.json())
      .then(res => setQuote(res));
  }, []);

  return (
    <div className="App container">
      <blockquote className="quote-card">
        <p>{quote.quote}</p>
        <cite>{quote.author}</cite>
      </blockquote>
    </div>
  );
}

export default App;
