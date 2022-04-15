import React from 'react'
import {
  Bookmark,
  ThumbDown,
  ThumbUp,
  BookmarkLarge,
  ThumbDownLarge,
  ThumbUpLarge,
} from '../assets'
import { Project } from '../types/types'

type Props = {
  project: Project
}

export default function CarouselCard({ project }: Props) {
  return (
    <div className="group relative flex max-h-[129px] overflow-hidden border-b pt-5 pb-5 md:max-h-full md:flex-col lg:border-0">
      <img
        src={project.image}
        alt={project.title}
        className="max-h-[90px] w-1/3 object-cover md:max-h-full md:w-full"
      />
      {/* Large Screen Only, Bookmark/Like Inside Image */}
      <div className="hidden lg:block">
        <button className="absolute top-6 right-3 hidden h-7 w-7 items-center justify-center rounded-full border bg-white hover:h-9 hover:w-9 group-hover:flex ">
          <Bookmark />
        </button>
        <button className="absolute top-[60px] right-3 hidden h-7 w-7 items-center justify-center rounded-full border bg-white hover:h-9 hover:w-9 group-hover:flex">
          <ThumbUp />
        </button>
        <button className="absolute top-[95px] right-3 hidden h-7 w-7 items-center justify-center rounded-full border bg-white hover:h-9 hover:w-9 group-hover:flex">
          <ThumbDown />
        </button>
      </div>
      <div className="pl-5 md:pl-0">
        {/* Funding % Bar */}
        <div
          className={`h-2 w-[${
            project.fundedCurrent / project.fundedMin
          }%] hidden max-w-full bg-secondary md:block`}
        />
        {/* Medium Screen Only, Bookmark/Like Buttons Bottom of Img*/}
        <div className="hidden justify-between pt-3 pb-2 md:flex lg:hidden">
          <button className="flex h-10 items-center justify-center space-x-4 rounded-lg border bg-white px-2">
            <BookmarkLarge />
            <p>Remind me</p>
          </button>
          <div className="flex space-x-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border ">
              <ThumbUpLarge />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border bg-white ">
              <ThumbDownLarge />
            </button>
          </div>
        </div>
        <h1 className="truncate text-sm group-hover:text-secondary group-hover:underline md:whitespace-normal md:pb-5 md:text-xl lg:pt-3 lg:text-lg">
          {project.title}
        </h1>
        <h1 className="text-sm font-bold text-secondary md:pb-5 lg:hidden">
          {(project.fundedCurrent / project.fundedMin) * 100}% funded
        </h1>
        <h1 className="hidden text-sm lg:block">{project.blurb}</h1>
        <h1 className="text-sm lg:pt-5 ">
          By{' '}
          <span className="cursor-pointer hover:underline">
            {project.creator.name}
          </span>
        </h1>
      </div>
    </div>
  )
}
