import React, { useState, useEffect } from 'react'
import { Pledge, Project } from '../types/types'
import PortableTextContent from './PortableTextContent'
import PortableText from 'react-portable-text'
import { Bookmark } from './SVGImages'

type Props = {
  project: Project
  setAbout: Function
}

export default function ProjectDetails({ project, setAbout }: Props) {
  const shipDate = new Date(project.estimatedDelivery)
  const shipMonth = shipDate.toLocaleString('default', {
    month: 'long',
  })
  const shipYear = shipDate.getFullYear()

  const [activeScreen, setActiveScreen] = useState(0)


  function showScreen() {
    switch (activeScreen) {
      case 0:
        return campaignScreen
      case 2:
        return faqScreen
      case 3:
        return updatesScreen
      case 4:
        return commentsScreen
      case 5:
        return communityScreen
      default:
        return campaignScreen
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

  type PledgeProps = {
    amount: number
    body: object[]
  }

  function Rewards({ amount, body }: PledgeProps) {
    return (
      <div className="mb-5 ml-5 border p-5">
        <h1 className="pb-5 text-xl">Pledge US{amount} or more</h1>
        <PortableTextContent content={body} />
        <div className="flex pt-5">
          <div className="flex flex-col">
            <p className="text-xs text-darkGray">Estimated Delivery</p>
            <p className="text-sm text-softBlack">
              {`${shipMonth} ${shipYear}`}
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-xs text-darkGray">Ships to</p>
            <p className="text-sm text-softBlack">Anywhere in the world</p>
          </div>
        </div>
        <div className="mt-5 w-fit rounded-lg bg-[#F3f3f3] py-1 px-2">
          <p className="text-xs">87 backers</p>
        </div>
      </div>
    )
  }


  const campaignScreen = (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[1250px] ">
        <div className="hidden w-1/3 lg:block">
          <h1 className="py-5 text-2xl">Support</h1>
          <div>
            <h1>LINKS</h1>
          </div>
        </div>
        <div className="w-full">
          <PortableTextContent content={project.body} />
        </div>
        <div className="hidden w-1/3 flex-col space-y-5 md:flex">
          <div className="pt-20">
            {/* About Creator */}
            <div
              className="relative ml-5 mb-5 h-60 border p-5"
              onClick={() => setAbout(true)}
            >
              <img
                src={project.creator.image}
                alt="creator image"
                className="absolute top-[-40px] left-[70px] h-20 w-20 rounded-full object-cover"
              />
              <h3 className="mt-5">{project.creator.name}</h3>
              <p>5 created · 3 backed</p>
              <div className="inline-block h-24 overflow-hidden text-ellipsis">
                <p className="pt-5 text-sm ">{project.creator.about}</p>
              </div>
              <p className="text-sm text-[#007460]">See more</p>
            </div>
            <h1 className="ml-5 pt-5 text-2xl">Support</h1>

            {project.pledges.map((pledge) => {
              return <Rewards amount={pledge.amount} body={pledge.body} />
            })}
          </div>
        </div>
      </div>
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
    <div className="bg-white pb-40">
      
      {header}
      <div className="px-5">{showScreen()}</div>
    </div>
  )
}
