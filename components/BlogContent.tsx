import Link from 'next/link'
import React from 'react'
import PortableText from 'react-portable-text'

import { News } from '../types/types'

type Props = {
  blog: News
  allNews: News[]
}

export default function BlogContent({ blog, allNews }: Props) {
 console.log(blog.body)
  return (
    <div className="w-full px-5 md:px-0">
      <div className="flex w-full flex-col items-start justify-center space-y-10 py-20">
        <h1 className="flex w-full items-center justify-center text-3xl text-softBlack md:text-5xl">
          {blog.title}
        </h1>
        <p className="text-xs text-darkGray">
          {new Date(blog.publishedAt).toDateString()}
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="grow-1 border-t py-5 ">
          <p className="text-xs text-darkGray">Share this post</p>
          {/* socials */}
          facebook
        </div>
        <div className="grow-2 py-10 md:py-0">
          <img
            src={blog.image}
            alt={`${blog.title} cover image`}
            className="pb-10"
          />
          {/* Content */}
          <PortableText
            className="space-y-5"
            dataset={process.env.SANITY_DATASET_NAME}
            projectId={process.env.SANITY_PROJECT_ID}
            content={blog.body}
            serializers={{
              h1: (props: any) => {
                ;<h1 className="my-5 text-2xl font-bold" {...props} />
              },
              h2: (props: any) => {
                ;<h2 className="text-x1 my-5 font-bold" {...props} />
              },
              p: (props: any) => {
                ;<p className="py-5" {...props} />
              },
              li: ({ children }: any) => {
                ;<li className="ml-4 list-disc"> {children} </li>
              },
              link: ({ href, children }: any) => {
                ;<a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              },
            }}
          />
        </div>
        <div className="grow-1 border-t pt-5">
          <h1 className="pb-5 text-sm text-softBlack">Recent posts</h1>
          <div className="flex flex-col space-y-5 text-xs text-darkGray">
            {allNews.map((news, index) => {
              return (
                <Link href={news.slug} key={index}>
                  <p className="text-darkGray hover:font-bold hover:text-softBlack">
                    {news.title}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
