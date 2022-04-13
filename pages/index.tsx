import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import PageBg from '../components/PageBg'
import Featured from '../components/Featured'
import NewsCard from '../components/NewsCard'
import { news } from '../data/news'

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
        <Featured />
        <NewsCard news={news[0]} />
      </PageBg>
    </div>
  )
}

export default Home
