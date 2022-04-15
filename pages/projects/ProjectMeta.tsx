import React from 'react'
import { Compass, KickstarterGreen, LocationMarker } from '../../assets';

type Props = {
 weLove: boolean
 category: string
 location: string
}

export default function ProjectMeta({weLove, category, location}: Props) {
  return (
    <div className="flex flex-wrap space-x-5 border-y border-gray-300 p-5 md:border-b md:px-10 lg:border-0 lg:px-0">
      {weLove ? (
        <div className="flex items-center justify-center space-x-2">
          <KickstarterGreen />
          <p className="text-xs">Project We Love</p>
        </div>
      ) : (
        ''
      )}
      <div className="flex items-center justify-center space-x-2">
        <Compass />
        <p className="text-xs">{category}</p>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <LocationMarker />
        <p className="text-xs">{location}</p>
      </div>
    </div>
  )
}
