import React, { useContext, useEffect } from 'react'
import ScroreBoard from './ScroreBoard'
import { FlipCard } from './FlipCard'
import Grid from './Grid'



function Game() {

 
  return (
    <div>
      <ScroreBoard />
      <Grid/>
    </div>
  )
}

export default Game