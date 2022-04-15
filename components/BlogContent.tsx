import Link from 'next/link'
import React from 'react'
import PortableText from 'react-portable-text'

import { News } from '../types/types'
import PortableTextContent from './PortableTextContent';
import { FacebookLogo, TwitterLogo } from '../assets'

type Props = {
  blog: News
  allNews: News[]
}

export default function BlogContent({ blog, allNews }: Props) {
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
        <div className="grow-1 w-full border-t pt-5 flex space-x-5 wrap justify-between">
          <p className="pb-5 text-xs text-darkGray">Share this post</p>
          <div className='flex space-x-5'>
            <a href="https://www.facebook.com" target="_blank">
              <div className="cursor-pointer">
                <FacebookLogo />
              </div>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <div className="cursor-pointer">
                <TwitterLogo />
              </div>
            </a>
          </div>
        </div>
        <div className="grow-2 py-10 md:py-0">
          <img
            src={blog.image}
            alt={`${blog.title} cover image`}
            className="pb-10"
          />
          <PortableTextContent content={blog.body}
          />
        </div>
        <div className="grow-1 w-full border-t pt-5">
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
