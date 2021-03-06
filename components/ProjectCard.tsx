import React from 'react'
import { Bookmark, ThumbDown, ThumbUp } from '../assets'
import { Project } from '../types/types'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  var backerFunded = 0
  project.backers?.map((backer) => {
    backerFunded += backer.amount
  })
  return (
    <a href={`projects/${project.slug}`}>
      <div className="group relative flex max-h-[129px] space-x-5 overflow-hidden border-b pt-5 pb-5">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-[90px] w-1/3 object-cover"
        />
        <div>
          <h1 className="truncate  text-sm group-hover:text-secondary group-hover:underline">
            {project.title}
          </h1>
          <h1 className="text-sm font-bold text-secondary">
            {(backerFunded / project.fundedMin) * 100 || 0}% funded
          </h1>
          <h1 className="text-sm">By {project.creator.name}</h1>
          <div className="flex pt-1">
            <button className=" flex h-6 w-6 items-center justify-center rounded-full border hover:h-7 hover:w-7">
              <Bookmark />
            </button>
            <button className=" left-[210px] flex h-6 w-6 items-center justify-center rounded-full border hover:h-7 hover:w-7">
              <ThumbUp />
            </button>
            <button className=" left-[240px] flex h-6 w-6 items-center justify-center rounded-full border hover:h-7 hover:w-7">
              <ThumbDown />
            </button>
          </div>
        </div>
      </div>
    </a>
  )
}
