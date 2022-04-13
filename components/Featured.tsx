import React from 'react'
import FeaturedCard from './FeaturedCard'
import RecommendedCards from './RecommendedCards'
import { Project } from '../types/types'

type Props = {
  projects: Project[]
}

export default function Featured({projects}: Props) {
  return (
    <div className="md:flex md:space-x-10 pt-10 w-full md:border-b md:pb-10">
      <div className='md:w-2/3 '>
        <FeaturedCard project={projects[0]} />
      </div>
      <div className='md:w-1/3'>
        <RecommendedCards projects={projects.slice(0, 9)}/>
      </div>
    </div>
  )
}
