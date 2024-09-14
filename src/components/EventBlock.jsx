import React from 'react'
import img from '../assets/images/eventimg.png'


function EventBlock() {
  return (
    <>
    <div class="bg-white rounded-lg shadow-md">
      <div class="relative">
        <img src={img} alt="The Buckingham Murders" class="w-full h-64 object-cover rounded-t-lg"/>
        <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">PROMOTED</span>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-lg">The Buckingham Murders</h3>
        <p class="text-sm text-gray-600">Crime/Mystery/Thriller</p>
        <div class="mt-2 text-gray-500 text-sm">
          <span class="text-red-500">★ 6.9/10</span> <span>9K Votes</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default EventBlock