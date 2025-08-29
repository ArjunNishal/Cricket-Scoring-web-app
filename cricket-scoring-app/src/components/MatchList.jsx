import React from 'react';
import matches from '../data/matches.json';

const MatchList = ({ searchQuery }) => {
  const filteredMatches = matches.filter(match =>
    match.team1.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.team2.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h3>Match List</h3>
      <ul>
        {filteredMatches.map(match => (
          <li key={match.id}>
            {match.team1} vs {match.team2} - {match.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
