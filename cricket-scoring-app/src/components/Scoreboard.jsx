import React, { useState, useEffect } from 'react';
import matches from '../data/matches.json';

const Scoreboard = () => {
  const liveMatch = matches.find(match => match.status === 'Live');

  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');

  useEffect(() => {
    if (liveMatch) {
      const [initialRuns, initialWickets] = liveMatch.score1.split('/');
      setScore(parseInt(initialRuns, 10));
      setWickets(parseInt(initialWickets, 10));
      setTeam1(liveMatch.team1);
      setTeam2(liveMatch.team2);
    }
  }, [liveMatch]);

  const handleAddRuns = (runs) => {
    setScore(prevScore => prevScore + runs);
  };

  const handleAddWicket = () => {
    if (wickets < 10) {
      setWickets(prevWickets => prevWickets + 1);
    }
  };

  if (!liveMatch) {
    return (
      <div>
        <h2>Live Match</h2>
        <p>No live matches at the moment.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Live Match</h2>
      <div>
        <h3>{team1} vs {team2}</h3>
        <p>{team1}: {score}/{wickets}</p>
        <p>{team2}: {liveMatch.score2}</p>
        <p>Status: {liveMatch.status}</p>
      </div>
      <div>
        <h4>Update Score for {team1}</h4>
        <button onClick={() => handleAddRuns(1)}>+1 Run</button>
        <button onClick={() => handleAddRuns(4)}>+4 Runs</button>
        <button onClick={() => handleAddRuns(6)}>+6 Runs</button>
        <button onClick={handleAddWicket}>Wicket</button>
      </div>
    </div>
  );
};

export default Scoreboard;
