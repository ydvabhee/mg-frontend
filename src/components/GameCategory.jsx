import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {fetchTheme} from '../services/theme'
import {gameContext} from '../store'


const CategoryCard = ({ title, description }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 bg-white cursor-pointer border-2 hover:rounded hover:border-gray-700 transition duration-300 ease-in-out">
      <div className="px-6 py-4 w-50">
        <div className="font-bold text-sm mb-2 text-gray-700 capitalize">{title}</div>
      </div>
    </div>
  )
}

const GameCategory = () => {
  const {setSelectedThemeId} = React.useContext(gameContext)
  
  const [themes, setThemes] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const navigate = useNavigate()
  const handleCategoryClick = (category) => {
    setSelectedThemeId(category._id)
    navigate(`/game/${category.name}`)
  }

  const handleFetchTheme = async () => {
    const data = await fetchTheme()
    console.log(data)
    setThemes(data)
    setLoading(false)
  }

  useEffect(() => {
    handleFetchTheme()
  }, [])


  if(loading){
    return (
      <div>Loading...</div>
    )
  }
  if(themes.length === 0){
    return (
      <div>No themes</div>
    )
  }



  return (
    <>
    <div className='text-3xl mb-4 font-bold'> Select a category</div>
    <div className="flex flex-wrap justify-center max-w-lg">
      {themes.map((category, index) => (
        <div key={index} className="m-2" onClick={handleCategoryClick.bind(null, category)}>
          <CategoryCard title={category.name} description={category.description} />
        </div>
      ))}
    </div></>
  )
}

export default GameCategory