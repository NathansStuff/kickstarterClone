import type { GetStaticProps } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import PageBg from '../components/PageBg'
import Featured from '../components/Featured'
import NewsCard from '../components/NewsCard'
import ProjectsCarousel from '../components/ProjectsCarousel'
import InterviewsComponent from '../components/Interviews'
import Articles from '../components/Articles'
import CreatorsCorner from '../components/CreatorsCorner'
import Footer from '../components/Footer'

import { projects } from '../data/projects'
import { interviews } from '../data/interviews'
import { articles } from '../data/articles'
import { creatorsComments } from '../data/creatorsComments'
import { getAllNews, getAllProjects } from '../lib/api';
import { News, Project } from '../types/types';

type Props = {
  news: News[]
  projects: Project[]
}

function Home({ news, projects }: Props) {
  return (
    <div className="">
      <Head>
        <title>Kickstarter</title>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3exDVi-sUfCNvGt91s1XoCW7JDclgcaaX9pwbaB6MP4BtrUb0zy8n0CAEfHaVFpQa-g&usqp=CAU" />
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
        <Articles articles={articles.slice(0, 4)} type="the making of" />
        <NewsCard news={news[6]} />
        <CreatorsCorner creatorsComments={creatorsComments} />
        <NewsCard news={news[7]} />
        <Articles
          articles={articles.slice(4, 8)}
          type="creator success stories" />
      </PageBg>
      <Footer />
    </div>
  );
}

export default Home


export const getStaticProps: GetStaticProps = async () => {
  const news = await getAllNews()
  const projects = await getAllProjects()

  if (!news) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      news,
      projects
    },
    revalidate: 60,
  }
}
