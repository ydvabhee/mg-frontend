import React, {useEffect} from 'react'
import {FlipCard} from './FlipCard'
import {BiSolidShow} from "react-icons/bi";
import {gameContext} from '../store';


 


function Grid() {

  const {score, setScore, moves, setMoves, startTime, setStartTime} = React.useContext(gameContext)

  const [data, setData] = React.useState([])
  const [selectedCards, setSelectedCards] = React.useState([])

  useEffect(() => {

    setStartTime(new Date().getTime())

    for (let i = 1; i <= 36; i++) {
      const value = i <= 18 ? i : i - 18
      setData(prev => [...prev, {id: i, value: value, name: `Card ${value}`, selected: false, matched: false}])

    }

    // Shuffle the data
    setData(prev => [...prev].sort(() => Math.random() - 0.5));
    return () => {
      setData([])
    }
  }
    , [])

  useEffect(() => {
    let timeout;
    if (selectedCards.length === 2) {
      setMoves(prev => prev + 1)
      const [firstCard, secondCard] = selectedCards
      const firstCardValue = data[firstCard].value
      const secondCardValue = data[secondCard].value
      let temp = [...data]

      if (firstCardValue !== secondCardValue) {
        timeout = setTimeout(() => {

          temp[firstCard].selected = false
          temp[secondCard].selected = false
          setData(temp)
          setSelectedCards([])
        }, 1000)
      } else {
        timeout = setTimeout(() => {
          setScore(prev => prev + 1)
          temp[firstCard].matched = true
          temp[secondCard].matched = true
          setData(temp)
          setSelectedCards([])
        }, 1000)
      }
    }

    return (() => clearTimeout(timeout))

  }
    , [selectedCards])

    useEffect(() => {
    if (data.length > 0) {
      const allMatched = data.every(item => item.matched)
      if (allMatched) {
        alert('You won!')
        setData([])
        setSelectedCards([])
      }
    }}
      , [data])


  return (
    <div><div className='flex justify-center items-center mt-4 p-1 md:p-2 lg:p-4  rounded shadow-[0px_0px_15px_0px_#4a5568]'>
      <div className="grid grid-cols-6 gap-1 md:gap-2 lg:gap-4">

        {data.map((item, index) =>
          <FlipCard flip={item.selected} key={index} index={index} item={item} height={80} width={80} autoFlip={true} onFlipChange={({index, value, face}) => {

            if (selectedCards.includes(index) || item.selected) return
            if (selectedCards.length === 2) return

          

            console.log(`Card ${value} is showing ${face}`);
            let temp = [...data]
            temp[index].selected = true
            setSelectedCards(prev => [...prev, index])
            setData(temp)


          }} >
            <div
              className="group bg-blue-500 text-white flex items-center justify-center absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
              <span className='hidden group-hover:block'> <BiSolidShow /> </span>
            </div>
            {
              item.matched ? <div className="scale-100 transition duration-800 ease-in-out absolute inset-0 h-full w-full [backface-visibility:hidden]">

              </div> : <div
                className="absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] bg-red-500 text-white flex items-center justify-center">
                {item.name}
              </div>
            }

          </FlipCard>)}

      </div>
    </div></div>
  )
}

export default Grid