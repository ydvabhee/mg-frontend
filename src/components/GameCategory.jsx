import React from 'react'
import { useNavigate } from 'react-router-dom'


const CategoryCard = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-2 bg-white cursor-pointer border-2 hover:rounded hover:border-gray-700 transition duration-300 ease-in-out">
      <div className="px-6 py-4 w-50">
        <div className="font-bold text-sm mb-2 text-gray-700">{title}</div>
      </div>
    </div>
  )
}
const categories = [
  { title: 'Animal', description: 'Fast-paced games that require quick reflexes.' },
  { title: 'Flowers', description: 'Exploration and puzzle-solving games.' },
  { title: 'Fruits', description: 'Role-playing games with character development.' },
  { title: 'Country', description: 'Games that require careful planning and tactics.' },
]
const GameCategory = () => {
  const navigate = useNavigate()
  const handleCategoryClick = (category) => {
    navigate(`/game/${category}`)
  }
  return (
    <>
    <div className='text-3xl mb-4 font-bold'> Select a category</div>
    <div className="flex flex-wrap justify-center max-w-lg">
      {categories.map((category, index) => (
        <div key={index} className="m-2" onClick={handleCategoryClick.bind(null, category.title)}>
          <CategoryCard title={category.title} description={category.description} />
        </div>
      ))}
    </div></>
  )
}

export default GameCategory