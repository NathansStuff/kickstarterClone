import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import PageBg from '../components/PageBg'
import Featured from '../components/Featured'

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
      </PageBg>
    </div>
  )
}

export default Home
