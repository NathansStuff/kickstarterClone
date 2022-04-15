import React from 'react'
import Link from 'next/link'

type CreatorsComments = {
  image: string
  title: string
  blurb: string
  href: string
}

type Props = {
  creatorsComment: CreatorsComments
}

export default function CreatorsCommentCard({ creatorsComment }: Props) {
  return (
    <div className="group flex cursor-pointer space-x-5 border-b py-5 md:my-5 md:w-full md:border md:p-5 ">
      <img
        src={creatorsComment.image}
        alt="image"
        className="h-[108px] w-[108px] md:h-[180px] md:w-[180px]"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-lg group-hover:underline">
          {creatorsComment.title}
        </h1>
        <p>{creatorsComment.blurb}</p>
        <Link href={creatorsComment.href}>
          <p className="text-blueLink hover:underline">Read more</p>
        </Link>
      </div>
    </div>
  )
}
