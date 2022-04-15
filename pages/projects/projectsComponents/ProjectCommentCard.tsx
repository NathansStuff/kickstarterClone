import React, { Fragment } from 'react'
import { Comment } from '../../../types/types'

type Props = {
  comment: Comment
  creatorName: string
}

export default function ProjectCommentCard({ comment, creatorName }: Props) {
  const postDate = new Date(comment.createdAt)
  const todayDate = new Date()
  // To calculate the time difference of two dates
  const differenceInTime = todayDate.getTime() - postDate.getTime()
  // To calculate the no. of days between two dates
  const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))

  type commentProps = {
    userImage: string
    userName: string
    creatorName: string
    commentComment: string
  }

  function CommentCard({
    userImage,
    userName,
    creatorName,
    commentComment,
  }: commentProps) {
    return (
      <div
        className={`flex w-full flex-col items-start justify-center space-x-2 border border-gray-300 bg-white p-5 mb-5 ${
          userName === creatorName ? 'border-l-8 border-l-secondary' : ''
        }`}
      >
        <div className="flex flex-col">
          <div className="flex space-x-2">
            <img
              alt="user image"
              src={userImage}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex flex-col items-start pb-5">
              <div className="flex space-x-2">
                <h3 className="text-sm">{comment.user.name}</h3>
                {userName === creatorName ? (
                  <div className="flex items-center rounded-sm bg-secondary px-1 text-xs text-white">
                    <p>Creator</p>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <h3 className="text-xs text-[#989E9E]">
                {differenceInDays > 0
                  ? `${differenceInDays} days ago`
                  : 'Today'}
              </h3>
            </div>
          </div>
        </div>
        <p className="text-sm">{commentComment}</p>
      </div>
    )
  }

  return (
    <Fragment>
      <CommentCard
        userImage={comment.user.image}
        userName={comment.user.name}
        creatorName={creatorName}
        commentComment={comment.comment}
      />
      <div className='ml-10'>
        {comment.replies?.map((reply) => {
          return (
            <CommentCard
              userImage={reply.user.image}
              userName={reply.user.name}
              creatorName={creatorName}
              commentComment={reply.reply}
            />
          )
        })}
      </div>
    </Fragment>
  )
}
