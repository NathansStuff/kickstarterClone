import React from 'react'
import { Interview } from '../types/types'
import InterviewsCard from './InterviewsCard'

type Props = {
  interviews: Interview[]
}
export default function InterviewsComponent({ interviews }: Props) {
  return (
    <div className="w-full pt-10 px-5">
      <h1 className="text-sm font-bold uppercase text-softBlack">
        Interviews from the creative independent
      </h1>
      <div className='block lg:flex lg:space-x-5 items-center w-full'>
        <div className="pt-5 flex space-x-5 ">
          {interviews.slice(0,2).map((interview) => {
            return <InterviewsCard interview={interview} />
          })}
        </div>
        <div className="pt-20 flex space-x-5 lg:pt-5">
          {interviews.slice(2,4).map((interview) => {
            return <InterviewsCard interview={interview} />
          })}
        </div>
      </div>
    </div>
  )
}
