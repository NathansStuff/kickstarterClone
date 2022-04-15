import React, { useState } from 'react'
import { Project } from '../../types/types'
import { Bookmark } from '../../components/SVGImages'
import FaqScreen from './FaqScreen'
import UpdateScreen from './UpdateScreen'
import ProjectCampaignScreen from './ProjectCampaignScreen'

type Props = {
  project: Project
  setAbout: Function
}

export default function ProjectDetails({ project, setAbout }: Props) {
  const [activeScreen, setActiveScreen] = useState(3)

  function showScreen() {
    switch (activeScreen) {
      case 0:
        // story, risks, creator, setAbout, pledges, estimatedDelivery
        return (
          <ProjectCampaignScreen
            story={project.story}
            risks={project.risks}
            creator={project.creator}
            setAbout={setAbout}
            pledges={project.pledges}
            estimatedDelivery={project.estimatedDelivery}
          />
        )
      case 2:
        return <FaqScreen faqs={project.faqs} />
      case 3:
        return (
          <UpdateScreen
            updates={project.updates}
            launchDate={project.liveAt}
            creator={project.creator}
          />
        )
      case 4:
        return commentsScreen
      case 5:
        return communityScreen
      default:
        return (
          <ProjectCampaignScreen
            story={project.story}
            risks={project.risks}
            creator={project.creator}
            setAbout={setAbout}
            pledges={project.pledges}
            estimatedDelivery={project.estimatedDelivery}
          />
        )
    }
  }

  // Header / Nav to select which screen
  const header = (
    <div className="flex items-center justify-center border-y p-5">
      <div className="flex w-full max-w-[1250px] flex-wrap justify-between space-x-5">
        <div className="flex flex-wrap items-center justify-start space-x-5 ">
          <div
            onClick={() => setActiveScreen(0)}
            className={`cursor-pointer py-5  hover:text-secondary ${
              activeScreen == 0 ? 'border-b-2 border-black font-bold' : ''
            }`}
          >
            <h1>Campaign</h1>
          </div>
          <div
            onClick={() => setActiveScreen(2)}
            className={`flex cursor-pointer space-x-1 py-5  hover:text-secondary ${
              activeScreen == 2 ? 'border-b-2 border-black font-bold' : ''
            }`}
          >
            <h1>FAQ</h1>
            <p className="text-[10px] font-bold text-tertiary">
              {project.faqs?.length || 0}
            </p>
          </div>
          <div
            onClick={() => setActiveScreen(3)}
            className={`flex cursor-pointer space-x-1 py-5  hover:text-secondary ${
              activeScreen == 3 ? 'border-b-2 border-black font-bold' : ''
            }`}
          >
            <h1>Updates</h1>
            <p className="text-[10px] font-bold text-tertiary">
              {project.updates?.length || 0}
            </p>
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
        <div className="hidden space-x-5 md:flex">
          <div className="my-3 flex items-center bg-[#028858] px-5 text-white">
            <h1>Back this project</h1>
          </div>
          <div className="flex items-center justify-center space-x-2 py-5">
            <Bookmark />
            <h1>Remind me</h1>
          </div>
        </div>
      </div>
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
    <div className="bg-white">
      {header}
      <div className="">{showScreen()}</div>
    </div>
  )
}
