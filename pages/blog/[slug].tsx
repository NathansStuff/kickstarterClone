import React from 'react'
import { GetStaticProps } from 'next'

import { getAllNews, getNewsBySlug } from '../../lib/api'
import { News } from '../../types/types'

type Props = {
  news: News
}

export default function ({ news }: Props) {
  console.log(news)
  return <div>{news.image}</div>
}

export async function getStaticPaths() {
  const news = await getAllNews()
  return {
    paths: news?.map((news: News) => ({ params: { slug: news.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug: string = (params?.slug as string) || 'test'
  const news = await getNewsBySlug(slug)
  return {
    props: {
      news,
    },
    revalidate: 60,
  }
}
