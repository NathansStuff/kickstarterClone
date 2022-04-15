import Head from 'next/head'
import { GetStaticProps } from 'next/types'
import { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PageBg from '../../components/PageBg'
import ProjectDetails from '../../components/ProjectDetails'
import ProjectFirstSection from '../../components/ProjectFirstSection'
import ProjectsCarousel from '../../components/ProjectsCarousel'
import { XButton } from '../../components/SVGImages'
import { getAllProjects, getProjectBySlug } from '../../lib/api'
import { Project } from '../../types/types'

type Props = {
  project: Project
  allProjects: Project[]
}
export default function ({ project, allProjects }: Props) {
  const [aboutPopup, setAboutPopup] = useState(false)

  function aboutPopupFunction(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target.id !== 'aboutPopupScreen') {
      setAboutPopup(false)
    }
  }

  const aboutPopupScreen = (
    <div
      className={`${
        aboutPopup ? 'block' : 'hidden'
      } fixed top-0 left-0 z-10 mb-5 flex h-screen w-screen items-center justify-center`}
      onClick={(e) => aboutPopupFunction(e)}
    >
      <div className='bg-gray-400 opacity-50 h-full w-full z-20 fixed top-0 left-0 mb-5 flex items-center justify-center'/>
      <div className='fixed top-0 left-0 z-30 mb-5 flex h-screen w-screen items-center justify-center'>
        <div
          className=" relative flex h-[70vh] w-2/4 flex-col overflow-y-scroll bg-white p-10 opacity-100 shadow-md z-30"
          onClick={(e) => aboutPopupFunction(e)}
          id="aboutPopupScreen"
        >
          <h1
            className="flex items-center justify-center pb-10 text-xl "
            onClick={(e) => aboutPopupFunction(e)}
            id="aboutPopupScreen"
          >
            About the creator
          </h1>
          <h1
            className="text-2xl font-bold"
            onClick={(e) => aboutPopupFunction(e)}
            id="aboutPopupScreen"
          >
            {project.creator.name}
          </h1>
          <p
            className="mt-0 pt-0 pb-5 text-sm"
            onClick={(e) => aboutPopupFunction(e)}
            id="aboutPopupScreen"
          >
            {project.creator.location}
          </p>
          <p
            onClick={(e) => aboutPopupFunction(e)}
            id="aboutPopupScreen"
            className=""
          >
            {project.creator.about}
          </p>
          <div
            onClick={(e) => aboutPopupFunction(e)}
            id="aboutPopupScreen"
            className="fixed top-[15vh] left-[78%] cursor-pointer"
          >
            <XButton />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <Head>
        <title>{project.title}</title>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3exDVi-sUfCNvGt91s1XoCW7JDclgcaaX9pwbaB6MP4BtrUb0zy8n0CAEfHaVFpQa-g&usqp=CAU"
        />
      </Head>
      {aboutPopupScreen}
      <div>
        <Navbar secondRow={false} />
        <ProjectFirstSection project={project} />
        <ProjectDetails project={project} setAbout={setAboutPopup} />
        <PageBg>
          <ProjectsCarousel projects={allProjects} type="Taking Off" href="" />
        </PageBg>
        <Footer />
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const allNews = await getAllProjects()
  return {
    paths: allNews?.map((news: Project) => ({ params: { slug: news.slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug: string = (params?.slug as string) || 'test'
  const project = await getProjectBySlug(slug)
  const allProjects = await getAllProjects()

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
      allProjects,
    },
    revalidate: 60,
  }
}
