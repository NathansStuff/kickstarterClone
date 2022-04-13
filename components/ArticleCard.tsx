import React from 'react'
import Link from 'next/link'

import { Article } from '../types/types'

type Props = {
  article: Article
}

export default function ArticleCard({ article }: Props) {
  return (
    <Link href={article.href}>
      <div className="group w-full cursor-pointer flex-col items-center justify-center lg:flex lg:h-full lg:max-h-[100%]">
        <div className="tint__image mb-5 max-h-60 overflow-hidden md:max-h-[300px] lg:h-[500px] lg:w-full ">
          <img
            alt="author image"
            src={article.image}
            className="w-full object-cover lg:h-[300px] lg:object-fill"
          />
        </div>
        <h1 className="mb-5 group-hover:underline">{article.title}</h1>
        <p className="mb-5 text-xs">{article.blurb}</p>
        <Link href={article.href}>
          <p className="mb-10 flex justify-start text-xs ">Read More</p>
        </Link>
      </div>
    </Link>
  )
}
