import React from 'react'
import { Project } from '../../../types/types'
import ProjectHeading from './ProjectHeading'
import ProjectMeta from './ProjectMeta'
import ProjectKickstarterInfo from './ProjectKickstarterInfo'
import ProjectCreatorSection from './ProjectCreatorSection'
import ProjectStats from './ProjectStats'

type Props = {
  project: Project
}
export default function ProjectFirstSection({ project }: Props) {
  // Used in separate locations on diff screens, initialiazed here
  const heading = <ProjectHeading title={project.title} blurb={project.blurb} />
  const projectMeta = (
    <ProjectMeta
      weLove={project.weLove}
      category={project.category}
      location={project.creator.location}
    />
  )

  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#FBFBFA]">
      <div className="flex w-full max-w-[1366px] flex-col items-center justify-center overflow-hidden md:max-w-full ">
        {/* Small Screen: Heading */}
        <div className="hidden lg:block">{heading}</div>
        <div className="md:mx-10 lg:flex lg:max-w-[1250px] lg:space-x-10 lg:px-0">
          <div className="lg:w-full lg:grow-2 ">
            <img
              alt="project image"
              src={project.image}
              className="max-h-full max-w-full object-contain"
            />
            {/* video - Not done */}
            <div className="hidden md:block"> {projectMeta}</div>
            <div className="flex flex-col pt-5 lg:hidden ">
              {heading}
              <div className="md:hidden">
                <ProjectCreatorSection
                  name={project.creator.name}
                  image={project.creator.image}
                />
              </div>
            </div>
          </div>
          <div className="lg:grow-1 ">
            <ProjectStats
              projectMeta={projectMeta}
              endsAt={project.endsAt}
              fundedMin={project.fundedMin}
              backers={project.backers}
            />
          </div>
        </div>
        <ProjectKickstarterInfo />
      </div>
    </div>
  )
}
