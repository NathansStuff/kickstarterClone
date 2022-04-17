import type { GetStaticProps } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Stats from './indexComponents/Stats'
import PageBg from '../components/PageBg'
import Featured from './indexComponents/Featured'
import NewsCard from './indexComponents/NewsCard'
import ProjectsCarousel from '../components/ProjectsCarousel'
import InterviewsComponent from './indexComponents/Interviews'
import Articles from './indexComponents/Articles'
import CreatorsCorner from './indexComponents/CreatorsCorner'
import Footer from '../components/Footer'

import { interviews } from '../data/interviews'
import {
  getAllArticles,
  getAllNews,
  getAllProjects,
} from '../lib/api'
import { Article, News, Project } from '../types/types'

type Props = {
  news: News[]
  projects: Project[]
  articles: Article[]
}

function Home({ news, projects, articles }: Props) {

  // Separating articles into their subtypes
  let newsArticles: Article[] = []
  let creatorArticles: Article[] = []
  articles.map((article) => {
    if (article.tag == 'article') {
      newsArticles.push(article)
    } else {
      creatorArticles.push(article)
    }
  })
  return (
    <div className="">
      <Head>
        <title>Kickstarter</title>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3exDVi-sUfCNvGt91s1XoCW7JDclgcaaX9pwbaB6MP4BtrUb0zy8n0CAEfHaVFpQa-g&usqp=CAU"
        />
      </Head>
      <Navbar />
      <PageBg>
        <Stats />
        <Featured projects={projects} />
        <NewsCard news={news[0]} />
        <ProjectsCarousel projects={projects} type="Fresh Favourites" href="" />
        <NewsCard news={news[1]} />
        <ProjectsCarousel projects={projects} type="Taking Off" href="" />
        <NewsCard news={news[2]} />
        <ProjectsCarousel projects={projects} type="Home Stretch" href="" />
        <NewsCard news={news[3]} />
        <InterviewsComponent interviews={interviews.slice(0, 4)} />
        <NewsCard news={news[4]} />
        <ProjectsCarousel projects={projects} type="Near You" href="" />
        <NewsCard news={news[5]} />
        <Articles articles={newsArticles.slice(0, 4)} type="the making of" />
        <NewsCard news={news[6]} />
        <CreatorsCorner creatorsComments={creatorArticles.slice(0, 4)} />
        <NewsCard news={news[7]} />
        <Articles
          articles={newsArticles.slice(4, 8)}
          type="creator success stories"
        />
      </PageBg>
      <Footer />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const news = await getAllNews()
  const projects = await getAllProjects()
  const articles = await getAllArticles()

  if (!news) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      news,
      projects,
      articles,
    },
    revalidate: 60,
  }
}
