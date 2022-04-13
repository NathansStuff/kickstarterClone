import React from 'react'
import Link from 'next/link'
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from './SVGImages'

export default function Footer() {
  return (
    <div className="border-y border-secondary py-5 ">
      {/* Section 1 Categories */}
      <div className="flex flex-col space-x-5 space-y-5 border-b pb-5 md:space-y-0">
        <div className="pl-5 text-sm font-bold uppercase text-secondary md:hidden">
          <h1>Explore</h1>
        </div>
        <div className="justify-center md:flex md:flex-row md:space-x-5 ">
          <h1 className="cursor-pointer hover:text-secondary hover:underline">
            Arts
          </h1>
          <h1 className="cursor-pointer hover:text-secondary hover:underline">
            Comics & Illustration
          </h1>
          <h1 className="cursor-pointer hover:text-secondary hover:underline">
            Design & Tech
          </h1>
          <h1 className="cursor-pointer hover:text-secondary hover:underline">
            Food & Craft
          </h1>
          <h1 className="cursor-pointer hover:text-secondary hover:underline">
            Games
          </h1>
          <h1 className="cursor-pointer hover:text-secondary hover:underline">
            Music
          </h1>
          <h1 className="cursor-pointer hover:text-secondary hover:underline">
            Publishing
          </h1>
        </div>
      </div>
      {/* Section 2 About Support More */}
      <div className="flex justify-around px-5 pt-5">
        <div className="flex flex-col space-y-5">
          <div>
            <h1 className="text-sm font-bold uppercase text-softBlack">
              About
            </h1>
          </div>
          <div className="text-sm">
            <Link href="">
              <h1 className="cursor-pointer hover:text-secondary hover:underline">
                About Us
              </h1>
            </Link>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Our Charter
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Stats
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Press
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Jobs
            </h1>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div>
            <h1 className="text-sm font-bold uppercase text-softBlack">
              Support
            </h1>
          </div>
          <div className="text-sm">
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Help Center
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Our Rules
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Creator Resources
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Forward Funds
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Brand Assets
            </h1>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div>
            <h1 className="text-sm font-bold uppercase text-softBlack">
              More From Kickstarter
            </h1>
          </div>
          <div className="text-sm">
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Newsletters
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Kickstarter Magazine
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              The Creative Independent
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Mobile apps
            </h1>
            <h1 className="cursor-pointer hover:text-secondary hover:underline">
              Research
            </h1>
          </div>
        </div>
      </div>
      {/* Section 3 Socials */}
      <div className="border-b py-10 px-10 md:flex items-center justify-center">
        <div className="max-w-[1366px] md:flex items-center justify-between w-full">
          <div>
            <h1 className="text-sm">Kickstarter, PBC © 2022</h1>
          </div>
          <div className="flex space-x-5 pt-5 ">
            <Link href="/">
              <div className="cursor-pointer">
                <FacebookLogo />
              </div>
            </Link>
            <Link href="/">
              <div className="cursor-pointer">
                <InstagramLogo />
              </div>
            </Link>
            <Link href="/">
              <div className="cursor-pointer">
                <TwitterLogo />
              </div>
            </Link>
            <Link href="/">
              <div className="cursor-pointer">
                <YoutubeLogo />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Section 4 T&C */}
      <div className="flex flex-wrap items-center justify-center space-x-5 px-5 py-5">
        <Link href="">
          <h1 className="cursor-pointer text-sm hover:text-secondary hover:underline">
            {' '}
            Trust & Safety
          </h1>
        </Link>
        <Link href="">
          <h1 className="cursor-pointer text-sm hover:text-secondary hover:underline">
            {' '}
            Terms of Use
          </h1>
        </Link>
        <Link href="">
          <h1 className="cursor-pointer text-sm hover:text-secondary hover:underline">
            {' '}
            Privacy Policy
          </h1>
        </Link>
        <Link href="">
          <h1 className="cursor-pointer text-sm hover:text-secondary hover:underline">
            {' '}
            Cookie Policy
          </h1>
        </Link>
        <Link href="">
          <h1 className="cursor-pointer text-sm hover:text-secondary hover:underline">
            {' '}
            Accessibility Statement
          </h1>
        </Link>
        <Link href="">
          <h1 className="cursor-pointer text-sm hover:text-secondary hover:underline">
            {' '}
            CA Notice of Consent
          </h1>
        </Link>
      </div>
    </div>
  )
}
