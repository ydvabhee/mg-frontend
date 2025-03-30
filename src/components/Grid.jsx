import React, {useEffect} from 'react'
import {FlipCard} from './FlipCard'
import {BiSolidShow} from "react-icons/bi";
import {gameContext} from '../store';
import {makeMove} from '../services/game';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

function Grid({cards}) {

  const navigate = useNavigate()
  const {gameId, setScore, setMoves, setStartTime} = React.useContext(gameContext)

  const [data, setData] = React.useState([])
  const [selectedCards, setSelectedCards] = React.useState([])

  useEffect(() => {
    let temp = cards.map(item => ({...item, selected: false, matched: false}))
    temp = temp.sort(() => Math.random() - 0.5)
    setData(temp)
  }, [cards])

  const handleMoveCall = async (timeout) => {
    if (selectedCards.length === 2) {
      const [firstCardIndex, secondCardIndex] = selectedCards
      const firstCardId = data[firstCardIndex]._id
      const secondCardId = data[secondCardIndex]._id

      const response = await makeMove(gameId, [firstCardId, secondCardId])
      
      setMoves(response.moves)
      setStartTime(response.startTime)
      setScore(response.score)

      let temp = [...data]
      if (!response.validMove) {
        timeout = setTimeout(() => {
          temp[firstCardIndex].selected = false
          temp[secondCardIndex].selected = false
          setData(temp)
          setSelectedCards([])

        }, 1000)

      } else {
        timeout = setTimeout(() => {
          
          temp[firstCardIndex].matched = true
          temp[secondCardIndex].matched = true
          setData(temp)
          setSelectedCards([])

          if (response.endTime !== 0) {
            // alert('You won!')
            navigate("/game/summary")
            toast.success("You won!")
          }
        }, 1000)
      }

      
    }
  }

  useEffect(() => {
    let timeout;
    handleMoveCall(timeout)
    return (() => clearTimeout(timeout))

  },[selectedCards])

  const handleMove = (item, index) => {
    if (selectedCards.includes(index) || item.selected) return
    if (selectedCards.length === 2) return
    let temp = [...data]
    temp[index].selected = true
    setSelectedCards(prev => [...prev, index])
    setData(temp)
  }


  return (
    <div><div className='flex justify-center items-center mt-4 p-1 md:p-2 lg:p-4  rounded shadow-[0px_0px_15px_0px_#4a5568]'>
      <div className="grid grid-cols-6 gap-1 md:gap-2 lg:gap-4">
        {data.map((item, index) =>
          <FlipCard flip={item.selected} key={index} index={index} item={item} height={80} width={80} autoFlip={true} onFlipChange={handleMove} >
            <div
              className="group bg-blue-500 text-white flex items-center justify-center absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
              <span className='hidden group-hover:block'> <BiSolidShow /> </span>
            </div>
            {
              item.matched ? <div className="scale-100 transition duration-800 ease-in-out absolute inset-0 h-full w-full [backface-visibility:hidden]">
              </div> : <div
                className="absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-red-500 text-white flex items-center justify-center p-2">
                {/* {item.name} */}
                <img src={item.url} alt={item.title} />
              </div>
            }
          </FlipCard>)}
      </div>
    </div></div>
  )
}

export default Grid