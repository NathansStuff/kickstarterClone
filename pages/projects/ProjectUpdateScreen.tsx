import React from 'react'
import { User, Update } from '../../types/types'
import UpdateCard from './ProjectUpdateCard'


type Props = {
  updates: Update[]
  launchDate: string
  creator: User
}

export default function ProjectUpdateScreen({ updates, launchDate, creator }: Props) {
  const liveDate = new Date(launchDate)
  return (
    <div className="bg-[#FBFBFA]">
      <div className="flex w-full flex-col items-center justify-center object-contain px-10 py-5 ">
        <div className="w-full md:w-2/4">
          {updates.map((update, index) => {
            return (
              <UpdateCard
                update={update}
                key={index}
                index={index}
                creator={creator}
              />
            )
          })}
        </div>
        {/* Default Project Launch For All Projects */}
        <div className="relative h-60 w-full overflow-hidden bg-green-500 md:w-2/4">
          <img
            src="https://ksr-static.imgix.net/FINAL_KSR_10_YELLOW-DISC_01.png?ixlib=rb-1.1.0&auto=compress&w=1000&fit=min&s=39dcbd5cac8d508b0646822b20ab6677"
            className="absolute bottom-0 left-2/4 top-[60%] w-[180px]"
          />
          <img
            src="https://ksr-static.imgix.net/FINAL_KSR_10_CORAL-CUBE_01.png?ixlib=rb-1.1.0&auto=compress&w=1000&fit=min&s=ff76fadeacdfdc77476b4571aab17dd9"
            className="absolute left-[-10%] top-[-40%] w-[185px]"
          />
          <img
            src="https://ksr-static.imgix.net/FINAL_KSR_10_CORAL-TUBE_01.png?ixlib=rb-1.1.0&auto=compress&w=1000&fit=min&s=b9d06ac1f74686b326d06511ef47ee81"
            className="absolute right-[-15%] top-[-40%] w-[185px]"
          />
          <div className="flex h-full flex-col items-center justify-center space-y-2 text-white">
            <h3 className="text-2xl font-bold">Project Launches</h3>
            <p>{`${liveDate.getDate()} ${liveDate.toLocaleString('default', {
              month: 'long',
            })} ${liveDate.getFullYear()}`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
