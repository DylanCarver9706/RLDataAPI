import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllItems from './components/AllItems';

function App() {
  return (
    <div>
      <h1>RocketLeagueItemsAPI.com</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllItems />} />
          <Route path="/wheels" element={<Wheels />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
