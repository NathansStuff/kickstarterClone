import React from 'react'
import Link from 'next/link'
import {
  Bookmark,
  ThumbDown,
  ThumbDownLarge,
  ThumbUp,
  ThumbUpLarge,
  BookmarkLarge,
} from '../../assets'
import { Project } from '../../types/types'

type Props = {
  project: Project
}

export default function FeaturedCard({ project }: Props) {
  var backerFunded = 0
  project.backers?.map((backer) => {
    backerFunded += backer.amount
  })
  return (
    <div className="group md:border-r md:pr-10">
      <a href={`projects/${project.slug}`}>
        <h1 className="px-5 text-sm font-bold uppercase text-darkGray md:px-0 ">
          Featured Project
        </h1>
        <div className="group relative">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover pt-5"
          />
          <div
            className={`absolute bottom-[] z-30 hidden h-2 w-full max-w-full bg-gray-400 md:block`}
          />
          <div
            className={`absolute z-30 h-2 w-[${
              backerFunded / project.fundedMin
            }%] hidden max-w-full bg-secondary md:block`}
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

        <Link href="">
          <h1 className="cursor-pointer px-5 pt-5 text-xl text-softBlack group-hover:text-secondary group-hover:underline md:px-0 md:text-3xl">
            {project.title}
          </h1>
        </Link>
        <p className="px-5 pt-5 text-softBlack md:px-0 md:text-lg">
          {project.blurb}
        </p>
        <p className="px-5 pt-5 text-xs text-softBlack md:px-0 md:text-sm">
          By {project.creator.name}
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
      </a>
    </div>
  )
}
