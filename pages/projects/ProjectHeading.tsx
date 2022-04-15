import React from 'react'

type Props = {
 title: string
 blurb: string
}

export default function ProjectHeading({title, blurb}: Props) {
  return (
   
    <div className="px-5 pb-10 md:px-32 md:pb-0 lg:py-10 max-w-full">
      <h1 className="flex justify-center pb-2 text-center text-2xl font-bold">
        {title}
      </h1>
      <h3 className="text-center text-sm md:text-lg lg:text-lg">
        {blurb}
      </h3>
    </div>
   )
}
