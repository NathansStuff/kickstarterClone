export type Project = {
  title: string
  blurb: string
  author: string
  fundedMin: number
  fundedCurrent: number
  image: string
  slug: string
  body: object[]
  liveAt: string
  endsAt: string

}

export type News = {
  title: string
  blurb: string
  image: string
  callToAction: string
  slug: string
  publishedAt: string
  body: object[]
}

export type Interview = {
  title: string
  image: string
  href: string
}

export type Article = {
  title: string
  image: string
  href: string
  blurb: string
}

export type CreatorsComments = {
  title: string
  image: string
  href: string
  blurb: string
}

export type User = {
  name: string
  slug: string
}

export type SanityProject = {
  title: string
  blurb: string
  creator: User
  fundedMin: number
  image: string
  slug: string
  body: object[]
  liveAt: string
  endsAt: string
  
}