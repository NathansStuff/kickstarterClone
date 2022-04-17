export type Project = {
  title: string
  blurb: string
  creator: Creator
  fundedMin: number
  image: string
  slug: string
  story: object[]
  risks: string
  liveAt: string
  endsAt: string
  estimatedDelivery: string
  pledges: Pledge[]
  weLove: boolean
  category: string
  faqs: FAQ[]
  updates: Update[]
  comments: Comment[]
  backers: Backer[]
}

export type Creator = {
  name: string
  location: string
  about: string
  image: string
}

export type BackerUser = {
  name: string
  location: Location
}

export type Location = {
  city: string
  country: string
}

export type UserNameLocation = {
  name: string
  location: Location
}

export type Backer = {
  user: UserNameLocation
  amount: number
}

export type Comment = {
  user: UserBasic
  comment: string
  replies: Reply[]
  createdAt: string
}

export type UserBasic = {
  name: string
  image: string
}

export type Reply = {
  user: UserBasic
  reply: string
  createdAt: string
}

export type Update = {
  title: string
  content: object[]
  creator: UserBasic
  createdAt: string
}

export type Pledge = {
  body: object[]
  amount: number
}

export type FAQ = {
  question: string
  answer: string
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
  slug: string
  blurb: string
  body: object[]
  tag: string
}

export type User = {
  name: string
  image: string
  about: string
}