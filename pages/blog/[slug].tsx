import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import { getAllNews, getNewsBySlug } from '../../lib/api'
import { News } from '../../types/types'
import Navbar from '../../components/Navbar'
import PageBg from '../../components/PageBg'
import Footer from '../../components/Footer';
import BlogBanner from '../../components/BlogBanner';
import BlogContent from '../../components/BlogContent'

type Props = {
  news: News
  allNews: News[]
}

export default function ({ news, allNews }: Props) {
  return (
    <div>
      <Head>
        <title>{news.title}</title>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3exDVi-sUfCNvGt91s1XoCW7JDclgcaaX9pwbaB6MP4BtrUb0zy8n0CAEfHaVFpQa-g&usqp=CAU"
        />
      </Head>
      <Navbar />
      <BlogBanner />
      <PageBg>
        <BlogContent blog={news} allNews={allNews.slice(0,5)}/>
      </PageBg>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const allNews = await getAllNews()
  return {
    paths: allNews?.map((news: News) => ({ params: { slug: news.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug: string = (params?.slug as string) || 'test'
  const news = await getNewsBySlug(slug)
  const allNews = await getAllNews()

  if (!news) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      news,
      allNews
    },
    revalidate: 60,
  }
}
