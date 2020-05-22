import React, { useEffect, useState } from 'react';
import Joke from './Joke';
import './App.css';


function App() {
  const [jokes, setJoke] = useState(' ');

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    const response = await fetch(`https://official-joke-api.appspot.com/random_joke`);
    const data = await response.json();
    setJoke(data);

  };

  return (
      <div className="mainJoke">
        <h1>JOKES UNLIMITED</h1>
        <Joke
          setup={jokes.setup}
          punchline={jokes.punchline}
        />
        <button className="new-joke" onClick={getJoke}>Get Another Joke</button>
      </div>
  )
}

export default App;
