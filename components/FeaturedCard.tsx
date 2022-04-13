import React from 'react'
import Link from 'next/link'
import { Bookmark, ThumbDown, ThumbUp } from './SVGImages'

export default function FeaturedCard() {
  return (
    <div className="group border-r pr-20">
      <h1 className="text-sm font-bold uppercase text-darkGray">
        Featured Project
      </h1>
      <div className="group relative">
        <img
          src="https://ksr-ugc.imgix.net/assets/036/744/918/93cbfa06b38623a6eefebaa2f318ca18_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1647985116&auto=format&frame=1&q=92&s=de300da6dfaad96e109ab0e14f2d68a0"
          alt=""
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
          Nebia Towel: Next-level sustainability meets 5-star luxury
        </h1>
      </Link>
      <p className="pt-5 text-lg text-softBlack">
        The world’s first towel created from a breakthrough upcycled textile.
        Everything you want from a towel, and more.
      </p>
      <p className="pt-5 text-sm text-softBlack">By Nebia</p>
    </div>
  )
}
