export type Project = {
  title: string
  blurb: string
  creator: Creator
  fundedMin: number
  fundedCurrent: number
  image: string
  slug: string
  body: object[]
  liveAt: string
  endsAt: string
  weLove: boolean
  category: string
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

export type User = {
  name: string
  slug: string
  image: string
}

export type Creator = {
  name: string
  image: string
  location: string
}