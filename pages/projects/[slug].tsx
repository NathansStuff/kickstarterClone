import { GetStaticProps } from "next/types";
import { getAllProjects, getProjectBySlug } from "../../lib/api";
import { Project } from "../../types/types";

type Props = {
  project: Project
}
export default function ({ project }: Props) {
  return (
    <div>
      <h1></h1>
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
