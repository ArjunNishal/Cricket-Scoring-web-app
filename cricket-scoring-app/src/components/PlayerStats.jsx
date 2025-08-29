import React from 'react';
import players from '../data/players.json';

const PlayerStats = () => {
  const player = players[0]; // Displaying stats for the first player for now
  return (
    <div>
      <h3>Player Stats: {player.name}</h3>
      <p>Matches: {player.stats.matches}</p>
      <p>Runs: {player.stats.runs}</p>
      <p>Wickets: {player.stats.wickets}</p>
      <p>Average: {player.stats.average}</p>
      <p>Strike Rate: {player.stats.strike_rate}</p>
    </div>
  );
};

export default PlayerStats;
