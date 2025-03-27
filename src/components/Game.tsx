import React from 'react'
import ScroreBoard from './ScroreBoard'

function Game() {
  return (
    <div>
      <ScroreBoard/>
      <div className='flex justify-center items-center m-4'>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 h-32 w-32"></div>
          <div className="bg-gray-200 h-32 w-32"></div>
          <div className="bg-gray-200 h-32 w-32"></div>
          <div className="bg-gray-200 h-32 w-32"></div>
          <div className="bg-gray-200 h-32 w-32"></div>
          <div className="bg-gray-200 h-32 w-32"></div>
          <div className="bg-gray-200 h-32 w-32"></div>
          <div className="bg-gray-200 h-32 w-32"></div>
          <div className="bg-gray-200 h-32 w-32"></div>
        </div>
 </div>
    </div>
  )
}

export default Game