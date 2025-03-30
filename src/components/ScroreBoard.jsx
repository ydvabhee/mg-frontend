
import React, {useEffect} from 'react'
import {gameContext} from '../store'
import {fetchSummary} from '../services/game'
import {useNavigate} from 'react-router-dom'
function ScroreBoard() {

  const navigate = useNavigate()
  const {score, setScore, moves, setMoves, startTime, setStartTime, gameId} = React.useContext(gameContext)
  const [timeTaken, setTimeTaken] = React.useState("00:00:00")

  const handleFetchSummary = async () => {
    try {
      const data = await fetchSummary(gameId)
      setScore(data.score)
      setMoves(data.moves)
      setTimeTaken(data.time)

      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(!gameId){
      navigate(`/`)
      return
    }
     
    handleFetchSummary()
  },[gameId])


  return (
    <>
    <h1 className='p-4 text-2xl font-bold uppercase'>Game Over</h1>
      <div className='mt-4 flex flex-col p-4 rounded shadow-[0px_0px_15px_0px_#4a5568]'>
        <div className='text-xl p-3 text-left uppercase font-medium'>Final Score: {score}</div>
        <div className='text-xl p-3 text-left uppercase font-medium'>Total Moves: {moves}</div>
        <div className='text-xl p-3 text-left uppercase font-medium'>Time Taken: {timeTaken}</div>
      </div>
    </>
   
   

  )
}

export default ScroreBoard