import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  const Logo = (
    <img
      src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f"
      className="md-hidden w-[200px] cursor-pointer"
    />
  )
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-center border py-5 md:hidden">
        <Link href="/">{Logo}</Link>
      </div>
      <div className="grid w-full grid-cols-3 py-5 px-10">
        <div className="flex space-x-5">
          <h1 className="cursor-pointer">Search</h1>
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
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
          <div className="h-0 bg-green-700 peer-hover:h-0.5" />
        </div>
        <Link href="/">Design & Tech</Link>
        <Link href="/">Film</Link>
        <Link href="/">Food & Craft</Link>
        <Link href="/">Games</Link>
      </div>
    </div>
  )
}
