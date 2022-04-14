import React from 'react'
import { Project } from '../types/types'
import {
  BackerTrustFundingIcon,
  BackerTrustIcon,
  BackerTrustKickstarterIcon,
  Bookmark,
  Compass,
  FacebookLogo,
  KickstarterGreen,
  LocationMarker,
  TwitterLogo,
} from './SVGImages'

type Props = {
  project: Project
}
export default function ProjectFirstSection({ project }: Props) {
  // Heading & Title
  const heading = (
    <div className="px-5 pb-10 md:px-32 md:pb-0 lg:pt-10">
      <h1 className="flex justify-center pb-2 text-center text-2xl font-bold">
        {project.title}
      </h1>
      <h3 className="text-center text-sm md:text-lg lg:text-lg">
        {project.blurb}
      </h3>
    </div>
  )

  // Creator Details
  const creatorSection = (
    <div className="flex space-x-5 border-y border-gray-300 py-5 px-5">
      <div>
        <img
          src={project.creator.image}
          alt="creator avatar"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div>
        <h3 className="font-bold text-softBlack ">{project.creator.name}</h3>
        <p>5 created · 3 backed</p>
      </div>
      <div className="flex items-center justify-center border border-gray-300 px-5">
        <h3>More</h3>
      </div>
    </div>
  )

  // Project Metadata
  const projectMeta = (
    <div className="flex space-x-5 border-y border-gray-300 p-5 md:border-b md:px-10">
      {project.weLove ? (
        <div className="flex items-center justify-center space-x-2">
          <KickstarterGreen />
          <p className="text-xs">Project We Love</p>
        </div>
      ) : (
        ''
      )}
      <div className="flex items-center justify-center space-x-2">
        <Compass />
        <p className="text-xs">{project.category}</p>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <LocationMarker />
        <p className="text-xs">{project.creator.location}</p>
      </div>
    </div>
  )

  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#FBFBFA] pb-40 ">
      <div className="flex w-full max-w-[1366px] flex-col items-center justify-center md:max-w-full">
        {/* Small Screen: Heading */}
        <div className="hidden lg:block">{heading}</div>
        <div>
          <div>
            <img alt="project image" src={project.image} />
            {/* video - Not done */}
            <div className="hidden md:block"> {projectMeta}</div>
            <div className="flex flex-col pt-5 lg:hidden">
              {heading}
              <div className="md:hidden">{creatorSection}</div>
            </div>
            {/* % Complete Bar */}
            <div className="md:px-32">
              <div className="relative p-5 md:px-0">
                <div className="h-2 w-full bg-gray-400" />
                {/* Set to 100% */}
                <div className="absolute top-5 h-2  w-[calc(100%-40px)] bg-tertiary md:w-full" />
              </div>
            </div>
          </div>
          {/* Project Stats */}
          <div className="flex space-x-5 px-5 pb-5 md:space-x-10 md:px-32">
            <div>
              <h1 className="text-lg font-bold text-tertiary md:text-3xl">
                AU$196,738
              </h1>
              <p className="text-xs text-softBlack md:text-sm">
                pledged of AU$ {project.fundedMin.toLocaleString()} goal
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold text-darkGray md:text-3xl">
                929
              </h1>
              <p className="text-xs text-softBlack md:text-sm">backers</p>
            </div>
            <div>
              <h1 className="text-lg font-bold text-darkGray md:text-3xl">
                {'7'}
              </h1>
              <p className="text-xs text-softBlack md:text-sm">days to go</p>
            </div>
          </div>
          <div className="md:hidden"> {projectMeta}</div>
          {/* Call To Actions */}
          <div className="m-5 flex cursor-pointer items-center justify-center bg-[#028858] py-2 hover:bg-secondary md:mx-32 md:mb-0">
            <h1 className="text-white">Back this project</h1>
          </div>
          <div className="flex w-full justify-between px-5 md:px-32">
            <div className="my-5 flex cursor-pointer items-center justify-center space-x-5 border border-gray-300 px-20 py-2 hover:border-black hover:shadow-md">
              <Bookmark />
              <h1 className="">Remind me</h1>
            </div>
            <div className="my-5 flex w-40 items-center justify-around">
              <div className="h-10 w-10 p-2">
                <FacebookLogo />
              </div>
              <div className="h-6 w-6">
                <TwitterLogo />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5 md:px-32">
          <p className="px-5 text-xs md:px-0">
            <span className="underline">All or nothing.</span> This project will
            only be funded if it reaches its goal by{' '}
            {new Date(project.endsAt).toDateString()}{' '}
            {new Date(project.endsAt).toTimeString()}.
          </p>
        </div>
        {/* Kickstarter Disclaimers/Info */}
        <div className="flex w-full flex-col space-y-5 bg-[#F6F2EB] p-5 py-10 md:mx-0 md:flex-row md:space-y-0 md:px-10">
          <div className="flex items-center space-x-5 md:items-start">
            <div className="md:h-20 md:w-20">
              <BackerTrustKickstarterIcon />
            </div>
            <h3 className="text-lg">
              Kickstarter connects creators with backers to fund projects.
            </h3>
          </div>
          <div className="flex items-center space-x-5 md:items-start">
            <div className="md:h-20 md:w-20">
              <BackerTrustIcon />
            </div>
            <h3 className="text-lg">
              Rewards aren’t guaranteed, but creators must regularly update
              backers.
            </h3>
          </div>
          <div className="flex items-center space-x-5 md:items-start">
            <div className="md:h-20 md:w-20">
              <BackerTrustFundingIcon />
            </div>
            <h3 className="text-lg">
              You’re only charged if the project meets its funding goal by the
              campaign deadline.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
