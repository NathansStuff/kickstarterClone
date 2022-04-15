import React, { useState } from 'react'
import { Project } from '../types/types'

type Props = {
  project: Project
}

export default function ProjectDetails({ project }: Props) {
  const [activeScreen, setActiveScreen] = useState(1)

  return (
    <div className="pb-40">
      <div className="flex flex-wrap items-center justify-center space-x-5 border-y p-5">
        <div
          onClick={() => setActiveScreen(0)}
          className={`cursor-pointer py-5  hover:text-secondary ${
            activeScreen == 0 ? 'border-b-2 border-black font-bold' : ''
          }`}
        >
          <h1>Campaign</h1>
        </div>
        <div
          onClick={() => setActiveScreen(1)}
          className={`cursor-pointer py-5  hover:text-secondary ${
            activeScreen == 1 ? 'border-b-2 border-black font-bold' : ''
          }`}
        >
          <h1>Rewards</h1>
        </div>
        <div
          onClick={() => setActiveScreen(2)}
          className={`flex space-x-1 cursor-pointer py-5  hover:text-secondary ${
            activeScreen == 2 ? 'border-b-2 border-black font-bold' : ''
          }`}
        >
          <h1>FAQ</h1>
          <p className="text-secondary text-[10px]">{project.faqs.length}</p>
        </div>
        <div
          onClick={() => setActiveScreen(3)}
          className={`cursor-pointer py-5  hover:text-secondary ${
            activeScreen == 3 ? 'border-b-2 border-black font-bold' : ''
          }`}
        >
          <h1>Updates</h1>
        </div>
        <div
          onClick={() => setActiveScreen(4)}
          className={`cursor-pointer py-5  hover:text-secondary ${
            activeScreen == 4 ? 'border-b-2 border-black font-bold' : ''
          }`}
        >
          <h1>Comments</h1>
        </div>
        <div
          onClick={() => setActiveScreen(5)}
          className={`cursor-pointer py-5  hover:text-secondary ${
            activeScreen == 5 ? 'border-b-2 border-black font-bold' : ''
          }`}
        >
          <h1>Community</h1>
        </div>
      </div>
    </div>
  )
}
