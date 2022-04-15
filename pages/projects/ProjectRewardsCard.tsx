import PortableTextContent from "../../components/PortableTextContent";

type PledgeProps = {
 amount: number
 body: object[]
 estimatedDelivery: string
}

export default function ProjectRewardsCard({ amount, body, estimatedDelivery }: PledgeProps) {
 const shipDate = new Date(estimatedDelivery)
 const shipMonth = shipDate.toLocaleString('default', {
   month: 'long',
 })
 const shipYear = shipDate.getFullYear()

 return (
   <div className="mb-5 ml-5 border p-5">
     <h1 className="pb-5 text-xl">Pledge US{amount} or more</h1>
     <div className="text-sm">
       <PortableTextContent content={body} />
     </div>
     <div className="flex pt-5">
       <div className="flex flex-col">
         <p className="text-xs text-darkGray">Estimated Delivery</p>
         <p className="text-sm text-softBlack">
           {`${shipMonth} ${shipYear}`}
         </p>
       </div>
       <div className="flex flex-col ">
         <p className="text-xs text-darkGray">Ships to</p>
         <p className="text-sm text-softBlack">Anywhere in the world</p>
       </div>
     </div>
     <div className="mt-5 w-fit rounded-lg bg-[#F3f3f3] py-1 px-2">
       <p className="text-xs">87 backers</p>
     </div>
   </div>
 )
}