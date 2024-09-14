import React from 'react'
import EventBlock from './EventBlock'


function EventList() {
  return (
    <>
    <div class="p-6 bg-gray-100">
  <h2 class="text-2xl font-bold mb-4">Upcoming Events</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    
    
    
    <div class="bg-white rounded-lg shadow-md">
      <div class="relative">
        <img src="path_to_image/tumbbad.jpg" alt="Tumbbad" class="w-full h-64 object-cover rounded-t-lg"/>
        <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">PROMOTED</span>
      </div>
      <div class="p-4">
        <h3 class="font-bold text-lg">Tumbbad</h3>
        <p class="text-sm text-gray-600">Fantasy/Horror/Period</p>
        <div class="mt-2 text-gray-500 text-sm">
          <span class="text-red-500">★ 8.3/10</span> <span>57.5K Votes</span>
        </div>
      </div>
    </div>

    
    <div class="bg-white rounded-lg shadow-md">
      <img src="path_to_image/joker.jpg" alt="Joker: Folie à Deux" class="w-full h-64 object-cover rounded-t-lg"/>
      <div class="p-4">
        <h3 class="font-bold text-lg">Joker: Folie à Deux</h3>
        <p class="text-sm text-gray-600">Drama/Suspense/Thriller</p>
        <div class="mt-2 text-gray-500 text-sm">
          <span class="text-green-500">👍 69.2K Likes</span>
        </div>
      </div>
    </div>

    
    <div class="bg-white rounded-lg shadow-md">
      <img src="path_to_image/stree2.jpg" alt="Stree 2" class="w-full h-64 object-cover rounded-t-lg"/>
      <div class="p-4">
        <h3 class="font-bold text-lg">Stree 2: Sarkate Ka Aatank</h3>
        <p class="text-sm text-gray-600">Comedy/Horror</p>
        <div class="mt-2 text-gray-500 text-sm">
          <span class="text-red-500">★ 8.9/10</span> <span>353.2K Votes</span>
        </div>
      </div>
    </div>

    
    <div class="bg-white rounded-lg shadow-md">
      <img src="path_to_image/thalapathy.jpg" alt="Thalapathy is the G.O.A.T" class="w-full h-64 object-cover rounded-t-lg"/>
      <div class="p-4">
        <h3 class="font-bold text-lg">Thalapathy is the G.O.A.T</h3>
        <p class="text-sm text-gray-600">Action/Drama/Thriller</p>
        <div class="mt-2 text-gray-500 text-sm">
          <span class="text-red-500">★ 8.2/10</span> <span>26K Votes</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default EventList