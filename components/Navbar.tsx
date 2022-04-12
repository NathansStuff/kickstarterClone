import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [showDiscover, setShowDiscover] = useState(false)

  function setDiscover() {
    setShowDiscover(!showDiscover)
  }

  const Logo = (
    <img
      src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f"
      className="md-hidden w-[200px] cursor-pointer"
    />
  )
  const DiscoverLinks = [
    {
      Title: 'Collections',
      href: '/',
      Header: true,
    },
    {
      Title: 'Recommended For You',
      href: '/',
      Header: false,
    },
    {
      Title: 'Projects We Love',
      href: '/',
      Header: false,
    },
    {
      Title: 'Saved Projects',
      href: '/',
      Header: false,
    },
    {
      Title: 'Trending',
      href: '/',
      Header: false,
    },
    {
      Title: 'Newly Launched',
      href: '/',
      Header: false,
    },
    {
      Title: 'Just Launched',
      href: '/',
      Header: false,
    },
    {
      Title: 'Upcoming Projects',
      href: '/',
      Header: false,
    },
    {
      Title: 'Projects Near You',
      href: '/',
      Header: false,
    },
    {
      Title: 'Backed By People You Follow',
      href: '/',
      Header: false,
    },
    {
      Title: 'Everything',
      href: '/',
      Header: false,
    },
    {
      Title: 'Sections',
      href: '/',
      Header: true,
    },
    {
      Title: 'Arts',
      href: '/',
      Header: false,
    },
    {
      Title: 'Comics & Illustrations',
      href: '/',
      Header: false,
    },
    {
      Title: 'Design & Tech',
      href: '/',
      Header: false,
    },
    {
      Title: 'Film',
      href: '/',
      Header: false,
    },
    {
      Title: 'Food & Craft',
      href: '/',
      Header: false,
    },
    {
      Title: 'Games',
      href: '/',
      Header: false,
    },
    {
      Title: 'Music',
      href: '/',
      Header: false,
    },
    {
      Title: 'Publishing',
      href: '/',
      Header: false,
    },
    {
      Title: 'Categories',
      href: '/',
      Header: true,
    },
    {
      Title: 'Art',
      href: '/',
      Header: false,
    },
    {
      Title: 'Comics',
      href: '/',
      Header: false,
    },
    {
      Title: 'Crafts',
      href: '/',
      Header: false,
    },
    {
      Title: 'Dance',
      href: '/',
      Header: false,
    },
    {
      Title: 'Design',
      href: '/',
      Header: false,
    },
    {
      Title: 'Fashion',
      href: '/',
      Header: true,
    },
    {
      Title: 'Film & Video',
      href: '/',
      Header: false,
    },
    {
      Title: 'Food',
      href: '/',
      Header: false,
    },
    {
      Title: 'Games',
      href: '/',
      Header: false,
    },
    {
      Title: 'Journalism',
      href: '/',
      Header: false,
    },
    {
      Title: 'Music',
      href: '/',
      Header: false,
    },
    {
      Title: 'Photography',
      href: '/',
      Header: false,
    },
    {
      Title: 'Publishing',
      href: '/',
      Header: false,
    },
    {
      Title: 'Technology',
      href: '/',
      Header: false,
    },
    {
      Title: 'Theater',
      href: '/',
      Header: false,
    },
    {
      Title: 'On Our Radar',
      href: '/',
      Header: true,
    },
    {
      Title: 'Affordable Art',
      href: '/',
      Header: false,
    },
    {
      Title: 'Bikes',
      href: '/',
      Header: false,
    },
    {
      Title: 'DIY',
      href: '/',
      Header: false,
    },
    {
      Title: 'Environmental',
      href: '/',
      Header: false,
    },
    {
      Title: 'For Kids',
      href: '/',
      Header: false,
    },
    {
      Title: 'LGBTQIA+',
      href: '/',
      Header: false,
    },
    {
      Title: 'Magic & Divination',
      href: '/',
      Header: false,
    },
    {
      Title: 'Public Benefit',
      href: '/',
      Header: false,
    },
    {
      Title: 'Robots',
      href: '/',
      Header: false,
    },
    {
      Title: 'RPGs',
      href: '/',
      Header: false,
    },
    {
      Title: 'Sci-Fi and Fantasy',
      href: '/',
      Header: false,
    },
    {
      Title: 'STEM',
      href: '/',
      Header: false,
    },
    {
      Title: 'Zine Quest',
      href: '/',
      Header: false,
    },
  ]
  let count = 0

  const xButton = (
    <div className="z-20 cursor-pointer" onClick={() => setDiscover()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-secondary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  )

  return (
    <div className="relative text-darkGray">
      <div className="flex w-full flex-col">
        <div className="flex justify-center border py-5 md:hidden">
          <Link href="/">{Logo}</Link>
        </div>
        <div className="grid w-full grid-cols-2 py-5 px-10 md:grid-cols-3">
          <div className="flex space-x-5">
            <h1 className="cursor-pointer" onClick={() => setDiscover()}>
              Discover
            </h1>
            <Link href="/">Start a project</Link>
          </div>
          <div className="hidden justify-center md:flex">{Logo}</div>
          <div className="flex justify-end space-x-5">
            <div className=" ">
              <div className="flex cursor-pointer items-center space-x-1">
                <h1>Search</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="cursor-pointer">Log in</h1>
          </div>
        </div>
        <div className=" top-1 flex h-20 items-center justify-around border px-20">
          <div>
            <h1 className="peer">Comic & Illustation</h1>
            <div className="h-0 bg-secondary peer-hover:h-0.5" />
          </div>
          <Link href="/">Design & Tech</Link>
          <Link href="/">Food & Craft</Link>
          <Link href="/">Games</Link>
        </div>
      </div>
      {/* Popup Discover Menu */}
      <div
        className={`absolute top-0 left-0 h-screen w-full bg-white px-20 pt-4 text-2xl ${
          showDiscover ? 'block' : 'hidden'
        } `}
      >
        <div className="flex flex-col space-y-2 pb-[200px] text-softBlack">
          {DiscoverLinks.map((link) => {
            if (link.Header) {
              count += 1
              return count == 1 ? (
                <h1
                  className={`sticky top-[${`${
                    (count - 1) * 48
                  }`}px] flex h-12 items-center justify-between border-b border-darkGray bg-white pr-5 text-base text-secondary`}
                >
                  {link.Title}
                  {xButton}
                </h1>
              ) : (
                <h1
                  className={`sticky top-[${`${
                    (count - 1) * 48
                  }`}px] flex h-12 items-center border-b border-darkGray bg-white text-base text-secondary`}
                >
                  {link.Title}
                </h1>
              )
            } else {
              return (
                <Link href={link.href}>
                  <h1 className="text-2xl md:text-4xl ">{link.Title}</h1>
                </Link>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
