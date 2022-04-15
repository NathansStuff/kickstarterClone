import React from 'react'
import { XButton } from '../../assets';
import { Creator } from '../../types/types';

type Props = {
 aboutPopup: boolean
 aboutPopupFunction: Function
 creator: Creator
}

export default function ProjectAboutPopupScreen({aboutPopup, aboutPopupFunction, creator }:Props) {
  return (
   <div
   className={`${
     aboutPopup ? 'block' : 'hidden'
   } fixed top-0 left-0 z-10 mb-5 flex h-screen w-screen items-center justify-center`}
   onClick={(e) => aboutPopupFunction(e)}
 >
   <div className='bg-gray-400 opacity-50 h-full w-full z-20 fixed top-0 left-0 mb-5 flex items-center justify-center'/>
   <div className='fixed top-0 left-0 z-30 mb-5 flex h-screen w-screen items-center justify-center'>
     <div
       className=" relative flex h-[70vh] w-2/4 flex-col overflow-y-scroll bg-white p-10 opacity-100 shadow-md z-30"
       onClick={(e) => aboutPopupFunction(e)}
       id="aboutPopupScreen"
     >
       <h1
         className="flex items-center justify-center pb-10 text-xl "
         onClick={(e) => aboutPopupFunction(e)}
         id="aboutPopupScreen"
       >
         About the creator
       </h1>
       <h1
         className="text-2xl font-bold"
         onClick={(e) => aboutPopupFunction(e)}
         id="aboutPopupScreen"
       >
         {creator.name}
       </h1>
       <p
         className="mt-0 pt-0 pb-5 text-sm"
         onClick={(e) => aboutPopupFunction(e)}
         id="aboutPopupScreen"
       >
         {creator.location}
       </p>
       <p
         onClick={(e) => aboutPopupFunction(e)}
         id="aboutPopupScreen"
         className=""
       >
         {creator.about}
       </p>
       <div
         onClick={(e) => aboutPopupFunction(e)}
         id="aboutPopupScreen"
         className="fixed top-[15vh] left-[78%] cursor-pointer"
       >
         <XButton />
       </div>
     </div>
   </div>
 </div>
  )
}
