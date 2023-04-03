import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllItems from './components/AllItems';
import Wheels from './components/Wheels';
import NavBar from './components/NavBar';
import GoalExplosions from './components/GoalExplosions';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} />
      <h1>RocketLeagueItemsAPI.com</h1>
      <Routes>
        <Route path="/RLDataAPI/" element={<AllItems searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/wheels" element={<Wheels searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/goal_explosions" element={<GoalExplosions searchTerm={searchTerm} />} />
      </Routes>
    </>
  );
}

export default App;
