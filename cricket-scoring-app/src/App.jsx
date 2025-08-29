import React, { useState } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import PlayerStats from './components/PlayerStats';
import MatchList from './components/MatchList';
import PlayerList from './components/PlayerList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Scoreboard />
      <PlayerStats />
      <MatchList searchQuery={searchQuery} />
      <PlayerList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
