import React from 'react'
import { Bookmark, ThumbDown, ThumbUp } from './SVGImages'
export default function RecommendedCards() {
  return (
    <div className="">
      <h1 className="text-sm font-bold uppercase text-darkGray">
        Recommended for you
      </h1>
      <div className="group relative flex space-x-5 overflow-hidden border-b pt-5 pb-5">
        <img
          src="https://ksr-ugc.imgix.net/assets/036/675/885/b189d94e7073682429186509658d6624_original.jpg?ixlib=rb-4.0.2&crop=faces&w=560&h=315&fit=crop&v=1647415591&auto=format&frame=1&q=92&s=cea92d3361f0d56326699627dc19e0cb"
          alt=""
          className="h-[90px] object-cover"
        />
        <div>
          <h1 className="truncate text-sm group-hover:text-secondary group-hover:underline">
            TITLE reakasdksdfajfa sdjklsdfajklsdfa asdfjklsdfasdfajkl sdajksdfa
            sdfajkl
          </h1>
          <h1 className="text-sm font-bold text-secondary">621% funded</h1>
          <h1 className="text-sm">By Author</h1>
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
    </div>
  )
}
