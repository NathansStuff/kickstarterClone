import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from './SVGImages'
import { Project } from '../types/project'
import ProjectCard from './ProjectCard'

type Props = {
  projects: Project[]
}

export default function RecommendedCards({ projects }: Props) {
  let styledProjects: JSX.Element[] = []
  projects.map((project) => {
    styledProjects.push(<ProjectCard project={project} />)
  })
  const [recommendedNumber, setRecommenededNumber] = useState(0)

  function lowerRecommendedNumber() {
    if (recommendedNumber == 0) {
      return
    } else {
      setRecommenededNumber(recommendedNumber - 1)
    }
  }
  function increaseRecommendedNumber() {
    if (recommendedNumber == 2) {
      return
    } else {
      setRecommenededNumber(recommendedNumber + 1)
    }
  }

  return (
    <div className="border-b px-5 pt-5 pb-10 md:border-0">
      <h1 className="text-sm font-bold uppercase text-darkGray">
        Recommended for you
      </h1>
      {styledProjects[0 + recommendedNumber]}
      {styledProjects[1 + recommendedNumber]}
      {styledProjects[2 + recommendedNumber]}
      <div className="flex items-center justify-end space-x-3 pt-5 text-xl">
        <div
          onClick={() => lowerRecommendedNumber()}
          className={`${
            recommendedNumber == 0
              ? 'text-darkGray'
              : 'text-blue-500 hover:border'
          } flex  h-6 w-6 cursor-pointer items-center justify-center rounded-full`}
        >
          <ChevronLeft />
        </div>
        <p
          onClick={() => setRecommenededNumber(0)}
          className={`cursor-pointer ${
            recommendedNumber == 0 ? 'text-blue-800 underline' : 'text-blue-500'
          } border-1`}
        >
          1
        </p>
        <p
          onClick={() => setRecommenededNumber(1)}
          className={`cursor-pointer ${
            recommendedNumber == 1 ? 'text-blue-800 underline' : 'text-blue-500'
          } `}
        >
          2
        </p>
        <p
          onClick={() => setRecommenededNumber(2)}
          className={`cursor-pointer ${
            recommendedNumber == 2 ? 'text-blue-800 underline' : 'text-blue-500'
          } `}
        >
          3
        </p>
        <div
          onClick={() => increaseRecommendedNumber()}
          className={`${
            recommendedNumber == 2
              ? 'text-darkGray'
              : 'text-blue-500 hover:border'
          } flex  h-6 w-6 cursor-pointer items-center justify-center rounded-full `}
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  )
}
