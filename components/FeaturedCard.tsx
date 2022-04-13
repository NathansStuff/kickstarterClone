import React from 'react'
import Link from 'next/link'
export default function FeaturedCard() {
  return (
    <div className='space-y-5 group border-r pr-20'>
      <h1 className='font-bold uppercase text-sm text-softBlack'>Featured Project</h1>
      <img
        src="https://ksr-ugc.imgix.net/assets/036/744/918/93cbfa06b38623a6eefebaa2f318ca18_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1647985116&auto=format&frame=1&q=92&s=de300da6dfaad96e109ab0e14f2d68a0"
        alt=""
      />
      <Link href="">
        <h1 className="cursor-pointer text-3xl text-softBlack group-hover:text-secondary group-hover:underline">
          Nebia Towel: Next-level sustainability meets 5-star luxury
        </h1>
      </Link>
      <p className="text-lg text-softBlack">
        The world’s first towel created from a breakthrough upcycled textile.
        Everything you want from a towel, and more.
      </p>
      <p className="text-sm text-softBlack">By Nebia</p>
    </div>
  )
}
