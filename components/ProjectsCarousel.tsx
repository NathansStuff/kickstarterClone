import Link from 'next/link'
import React, { useState } from 'react'
import { Project } from '../types/types'
import CarouselCard from './CarouselCard'
import { ChevronLeft, ChevronRight } from '../assets'

type Props = {
  projects: Project[]
  type: string
  href: string
}

export default function ProjectsCarousel({ projects, type, href }: Props) {
  const [showNumber, setShowNumber] = useState(0)

  function decreaseShowNumber() {
    if (showNumber == 0) {
      return
    } else {
      setShowNumber(showNumber - 1)
    }
  }
  function increaseShowNumber() {
    if (showNumber == 4) {
      return
    } else {
      setShowNumber(showNumber + 1)
    }
  }

  const decreaseChevron = (
    <div
      onClick={() => decreaseShowNumber()}
      className={`${
        showNumber == 0 ? 'text-darkGray' : 'text-blue-500 hover:border'
      } flex  h-6 w-6 cursor-pointer items-center justify-center rounded-full `}
    >
      <ChevronLeft />
    </div>
  )

  const increaseShevron = (
    <div
      onClick={() => increaseShowNumber()}
      className={`${
        showNumber == 4 ? 'text-darkGray' : 'text-blue-500 hover:border'
      } flex  h-6 w-6 cursor-pointer items-center justify-center rounded-full `}
    >
      <ChevronRight />
    </div>
  )

  let styledProjects: JSX.Element[] = []
  projects.map((project) => {
    styledProjects.push(<CarouselCard project={project} />)
  })

  return (
    <div className="w-full border-b px-5 pb-10">
      <div className="flex pt-5">
        <div className="flex w-full justify-between space-x-5 md:justify-start">
          <h1 className="text-sm font-bold uppercase text-darkGray">{type}</h1>
          <Link href={href}>
            <h1 className="cursor-pointer text-xs text-blueLink">
              Discover More
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex">
          {decreaseChevron}
          {increaseShevron}
        </div>
      </div>
      {/* Small Screens + Large Screens */}
      <div className="md:hidden lg:flex lg:space-x-5">
        {styledProjects[0 + showNumber * 4]}
        {styledProjects[1 + showNumber * 4]}
        {styledProjects[2 + showNumber * 4]}
        {styledProjects[3 + showNumber * 4]}
      </div>
      {/* Medium Screens */}
      <div className="hidden md:flex lg:hidden space-x-5">
        {styledProjects[0 + showNumber ]}
        {styledProjects[1 + showNumber ]}
      </div>
      <div className="flex items-center justify-center space-x-3 pt-10">
        <div className="md:hidden">{decreaseChevron}</div>
        <div
          className={`h-2 w-2 cursor-pointer rounded-full md:hidden bg-${
            showNumber == 0 ? 'primary' : 'gray-500'
          }`}
          onClick={() => setShowNumber(0)}
        />
        <div
          className={`h-2 w-2 cursor-pointer rounded-full md:hidden bg-${
            showNumber == 1 ? 'primary' : 'gray-500'
          }`}
          onClick={() => setShowNumber(1)}
        />
        <div
          className={`h-2 w-2 cursor-pointer rounded-full md:hidden bg-${
            showNumber == 2 ? 'primary' : 'gray-500'
          }`}
          onClick={() => setShowNumber(2)}
        />
        <div
          className={`h-2 w-2 cursor-pointer rounded-full md:hidden bg-${
            showNumber == 3 ? 'primary' : 'gray-500'
          }`}
          onClick={() => setShowNumber(3)}
        />
        <div
          className={`h-2 w-2 cursor-pointer rounded-full md:hidden bg-${
            showNumber == 4 ? 'primary' : 'gray-500'
          }`}
          onClick={() => setShowNumber(4)}
        />
        <div className="md:hidden">{increaseShevron}</div>
      </div>
    </div>
  )
}
