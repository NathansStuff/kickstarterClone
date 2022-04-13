import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import PageBg from '../components/PageBg'
import Featured from '../components/Featured'
import NewsCard from '../components/NewsCard'
import ProjectsCarousel from '../components/ProjectsCarousel'

import { news } from '../data/news'
import { projects } from '../data/projects'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <PageBg>
        <Stats />
        <Featured projects={projects} />
        <NewsCard news={news[0]} />
        <ProjectsCarousel projects={projects} type='Fresh Favourites' href='' />
      </PageBg>
    </div>
  )
}

export default Home
