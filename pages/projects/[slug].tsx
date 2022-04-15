import Head from 'next/head'
import { GetStaticProps } from 'next/types'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import ProjectDetails from '../../components/ProjectDetails'
import ProjectFirstSection from '../../components/ProjectFirstSection'
import ProjectsCarousel from '../../components/ProjectsCarousel';
import { getAllProjects, getProjectBySlug } from '../../lib/api'
import { Project } from '../../types/types'

type Props = {
  project: Project
  allProjects: Project[]
}
export default function ({ project, allProjects }: Props) {
  return (
    <div>
      <Head>
        <title>{project.title}</title>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3exDVi-sUfCNvGt91s1XoCW7JDclgcaaX9pwbaB6MP4BtrUb0zy8n0CAEfHaVFpQa-g&usqp=CAU"
        />
      </Head>
      <Navbar secondRow={false} />
      <ProjectFirstSection project={project} />
      <ProjectDetails project={project} />
      <ProjectsCarousel projects={allProjects} type="Taking Off" href="" />
      <Footer />

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
