import React from 'react'

type Props = {
 name: string
 image: string
}

export default function ProjectCreatorSection({name, image}: Props) {
  return (
    <div className="flex space-x-5 border-y border-gray-300 py-5 px-5">
      <div>
        <img
          src={image}
          alt="creator avatar"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div>
        <h3 className="font-bold text-softBlack ">{name}</h3>
        <p>5 created · 3 backed</p>
      </div>
      <div className="flex items-center justify-center border border-gray-300 px-5">
        <h3>More</h3>
      </div>
    </div>
  )
}
