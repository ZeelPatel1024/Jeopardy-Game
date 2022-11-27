import React from 'react'
import './App.css'
import GameScreen from './pages/gameScreen';
import HowToPlay from './pages/howToPlayScreen';
import Home from './pages/home';
import CreateGameScreen from './pages/createGameScreen';
import EndPage from './pages/endPage';
import { Router, Routes, Route, useNavigate } from "react-router-dom";

const App = () => {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createGame' element={<CreateGameScreen/>}/>
        <Route path='/game' element={<GameScreen/>}/>
        <Route path='/howToPlay' element={<HowToPlay/>}/>
        <Route path='/endGame' element={<EndPage/>}/>
      </Routes>


    </>
  );
}

export default App;