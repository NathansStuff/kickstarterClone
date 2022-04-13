import React from 'react'
import FeaturedCard from './FeaturedCard'
import RecommendedCards from './RecommendedCards'
import { projects } from '../data/projects'

export default function Featured() {
  return (
    <div className="flex space-x-10 pt-10 w-full">
      <div className='w-full '>
        <FeaturedCard project={projects[0]} />
      </div>
      <div className='w-full'>
        <RecommendedCards projects={projects}/>
      </div>
    </div>
  )
}
