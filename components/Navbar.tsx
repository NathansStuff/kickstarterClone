import React, { useState } from 'react'
import Link from 'next/link'
import {discoverLinks} from '../data/discoverLinks'
import NavbarCarousel from './NavbarCarousel'
import { XButton, SearchIcon, Logo } from './SVGImages'

export default function Navbar() {
  const [showDiscover, setShowDiscover] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  function setDiscover() {
    setShowDiscover(!showDiscover)
  }
  function setSearch() {
    setShowSearch(!showSearch)
  }

  let count = 0

  const searchInput = (
    <div className="flex justify-between p-5 shadow-md ">
      <input
        placeholder="Search for projects or categories"
        className="w-full"
      />
      <div className="z-20 cursor-pointer " onClick={() => setSearch()}>
        <XButton />
      </div>
    </div>
  )

  const NavbarFirstRow = (
    <div className="grid w-full grid-cols-2 py-5 px-10 md:grid-cols-3">
      <div className="flex space-x-5">
        <h1 className="cursor-pointer" onClick={() => setDiscover()}>
          Discover
        </h1>
        <Link href="/">
          <div className='flex space-x-2'>
            <h1>Start</h1>
            <h1 className="hidden md:block"> a project</h1>
          </div>
        </Link>
      </div>
      <div className="hidden justify-center md:flex">
        <Logo />
      </div>
      <div className="flex justify-end space-x-5">
        <div
          className="flex cursor-pointer items-center space-x-1"
          onClick={() => setSearch()}
        >
          <h1 className="hidden md:block">Search</h1>
          <SearchIcon />
        </div>
        <h1 className="cursor-pointer">Log in</h1>
      </div>
    </div>
  )

  return (
    <div className="relative text-darkGray">
      {/* Top Row Nav */}
      <div className="flex w-full flex-col">
        {/* Small Screens, Logo pops to top */}

        {showSearch ? (
          <div className="md:hidden">
            {searchInput}
            {NavbarFirstRow}
          </div>
        ) : (
          <div className="flex justify-center border py-5 md:hidden">
            <Link href="/">
              <Logo />
            </Link>
          </div>
        )}

        {/* Larger screens, Logo is part of grid */}
        {showSearch ? (
          <div className="hidden md:block">{searchInput}</div>
        ) : (
          NavbarFirstRow
        )}
        {/* Secondary Row Nav */}
        <NavbarCarousel />
      </div>
      {/* Popup Discover Menu */}
      <div
        className={`absolute top-0 left-0 h-screen w-full bg-white px-20 pt-4 text-2xl ${
          showDiscover ? 'block' : 'hidden'
        } `}
      >
        <div className="flex flex-col space-y-2 pb-[200px] text-softBlack">
          {discoverLinks.map((link) => {
            if (link.Header) {
              count += 1
              return count == 1 ? (
                <h1
                  className={`sticky top-[${`${
                    (count - 1) * 48
                  }`}px] flex h-12 items-center justify-between border-b border-darkGray bg-white pr-5 text-base text-secondary`}
                >
                  {link.Title}
                  <div
                    className="z-20 cursor-pointer"
                    onClick={() => setDiscover()}
                  >
                    <XButton />
                  </div>
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
