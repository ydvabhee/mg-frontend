import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameCategory from './components/GameCategory';
import Game from './components/Game';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<GameCategory />} />
        <Route path="/game/:category" element={<Game />} />
      </Routes>
    </div>
    </>
  )
}

export default App
