import PortableTextContent from '../../components/PortableTextContent'
import {
  ChevronRight,
  CommentLogo,
  HeartLogo,
  UpdateLogo,
} from '../../assets'
import { User, Update } from '../../types/types'

type UpdateCardProps = {
  update: Update
  index: number
  creator: User
}

export default function ProjectUpdateCard({
  update,
  index,
  creator,
}: UpdateCardProps) {
  const createdAt = new Date(update.createdAt)
  return (
    <div className="group  relative mb-5 h-[540px] w-full border bg-[#FFFFFF] p-5 transition-all delay-150 ease-in-out hover:h-[600px]">
      <div className="absolute left-[-2.5%] top-[60px] flex h-8 w-8 items-center justify-center rounded-full bg-orange-400">
        <UpdateLogo />
      </div>
      <div className="h-full overflow-hidden px-5">
        <div className="fade__out h-[450px] overflow-hidden transition-all delay-150 ease-in-out group-hover:h-[510px]">
          <h1 className="text-xs">UPDATE #{index + 1}</h1>
          <h1 className="py-5 text-3xl">{update.title}</h1>
          <div className="flex items-center space-x-2">
            <img
              alt="update author image"
              src={creator.image}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="">
              <div className="flex space-x-2">
                <h3 className="text-sm">{creator.name}</h3>
                <div className="flex items-center rounded-sm bg-primary px-1 text-xs font-bold text-white">
                  <p>Creator</p>
                </div>
              </div>
              <h3 className="text-xs">{`${createdAt.toLocaleString('default', {
                month: 'long',
              })} ${createdAt.getDate()}, ${createdAt.getFullYear()}`}</h3>
            </div>
          </div>
          <div className="w-full border-b pt-5" />
          <div className="pt-5">
            <PortableTextContent content={update.content} />
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex justify-between space-x-5">
            <div className="flex items-center justify-center space-x-1 text-sm">
              <CommentLogo />
              <p>4</p>
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm">
              <HeartLogo />
              <p>4</p>
            </div>
          </div>
          <div className="flex cursor-pointer items-center justify-center border p-2 hover:border-black hover:shadow-md">
            Read more <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  )
}
