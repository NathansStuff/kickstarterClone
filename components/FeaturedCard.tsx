import React from 'react'
import Link from 'next/link'
import {
  Bookmark,
  ThumbDown,
  ThumbDownLarge,
  ThumbUp,
  ThumbUpLarge,
  BookmarkLarge,
} from './SVGImages'
import { Project } from '../types/project'

type Props = {
  project: Project
}

export default function FeaturedCard({ project }: Props) {
  return (
    <div className="group md:border-r md:pr-10">
      <h1 className="px-5 text-sm font-bold uppercase text-darkGray md:px-0 ">
        Featured Project
      </h1>
      <div className="group relative">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover pt-5"
        />
        <div className="hidden md:block">
          <button className="absolute top-10 right-3 hidden h-8 w-8 items-center justify-center rounded-full border bg-white hover:h-9 hover:w-9 group-hover:flex ">
            <Bookmark />
          </button>
          <button className="absolute top-20 right-3 hidden h-8 w-8 items-center justify-center rounded-full border bg-white hover:h-9 hover:w-9 group-hover:flex">
            <ThumbUp />
          </button>
          <button className="absolute top-[120px] right-3 hidden h-8 w-8 items-center justify-center rounded-full border bg-white hover:h-9 hover:w-9 group-hover:flex">
            <ThumbDown />
          </button>
        </div>
      </div>
      <div
        className={`h-2 w-[${
          project.fundedCurrent / project.fundedMin
        }%] max-w-full bg-secondary`}
      />
      <Link href="">
        <h1 className="cursor-pointer px-5 pt-5 text-xl text-softBlack group-hover:text-secondary group-hover:underline md:px-0 md:text-3xl">
          {project.title}
        </h1>
      </Link>
      <p className="px-5 pt-5 text-softBlack md:px-0 md:text-lg">
        {project.blurb}
      </p>
      <p className="px-5 pt-5 text-xs text-softBlack md:px-0 md:text-sm">
        By {project.author}
      </p>
      <div className="mx-5 flex justify-between border-b pt-10 pb-2 md:hidden">
        <button className="flex h-12 items-center justify-center space-x-4 rounded-lg border bg-white px-2">
          <BookmarkLarge />
          <p>Remind me</p>
        </button>
        <div className="flex space-x-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-full border ">
            <ThumbUpLarge />
          </button>
          <button className="flex h-12 w-12 items-center justify-center rounded-full border bg-white ">
            <ThumbDownLarge />
          </button>
        </div>
      </div>
    </div>
  )
}
