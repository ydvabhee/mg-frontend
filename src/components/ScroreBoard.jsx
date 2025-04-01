
import React, {useEffect} from 'react'
import {gameContext} from '../store'
import {fetchSummary} from '../services/game'
import {useNavigate} from 'react-router-dom'
function ScroreBoard() {

  const navigate = useNavigate()
  const { gameId} = React.useContext(gameContext)
  const [timeTaken, setTimeTaken] = React.useState("00:00:00")
  const [finalScore, setFinalScore] = React.useState(0)
  const [totalMoves, setTotalMoves] = React.useState(0)

  const handleFetchSummary = async () => {
    try {
      const data = await fetchSummary(gameId)
      setFinalScore(data.score)
      setTotalMoves(data.moves)
      setTimeTaken(data.time)

      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(!gameId){
      navigate(`/`)
 
    } else {
      handleFetchSummary()
    }
     
  },[gameId])


  return (
    <>
    <h1 className='p-4 text-2xl font-bold uppercase'>Game Over</h1>
      <div className='mt-4 flex flex-col p-4 rounded shadow-[0px_0px_15px_0px_#4a5568]'>
        <div className='text-xl p-3 text-left uppercase font-medium'>Final Score: {finalScore}</div>
        <div className='text-xl p-3 text-left uppercase font-medium'>Total Moves: {totalMoves}</div>
        <div className='text-xl p-3 text-left uppercase font-medium'>Time Taken: {timeTaken}</div>
      </div>
    </>
   
   

  )
}

export default ScroreBoard