import client from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const newsFields = `
 'slug': slug.current,
 title,
 callToAction,
 blurb,
 publishedAt,
 body,
 'image': image.asset->url
`

export async function getAllNews() {
  const results = await client.fetch(
    `*[_type == "news"]{${newsFields}} | order(date asc)`
  )
  return results
}

export async function getNewsBySlug(slug: string) {
  const news = await client.fetch(
    `*[_type == "news" && slug.current == $slug]{${newsFields}}`,
    {
      slug,
    }
  )

  if (!news) {
    return {
      notFound: true,
    }
  }
  return news[0]
}

const projectFields = `
 'slug': slug.current,
 title,
 callToAction,
 'creator': creator->{name, location, about, 'image': image.asset->url},
 faqs,
 fundedMin,
 story,
 risks,
 blurb,
 weLove,
 category,
 liveAt,
 endsAt,
 estimatedDelivery,
 pledges,
 'image': image.asset->url
`

export async function getAllProjects() {
  const results = await client.fetch(
    `*[_type == "projects"]{${projectFields}} | order(date asc)`
  )
  return results
}

export async function getProjectBySlug(slug: string) {
  const project = await client.fetch(
    `*[_type == "projects" && slug.current == $slug]{${projectFields}}`,
    {
      slug,
    }
  )

  if (!project) {
    return {
      notFound: true,
    }
  }
  return project[0]
}

const userFields = `
 'slug': slug.current,
 name,
 'image': image.asset->url,
 location
 `

export async function getAllUsers() {
  const results = await client.fetch(
    `*[_type == "user"]{${userFields}} | order(date asc)`
  )
  return results
}

export async function getUserBySlug(slug: string) {
  const user = await client.fetch(
    `*[_type == "user" && slug.current == $slug]{${userFields}}`,
    {
      slug,
    }
  )

  if (!user) {
    return {
      notFound: true,
    }
  }
  return user[0]
}
