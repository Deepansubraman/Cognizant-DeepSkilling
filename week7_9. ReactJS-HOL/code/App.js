// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <h1>Cricket Players Dashboard</h1>
      <button onClick={() => setFlag(!flag)}>
        Toggle View ({flag ? "List View" : "Indian Players"})
      </button>
      
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

function ListofPlayers() {
  const players = [
    { id: 1, name: "Virat Kohli", score: 120 },
    { id: 2, name: "Rohit Sharma", score: 65 },
    { id: 3, name: "KL Rahul", score: 45 },
    { id: 4, name: "Rishabh Pant", score: 78 },
    { id: 5, name: "Hardik Pandya", score: 85 },
    { id: 6, name: "Jasprit Bumrah", score: 12 },
    { id: 7, name: "Ravindra Jadeja", score: 55 },
    { id: 8, name: "Mohammed Shami", score: 8 },
    { id: 9, name: "Shreyas Iyer", score: 92 },
    { id: 10, name: "Yuzvendra Chahal", score: 15 },
    { id: 11, name: "Bhuvneshwar Kumar", score: 25 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul className="player-list">
        {players.map(player => (
          <li key={player.id}>
            {player.name} - <span className="score">{player.score}</span>
          </li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul className="player-list">
        {lowScorers.map(player => (
          <li key={player.id}>
            {player.name} - <span className="low-score">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndianPlayers() {
  const players = ["Virat", "Rohit", "Dhoni", "Rahul", "Pant", "Bumrah", "Jadeja"];
  

  const [first, second, ...others] = players;
  const oddPlayers = players.filter((_, index) => index % 2 === 0);
  const evenPlayers = players.filter((_, index) => index % 2 !== 0);

  const t20Players = ["Hardik", "Chahal", "Surya"];
  const ranjiPlayers = ["Pujara", "Rahane", "Vihari"];
  const allPlayers = [...t20Players, ...ranjiPlayers];

  return (
    <div>
      <h2>Indian Players Analysis</h2>
      
      <h3>Destructured Players</h3>
      <p>First: {first}, Second: {second}, Others: {others.join(", ")}</p>
      
      <h3>Odd vs Even Team</h3>
      <div className="team-container">
        <div>
          <h4>Odd Team</h4>
          <ul>
            {oddPlayers.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Even Team</h4>
          <ul>
            {evenPlayers.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>

      <h3>Merged Players (T20 + Ranji)</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;