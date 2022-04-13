import React from 'react'
import { Interview } from '../types/types'
import InterviewsCard from './InterviewsCard'

type Props = {
  interviews: Interview[]
}
export default function InterviewsComponent({ interviews }: Props) {
  return (
    <div className="w-full px-5 pt-10">
      <h1 className="text-sm font-bold uppercase text-softBlack">
        Interviews from the creative independent
      </h1>
      <div className="block w-full items-center lg:flex lg:space-x-5">
        <div className="flex space-x-5 pt-5 ">
          {interviews.slice(0, 2).map((interview, index) => {
            return <InterviewsCard interview={interview} key={index} />
          })}
        </div>
        <div className="flex space-x-5 pt-20 lg:pt-5">
          {interviews.slice(2, 4).map((interview, index) => {
            return <InterviewsCard interview={interview} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}
