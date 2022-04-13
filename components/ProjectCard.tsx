import React from 'react'
import { Bookmark, ThumbDown, ThumbUp } from './SVGImages'
import { Project } from '../types/project'

type Props = {
  project: Project
}

export default function ProjectCard({project}: Props) {
  return (
   <div className="group relative flex space-x-5 overflow-hidden border-b pt-5 pb-5">
   <img
     src={project.image}
     alt={project.title}
     className="h-[90px] object-cover"
   />
   <div>
     <h1 className="truncate text-sm group-hover:text-secondary group-hover:underline">
       {project.title}
     </h1>
     <h1 className="text-sm font-bold text-secondary">
       {(project.fundedCurrent / project.fundedMin) * 100}% funded
     </h1>
     <h1 className="text-sm">By {project.author}</h1>
     <div className="flex pt-1">
       <button className="absolute flex h-6 w-6 items-center justify-center rounded-full border hover:h-7 hover:w-7">
         <Bookmark />
       </button>
       <button className="absolute left-[210px] flex h-6 w-6 items-center justify-center rounded-full border hover:h-7 hover:w-7">
         <ThumbUp />
       </button>
       <button className="absolute left-[240px] flex h-6 w-6 items-center justify-center rounded-full border hover:h-7 hover:w-7">
         <ThumbDown />
       </button>
     </div>
   </div>
 </div>
  )
}
