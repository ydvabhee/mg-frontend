import React from 'react'
import {gameContext} from '../store'
function ScroreBoard() {

  const {score, setScore, moves, setMoves, startTime, setStartTime} = React.useContext(gameContext)

  const [timer, setTimer] = React.useState("00:00:00")

  React.useEffect(() => {
    let interval = setInterval(() => {
      let currentTime = new Date().getTime()

      let timeDiff = currentTime - startTime
      // console.log("timDiff >> ", timeDiff, currentTime, startTime);
      // console.log("timDiff", currentTime, time);

      let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)  
      seconds = String(seconds).padStart(2, '0')
      let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))  
      minutes = String(minutes).padStart(2, '0')
      let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) 
      hours = String(hours).padStart(2, '0')  
      setTimer(`${hours}:${minutes}:${seconds}`)


    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [startTime])

  return (
    // flex flex-col items-center justify-center rounded-lg shadow-[0px_0px_15px_0px_#4a5568] p-4 gap-3
      <div className='flex flex-col md:flex-row md:justify-between p-4 rounded   shadow-[0px_0px_15px_0px_#4a5568]'>
        <div className='text-xl'>Score: {score}</div>
        <div className='text-xl'>Time: {timer}</div>
        <div className='text-xl'>Moves: {moves}</div>
      </div>
   

  )
}

export default ScroreBoard