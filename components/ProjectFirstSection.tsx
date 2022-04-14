import React from 'react'
import { Project } from '../types/types'

type Props = {
  project: Project
}
export default function ProjectFirstSection({ project }: Props) {
  const heading = (
    <div className="pb-10 lg:pt-10">
      <h1 className="flex justify-center pb-2 text-2xl font-bold">
        {project.title}
      </h1>
      <h3 className="md:text-md text-sm lg:text-lg">{project.blurb}</h3>
    </div>
  )

  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#FBFBFA]  pb-40 md:px-20 ">
      <div className="flex w-full max-w-[1366px] flex-col items-center justify-center">
        <div className="hidden lg:block">{heading}</div>
        <div>
          <div>
            <img alt="project image" src={project.image} />
            {/* video */}
            <div className="px-5 pt-5 lg:hidden">{heading}</div>
          </div>
          <div className="px-5">
            {/* loading bar */}
            <div>
              <h1>AU$196,738</h1>
              <p>pledged of AU$ {project.fundedMin} goal</p>
            </div>
            <div>
              <h1>929</h1>
              <p>backers</p>
            </div>
            <div>
              <h1>7</h1>
              <p>days to go</p>
            </div>
            <div>Back this project</div>
            <div>
              <div>
                <h1>Remind me</h1>
                <div>socials</div>
              </div>
            </div>
            <div>
              <p>
                <span>All or nothing</span>This project will only be funded if
                it reaches its goal by Fri, April 22 2022 12:00 PM AEST.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
