import React from 'react'
import { Comment, User } from '../../types/types'

type Props = {
  comment: Comment
  creator: User
}

export default function ProjectCommentCard({ comment, creator }: Props) {
  const postDate = new Date(comment.createdAt)
  const todayDate = new Date()
  // To calculate the time difference of two dates
  const differenceInTime = todayDate.getTime() - postDate.getTime()
  // To calculate the no. of days between two dates
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))
  return (
    <div
      className={`flex w-full flex-col items-start justify-center space-x-2 border border-gray-300 bg-white p-5 ${
        comment.user.name === creator.name
          ? 'border-l-8 border-l-secondary'
          : ''
      }`}
    >
      <div className="flex flex-col">
        <div className="flex space-x-2">
          <img
            alt="user image"
            src={comment.user.image}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col items-start pb-5">
            <div className="flex space-x-2">
              <h3 className="text-sm">{comment.user.name}</h3>
              {comment.user.name === creator.name ? (
                <div className="flex items-center rounded-sm bg-secondary px-1 text-xs text-white">
                  <p>Creator</p>
                </div>
              ) : (
                ''
              )}
            </div>
            <h3 className="text-xs text-[#989E9E]">
              {differenceInDays > 0 ? `${differenceInDays} days ago` : 'Today'}
            </h3>
          </div>
        </div>
      </div>
      <p className="text-sm">{comment.comment}</p>
    </div>
  )
}
