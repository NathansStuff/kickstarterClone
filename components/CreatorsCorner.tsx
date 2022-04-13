import React from 'react'
import { CreatorsComments } from '../types/types'
import CreatorsCommentCard from './CreatorsCommentCard'

type Props = { creatorsComments: CreatorsComments[] }

export default function CreatorsCorner({ creatorsComments }: Props) {
  return (
    <div className="border-b py-10 px-5 md:px-0">
      <h1 className="text-sm font-bold uppercase text-softBlack">
        Creators' Corner
      </h1>

      <div className="grid gap-x-10 lg:grid-cols-2">
        {creatorsComments.map((creatorComment, index) => {
          return (
            <CreatorsCommentCard creatorsComment={creatorComment} key={index} />
          )
        })}
      </div>
    </div>
  )
}
