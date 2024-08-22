import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AllItems from './components/AllItems';
// import Antennas from './components/Antennas';
// import AvatarBorders from './components/AvatarBorders';
// import Avatars from './components/Avatars';
// import Banners from './components/Banners';
import Boosts from './components/Boosts';
import Bodies from './components/Bodies';
// import Crates from './components/Crates';
// import Decals from './components/Decals';
// import EngineSounds from './components/EngineSounds';
import GoalExplosions from './components/GoalExplosions';
// import PaintFinishes from './components/PaintFinishes';
// import PlayerAnthems from './components/PlayerAnthems';
// import Stickers from './components/Stickers';
// import Toppers from './components/Toppers';
// import Trails from './components/Trails';
import Wheels from './components/Wheels';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} />
      <h1>RocketLeagueItemsAPI.com</h1>
      <Routes>
        {/* <Route path="/RLDataAPI/" element={<HomePage filteredItems={filteredItems} />} /> */}
        <Route path="/RLDataAPI/" element={<AllItems searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/boosts" element={<Boosts searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/bodies" element={<Bodies searchTerm={searchTerm} />} />
        {/* <Route path="/RLDataAPI/antennas" element={<Antennas searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/avatar_borders" element={<AvatarBorders searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/avatars" element={<Avatars searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/banners" element={<Banners searchTerm={searchTerm} />} />
        
        
        <Route path="/RLDataAPI/crates" element={<Crates searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/decals" element={<Decals searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/engine_sounds" element={<EngineSounds searchTerm={searchTerm} />} /> */}
        <Route path="/RLDataAPI/goal_explosions" element={<GoalExplosions searchTerm={searchTerm} />} />
        {/* <Route path="/RLDataAPI/paint_finishes" element={<PaintFinishes searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/player_anthems" element={<PlayerAnthems searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/stickers" element={<Stickers searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/toppers" element={<Toppers searchTerm={searchTerm} />} />
        <Route path="/RLDataAPI/trails" element={<Trails searchTerm={searchTerm} />} /> */}
        <Route path="/RLDataAPI/wheels" element={<Wheels searchTerm={searchTerm} />} />
      </Routes>
    </>
  );
}

export default App;