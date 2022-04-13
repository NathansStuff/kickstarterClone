import React from 'react'
import Link from 'next/link'
import { Bookmark, ThumbDown, ThumbUp } from './SVGImages'
import { Project } from '../types/project'

type Props = {
  project: Project
}

export default function FeaturedCard({ project }: Props) {
  return (
    <div className="group border-r pr-20">
      <h1 className="text-sm font-bold uppercase text-darkGray">
        Featured Project
      </h1>
      <div className="group relative">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover pt-5"
        />
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
      <div className="h-2 w-full bg-secondary" />
      <Link href="">
        <h1 className="cursor-pointer pt-5 text-3xl text-softBlack group-hover:text-secondary group-hover:underline">
          {project.title}
        </h1>
      </Link>
      <p className="pt-5 text-lg text-softBlack">{project.blurb}</p>
      <p className="pt-5 text-sm text-softBlack">By {project.author}</p>
    </div>
  )
}
