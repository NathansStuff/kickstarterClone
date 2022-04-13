import React from 'react'
import { Article } from '../types/types'
import ArticleCard from './ArticleCard'

type Props = {
  articles: Article[]
  type: string
}
export default function Articles({ articles, type }: Props) {
  return (
    <div className="w-full px-5 pt-10 border-b">
      <h1 className="text-sm font-bold uppercase text-softBlack">
        Interviews from the creative independent
      </h1>
      <div className="block w-full items-center lg:flex lg:space-x-5 mt-5">
        <div className="flex w-full space-x-5  ">
          {articles.slice(0, 2).map((article, index) => {
            return <ArticleCard article={article} key={index}/>
          })}
        </div>
        <div className="flex w-full space-x-5 ">
          {articles.slice(2, 4).map((article, index) => {
            return <ArticleCard article={article} key={index}/>
          })}
        </div>
      </div>
    </div>
  )
}
