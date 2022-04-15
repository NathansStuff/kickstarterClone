import PortableTextContent from '../../components/PortableTextContent'
import ProjectRewardsCard from './ProjectRewardsCard'
import { Pledge, User } from '../../types/types'

type Props = {
  estimatedDelivery: string
  setAbout: Function
  risks: string
  pledges: Pledge[]
  creator: User
  story: object[]
}

export default function ProjectCampaignScreen({
  story,
  risks,
  creator,
  setAbout,
  pledges,
  estimatedDelivery,
}: Props) {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-10 flex w-full max-w-[1250px]">
        <div className="hidden w-1/3 lg:flex">
          <div className="w-2/4" />
          <div className="flex w-1/3 flex-col items-end justify-start">
            <div className="w-full border-b pb-2">
              <h1 className="cursor-pointer font-bold text-primary">Story</h1>
            </div>
            <div className="mt-5 w-full border-b">
              <h1 className="cursor-pointer font-bold text-primary">Risks</h1>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="w-full" id="project-story">
            <PortableTextContent content={story} />
          </div>
          <div className="w-full" id="project-risks">
            <h1 className="py-10 text-2xl font-bold">Risks and challenges</h1>
            <h1>{risks} </h1>
          </div>
        </div>
        <div className="hidden w-1/3 flex-col space-y-5 md:flex ">
          <div className="pt-10">
            {/* About Creator */}
            <div
              className="relative ml-5 mb-5 h-60 border p-5"
              onClick={() => setAbout(true)}
            >
              <img
                src={creator.image}
                alt="creator image"
                className="absolute top-[-40px] left-[70px] h-20 w-20 rounded-full object-cover"
              />
              <h3 className="mt-5">{creator.name}</h3>
              <p>5 created · 3 backed</p>
              <div className="inline-block h-24 overflow-hidden text-ellipsis">
                <p className="pt-5 text-sm ">{creator.about}</p>
              </div>
              <p className="text-sm text-[#007460]">See more</p>
            </div>
            <h1 className="ml-5 py-5 text-2xl">Support</h1>

            {pledges.map((pledge, index) => {
              return (
                <div key={index}>
                  <ProjectRewardsCard
                    amount={pledge.amount}
                    body={pledge.body}
                    estimatedDelivery={estimatedDelivery}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
