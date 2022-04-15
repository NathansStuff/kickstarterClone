import React, { Fragment } from 'react'
import { Bookmark, FacebookLogo, TwitterLogo } from '../../components/SVGImages';

type Props = {
 fundedMin: number
 endsAt: string
 projectMeta: JSX.Element
}

export default function ProjectStats({fundedMin, projectMeta, endsAt}: Props) {
  return (
   <Fragment>
   {/* % Complete Bar */}
   <div className="md:px-32 lg:px-0 ">
     <div className="relative p-5 md:px-0 lg:pt-0">
       <div className="h-2 w-full bg-gray-400" />
       {/* Set to 100% */}
       <div className="absolute top-5 h-2  w-[calc(100%-40px)] bg-tertiary md:w-full lg:top-0" />
     </div>
   </div>
   <div className="flex space-x-5 px-5 pb-5 md:space-x-10 md:px-32 lg:flex-col lg:space-x-0 lg:space-y-5 lg:px-0">
     <div>
       <h1 className="text-lg font-bold text-tertiary md:text-3xl">
         AU$196,738
       </h1>
       <p className="text-xs text-softBlack md:text-sm">
         pledged of AU$ {fundedMin.toLocaleString()} goal
       </p>
     </div>
     <div>
       <h1 className="text-lg font-bold text-darkGray md:text-3xl">929</h1>
       <p className="text-xs text-softBlack md:text-sm">backers</p>
     </div>
     <div>
       <h1 className="text-lg font-bold text-darkGray md:text-3xl">{'7'}</h1>
       <p className="text-xs text-softBlack md:text-sm">days to go</p>
     </div>
   </div>
   <div className="md:hidden"> {projectMeta}</div>
   {/* Call To Actions */}
   <div className="m-5 flex cursor-pointer items-center justify-center bg-[#028858] py-2 hover:bg-secondary md:mx-32 md:mb-0 lg:mx-0  lg:px-0">
     <h1 className="text-white">Back this project</h1>
   </div>
   <div className="flex w-full flex-wrap justify-between px-5 md:px-32 lg:px-0">
     <div className="my-5 flex cursor-pointer items-center justify-center space-x-5 border border-gray-300 px-20 py-2 hover:border-black hover:shadow-md">
       <Bookmark />
       <h1 className="">Remind me</h1>
     </div>
     <div className="my-5 flex w-40 items-center justify-around">
       <div className="h-10 w-10 p-2">
         <FacebookLogo />
       </div>
       <div className="h-6 w-6">
         <TwitterLogo />
       </div>
     </div>
   </div>
   <div className="pb-5 md:px-32 lg:px-0">
     <p className="px-5 text-xs md:px-0">
       <span className="underline">All or nothing.</span> This project will
       only be funded if it reaches its goal by{' '}
       {new Date(endsAt).toDateString()}{' '}
       {new Date(endsAt).toTimeString()}.
     </p>
   </div>
 </Fragment>  )
}
