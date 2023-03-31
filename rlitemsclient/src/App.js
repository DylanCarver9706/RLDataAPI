import React from 'react';
import { Routes, Route } from 'react-router-dom';
// BrowserRouter, 
import AllItems from './components/AllItems';
import Wheels from './components/Wheels';

function App() {
  return (
    <>
      <h1>RocketLeagueItemsAPI.com</h1>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/RLDataAPI/" element={<AllItems />} />
        <Route path="/RLDataAPI/wheels" element={<Wheels />} />
      </Routes>
      {/* </BrowserRouter> */}

    </>
  );
}

export default App;
