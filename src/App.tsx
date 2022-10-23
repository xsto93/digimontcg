import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { green } from '@mui/material/colors';
// import CircularProgress from '@mui/material/CircularProgress';
import Aside from './components/aside/Aside.component';
import Header from './components/header/Header.component';
import SearchContainer from './components/search-container/search-container.component';
import { getCollectedCardsFromDb, getDigimon } from './services/digimon-service/digimon-service';

function App() {
  const [openAside, setOpenAside] = useState<Boolean>(false);


  return (
    <div className="App">
      <Header openAside={setOpenAside} />
      <Aside open={openAside} setOpenAside={setOpenAside} />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Contenedor principal</h1>} />
            <Route path="inventory" element={<SearchContainer />} />
            <Route path="FAQ" element={<h1>FAQ</h1>} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
