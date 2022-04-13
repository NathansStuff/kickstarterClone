import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import PageBg from '../components/PageBg'
import Featured from '../components/Featured'
import NewsCard from '../components/NewsCard'
import ProjectsCarousel from '../components/ProjectsCarousel'
import InterviewsComponent from '../components/Interviews'

import { news } from '../data/news'
import { projects } from '../data/projects'
import { interviews } from '../data/interviews'

const Home: NextPage = () => {
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
        <InterviewsComponent interviews={interviews.slice(0,4)} />

      </PageBg>
    </div>
  )
}

export default Home
