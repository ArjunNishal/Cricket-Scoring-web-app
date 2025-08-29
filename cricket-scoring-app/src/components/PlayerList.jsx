import React from 'react';
import players from '../data/players.json';

const PlayerList = ({ searchQuery }) => {
  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h3>Player List</h3>
      <ul>
        {filteredPlayers.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
