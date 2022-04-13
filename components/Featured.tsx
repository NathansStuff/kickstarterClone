import React from 'react'
import FeaturedCard from './FeaturedCard'
import RecommendedCards from './RecommendedCards'

export default function Featured() {
  return (
    <div className="flex space-x-10 pt-10 w-full">
      <div className='w-full '>
        <FeaturedCard />
      </div>
      <div className='w-full'>
        <RecommendedCards />
      </div>
    </div>
  )
}
