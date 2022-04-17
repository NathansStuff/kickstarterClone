import React from 'react'
import { Interview } from '../../types/types';


type Props = {
  interview: Interview
}

export default function InterviewsCard({ interview }: Props) {
  return (
    <a href={interview.href} target="_blank">
      <div className="group max-h-80 w-full cursor-pointer pb-10 lg:h-full lg:flex flex-col justify-center items-center lg:max-h-[100%]">
        <div className="tint__image mb-5 max-h-60 overflow-hidden md:max-h-[300px] lg:h-[500px] lg:w-full ">
          <img
            alt="author image"
            src={interview.image}
            className="w-full object-cover lg:h-[300px] lg:object-fill"
          />
        </div>
        <h1 className="mb-10 group-hover:underline">{interview.title}</h1>
      </div>
    </a>
  )
}
