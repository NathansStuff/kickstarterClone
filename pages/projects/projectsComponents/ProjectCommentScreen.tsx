import { Comment } from '../../../types/types'
import ProjectCommentCard from './ProjectCommentCard'

type Props = {
  comments: Comment[]
  creatorName: string
  setActiveScreen: Function
}

export default function ProjectCommentScreen({
  comments,
  creatorName,
  setActiveScreen,
}: Props) {
  return (
   <div className='flex justify-center items-center'>
    <div className="flex border-b p-5 pb-20 max-w-[1200px]">
      <div className="flex w-full flex-col space-y-5 md:w-3/4">
        <div className="flex w-full justify-center bg-[#F7F7F6] py-3 px-5 text-sm text-darkGray">
          Only backers can post comments.
        </div>
        <div className="flex flex-col bg-gray-100 px-2 pt-5">
          {comments.map((comment) => {
            return <ProjectCommentCard comment={comment} creatorName={creatorName} />
          })}
        </div>
      </div>
      <div className="grow-1 ml-5 hidden h-fit w-1/4 flex-col space-y-5 border-l-2 border-gray-400 py-5 pl-5 text-sm md:flex">
        <p>
          This is your space to offer support and feedback. Remember to{' '}
          <span className="text-secondary underline">be constructive</span>
          —there's a human behind this project.
        </p>
        <p>Have a question for the creator?</p>
        <p
          className="cursor-pointer font-bold underline"
          onClick={() => setActiveScreen(2)}
        >
          Check this project's FAQ
        </p>
      </div>
    </div></div>
  )
}
