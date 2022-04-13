import React from 'react'

export default function Footer() {
  return (
    <div className="border-y border-secondary py-5">
      <div className="flex flex-col space-x-5 space-y-5 border-b pb-5 md:space-y-0">
        <div className="text-sm font-bold uppercase text-secondary pl-5 md:hidden">
          <h1>Explore</h1>
        </div>
        <div className='md:flex-row md:flex justify-center space-x-5'>
          <h1 className='hover:underline hover:text-secondary'>Arts</h1>
          <h1 className='hover:underline hover:text-secondary'>Comics & Illustration</h1>
          <h1 className='hover:underline hover:text-secondary'>Design & Tech</h1>
          <h1 className='hover:underline hover:text-secondary'>Food & Craft</h1>
          <h1 className='hover:underline hover:text-secondary'>Games</h1>
          <h1 className='hover:underline hover:text-secondary'>Music</h1>
          <h1 className='hover:underline hover:text-secondary'>Publishing</h1>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col space-y-5">
          <div>
            <h1>About</h1>
          </div>
          <div>
            <h1>About Us</h1>
            <h1>Our charter</h1>
            <h1>Stats</h1>
            <h1>Press</h1>
            <h1>Jobs</h1>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div>
            <h1>Support</h1>
          </div>
          <div>
            <h1>Help Center</h1>
            <h1>Our Rules</h1>
            <h1>Creator Resources</h1>
            <h1>Forward Funds</h1>
            <h1>Brand Assets</h1>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div>
            <h1>More From Kickstarter</h1>
          </div>
          <div>
            <h1>Newsletters</h1>
            <h1>Kickstarter Magazine</h1>
            <h1>The Creative Independent</h1>
            <h1>Mobile apps</h1>
            <h1>Research</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
