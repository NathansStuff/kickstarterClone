import client from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const newsFields = `
 'slug': slug.current,
 title,
 callToAction,
 blurb,
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
