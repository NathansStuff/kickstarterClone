import client from './sanity'

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
 'creator': creator->
  {
    name, 
    location, 
    about, 
    'image': image.asset->url
  },
 faqs,
 updates[]
  {
    createdAt,
    content,
    title,
    'creator': creator->{name, 'image': image.asset->url}
  },
 fundedMin,
 comments[]
  {
   comment, 
   user->{
    name, 
    'image': image.asset->url
    },
   createdAt, 
   replies[]
   {
     reply,
     createdAt,
     user->
     {
       name,
       'image': image.asset->url
      }
    }
  },
 story,
 risks,
 blurb,
 weLove,
 category,
 liveAt,
 endsAt,
 estimatedDelivery,
 backers[]{amount, user->{name, location->{city, country}}},
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

const articleFields = `
 'slug': slug.current,
 title,
 'image': image.asset->url,
 body,
 blurb,
 tag
 `

export async function getAllArticles() {
  const results = await client.fetch(
    `*[_type == "article"]{${articleFields}} | order(date asc)`
  )
  return results
}

export async function getArticleBySlug(slug: string) {
  const user = await client.fetch(
    `*[_type == "article" && slug.current == $slug]{${articleFields}}`,
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

const interviewFields = `
 title,
 href,
 'image': image.asset->url,
 `

export async function getAllInterviews() {
  const results = await client.fetch(
    `*[_type == "interviews"]{${interviewFields}} | order(date asc)`
  )
  return results
}