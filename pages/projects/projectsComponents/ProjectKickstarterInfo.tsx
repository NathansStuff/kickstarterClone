import React from 'react'
import {
  BackerTrustFundingIcon,
  BackerTrustIcon,
  BackerTrustKickstarterIcon,
} from '../../../assets'

export default function ProjectKickstarterInfo() {
  return (
    <div className="flex w-full flex-col space-y-5 bg-[#F6F2EB] p-5 py-10 md:mx-0 md:flex-row md:space-y-0 md:px-10 lg:mt-10 lg:flex lg:justify-center">
      <div className="lg:flex lg:w-full lg:max-w-[1366px] lg:flex-row lg:items-center lg:justify-center flex flex-col space-y-5 md:space-y-0">
        <div className="flex items-center space-x-5 md:items-start ">
          <div className="md:h-20 md:w-20">
            <BackerTrustKickstarterIcon />
          </div>
          <h3 className="text-lg">
            Kickstarter connects creators with backers to fund projects.
          </h3>
        </div>
        <div className="flex items-center space-x-5 md:items-start">
          <div className="md:h-20 md:w-20">
            <BackerTrustIcon />
          </div>
          <h3 className="text-lg">
            Rewards aren’t guaranteed, but creators must regularly update
            backers.
          </h3>
        </div>
        <div className="flex items-center space-x-5 md:items-start">
          <div className="md:h-20 md:w-20">
            <BackerTrustFundingIcon />
          </div>
          <h3 className="text-lg">
            You’re only charged if the project meets its funding goal by the
            campaign deadline.
          </h3>
        </div>
      </div>
    </div>
  )
}
