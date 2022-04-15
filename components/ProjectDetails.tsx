import React, { useState, useEffect } from 'react'
import { Project } from '../types/types'
import PortableTextContent from './PortableTextContent'
import PortableText from 'react-portable-text'

type Props = {
  project: Project
}

export default function ProjectDetails({ project }: Props) {
  const [activeScreen, setActiveScreen] = useState(0)

  function showScreen() {
    switch (activeScreen) {
      case 0:
        return campaignScreen
      case 1:
        return rewardsScreen
      case 2:
        return faqScreen
      case 3:
        return updatesScreen
      case 4:
        return commentsScreen
      case 5:
        return communityScreen
      default:
        return
    }
  }

  // Header / Nav to select which screen
  const header = (
    <div className="flex flex-wrap items-center justify-start space-x-5 border-y p-5">
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
        className={`flex cursor-pointer space-x-1 py-5  hover:text-secondary ${
          activeScreen == 2 ? 'border-b-2 border-black font-bold' : ''
        }`}
      >
        <h1>FAQ</h1>
        <p className="text-[10px] text-secondary">{project.faqs.length}</p>
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
  )

  const campaignScreen = (
    <div>
      <PortableTextContent content={project.body} />{' '}
    </div>
  )

  const rewardsScreen = (
    <div>
      <h1>Rewards Screen</h1>
    </div>
  )

  const faqScreen = (
    <div>
      <h1>FAQ Screen</h1>
    </div>
  )

  const updatesScreen = (
    <div>
      <h1>Updates Screen</h1>
    </div>
  )

  const commentsScreen = (
    <div>
      <h1>Comments Screen</h1>
    </div>
  )

  const communityScreen = (
    <div>
      <h1>Community Screen</h1>
    </div>
  )

  return (
    <div className="pb-40">
      {header}
      <div className="px-5">{showScreen()}</div>
    </div>
  )
}
