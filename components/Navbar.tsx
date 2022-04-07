import React from 'react'

export default function Navbar() {
  const Logo = (
    <img
      src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f"
      className="md-hidden w-[200px] cursor-pointer"
    />
  )
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-center border py-5 md:hidden">{Logo}</div>
      <div className="grid w-full grid-cols-3 py-5 px-10">
        <div className="flex space-x-5">
          <div>
            <h1 className="cursor-pointer">Discover</h1>
          </div>
          <div>
            <h1 className="cursor-pointer">Start a project</h1>
          </div>
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
      <div className="top-1 flex justify-around border px-20 py-5">
        <h1 className="cursor-pointer">Arts</h1>
        <h1 className="cursor-pointer">Comic & Illustation</h1>
        <h1 className="cursor-pointer">Design & Tech</h1>
        <h1 className="cursor-pointer">Film</h1>
        <h1 className="cursor-pointer">Food & Craft</h1>
        <h1 className="cursor-pointer">Games</h1>
      </div>
    </div>
  )
}
