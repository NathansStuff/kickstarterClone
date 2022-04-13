import React from 'react'
import {
  Bookmark,
  ThumbDown,
  ThumbUp,
  BookmarkLarge,
  ThumbDownLarge,
  ThumbUpLarge,
} from './SVGImages'
import { Project } from '../types/types'

type Props = {
  project: Project
}

export default function CarouselCard({ project }: Props) {
  return (
    <div className="group relative flex max-h-[129px] overflow-hidden border-b pt-5 pb-5 md:max-h-full md:flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="max-h-[90px] w-1/3 object-cover md:max-h-full md:w-full"
      />
      <div className="ml-0">
        <div
          className={`h-2 w-[${
            project.fundedCurrent / project.fundedMin
          }%] max-w-full bg-secondary`}
        />
        <div className="hidden justify-between pt-3 pb-2 md:flex">
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
        <h1 className="truncate pb-5 text-sm group-hover:text-secondary group-hover:underline md:whitespace-normal md:text-xl">
          {project.title}
        </h1>
        <h1 className="pb-5 text-sm font-bold text-secondary">
          {(project.fundedCurrent / project.fundedMin) * 100}% funded
        </h1>
        <h1 className="text-sm ">
          By{' '}
          <span className="cursor-pointer hover:underline">
            {project.author}
          </span>
        </h1>
        <div className="hidden pt-1 lg:flex">
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
  )
}
