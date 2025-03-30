import React, { useEffect } from 'react'
import Grid from './Grid'
import { gameContext } from '../store'
import { fetchContent } from '../services/content'
import { useNavigate } from 'react-router-dom'
import { startGame } from '../services/game'
import toast from 'react-hot-toast'



function Game() {
  
  const navigate = useNavigate()
  const {selectedThemeId, setGameId, setScore, setMoves} = React.useContext(gameContext)

  const [cards, setCards] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  
  const handleCardsFetch = async () => {
      const data = await fetchContent(selectedThemeId)
      setCards(data)
  }

  const handleStartGame = async () => {
      const data = await startGame(selectedThemeId)
      setGameId(data._id)
      setScore(data.score)
      setMoves(data.moves)
      // console.log(data)
      toast.success("Game started")
  }


  const handleFetches = async () => {
    try {
      setLoading(true)
      await handleCardsFetch()
      await handleStartGame()
      setLoading(false)
    } catch (error) {
      console.log(error)
      navigate("/")
    }
  }

  useEffect(() => {
    
    if(!selectedThemeId) {
      navigate("/")
    }
    handleFetches()
  }, [selectedThemeId])

  if( loading){
    return (
      <div>Loading...</div>
    )
  }
 
  return (
    <div>
      <Grid cards={cards}/>
    </div>
  )
}

export default Game