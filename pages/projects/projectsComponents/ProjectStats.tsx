import React, { Fragment } from 'react'
import { Bookmark, FacebookLogo, TwitterLogo } from '../../../assets'
import { Backer } from '../../../types/types'

type Props = {
  fundedMin: number
  endsAt: string
  projectMeta: JSX.Element
  backers: Backer[]
}

export default function ProjectStats({
  fundedMin,
  projectMeta,
  endsAt,
  backers,
}: Props) {
  var backerFunding = 0
  backers?.map((backer) => {
    backerFunding += backer.amount
  })

  const endDate = new Date(endsAt)
  const nowDate = new Date()

  var t2 = nowDate.getTime()
  var t1 = endDate.getTime()

  backerFunding = 5000
  const backerPercent = (backerFunding / fundedMin) * 100
  //@ts-ignore
  const daysLeft = parseInt((t2 - t1) / (24 * 3600 * 1000))
  return (
    <Fragment>
      {/* % Complete Bar */}
      <div className="md:px-32 lg:px-0 ">
        <div className="relative p-5 md:px-0 lg:pt-0">
          <div className="h-2 w-full bg-gray-400" />
          {/* Set to 100% */}

          <div
            className={`absolute top-5 h-2 w-[${backerPercent}%] max-w-[calc(100%-40px)]  bg-tertiary lg:top-0`}
          />
        </div>
      </div>
      <div className="flex space-x-5 px-5 pb-5 md:space-x-10 md:px-32 lg:flex-col lg:space-x-0 lg:space-y-5 lg:px-0">
        <div>
          <h1 className="text-lg font-bold text-tertiary md:text-3xl">
            AU${backerFunding}
          </h1>
          <p className="text-xs text-softBlack md:text-sm">
            pledged of AU$ {fundedMin.toLocaleString()} goal
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold text-darkGray md:text-3xl">
            {backers?.length || 0}
          </h1>
          <p className="text-xs text-softBlack md:text-sm">backers</p>
        </div>
        <div>
          <h1 className="text-lg font-bold text-darkGray md:text-3xl">
            {daysLeft > 0 ? daysLeft : 'Sorry, this project Ended!'}
          </h1>
          <p className="text-xs text-softBlack md:text-sm">
            {daysLeft > 0 ? 'days to go' : 'but you can still back it'}
          </p>
        </div>
      </div>
      <div className="md:hidden"> {projectMeta}</div>
      {/* Call To Actions */}
      <div className="m-5 flex cursor-pointer items-center justify-center bg-[#028858] py-2 hover:bg-secondary md:mx-32 md:mb-0 lg:mx-0  lg:px-0">
        <h1 className="text-white">Back this project</h1>
      </div>
      <div className="flex w-full flex-wrap justify-between px-5 md:px-32 lg:px-0">
        <div className="my-5 flex cursor-pointer items-center justify-center space-x-5 border border-gray-300 px-20 py-2 hover:border-black hover:shadow-md">
          <Bookmark />
          <h1 className="">Remind me</h1>
        </div>
        <div className="my-5 flex w-40 items-center justify-around">
          <div className="h-10 w-10 cursor-pointer p-2 ">
            <a href="https://www.facebook.com" target="_blank">
              <FacebookLogo />
            </a>
          </div>
          <div className="h-6 w-6">
            <a href="https://www.twitter.com" target="_blank">
              <TwitterLogo />
            </a>
          </div>
        </div>
      </div>
      <div className="pb-5 md:px-32 lg:px-0">
        <p className="px-5 text-xs md:px-0">
          <span className="underline">All or nothing.</span> This project will
          only be funded if it reaches its goal by {endDate.toDateString()}{' '}
          {endDate.toTimeString()}.
        </p>
      </div>
    </Fragment>
  )
}
