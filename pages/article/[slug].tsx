import { GetStaticProps } from 'next'
import React, { Fragment } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PortableTextContent from '../../components/PortableTextContent'
import { getAllArticles, getArticleBySlug } from '../../lib/api'
import { Article } from '../../types/types'

type Props = {
  article: Article
}

export default function ({ article }: Props) {
  return (
    <Fragment>
      <Navbar />
      <div className='flex justify-center items-center'>
        <div className="flex max-w-[750px] flex-col items-center justify-center space-y-5 py-10 px-5">
          <div className="flex flex-col items-center justify-center">
            <h1 className="pb-2 text-lg capitalize md:text-2xl lg:font-bold">
              {article.title}
            </h1>
            <h3 className="text-sm md:text-lg">{article.blurb}</h3>
          </div>
          <img
            src={article.image}
            alt={article.title}
            className="object-fit max-h-[200px]"
          />
          <PortableTextContent content={article.body} />
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
export async function getStaticPaths() {
  const allArticles = await getAllArticles()
  return {
    paths: allArticles?.map((article: Article) => ({
      params: { slug: article.slug },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug: string = (params?.slug as string) || 'test'
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article,
    },
    revalidate: 60,
  }
}
