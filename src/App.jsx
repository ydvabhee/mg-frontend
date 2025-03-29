import { useState, createContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameCategory from './components/GameCategory';
import Game from './components/Game';
import {gameContext} from './store';




function App() {
  const [score, setScore] = useState(0)
  const [moves, setMoves] = useState(0)
  const [startTime, setStartTime] = useState(0)

  return (
    <gameContext.Provider value={{ score, setScore, moves, setMoves, startTime, setStartTime }}>
      <Routes>
        <Route path="/" element={<GameCategory />} />
        <Route path="/game/:category" element={<Game />} />
      </Routes>
    </gameContext.Provider>
  )
}

export default App
