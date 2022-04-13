export default function Stats() {
  return (
    <div className="flex flex-col justify-center pt-10">
      <div className="flex flex-col items-center text-3xl">
        <h1>Creative work shows us what's possible.</h1>
        <h1>Help fund it here.</h1>
      </div>
      <div className="flex flex-col items-center pt-10 ">
        <h5 className="uppercase">Within the last day</h5>
        <div className="flex justify-center shadow-[0_2px_6px_0px_rgba(0,0,0,0.17)] mt-4 w-full">
          <div className="border-r px-10 py-5 w-1/3">
            <h1 className="text-3xl text-secondary flex justify-center">35</h1>
            <h3 className="text-softBlack flex justify-center">projects funded</h3>
          </div>
          <div className="border-r px-10 py-5 w-1/3">
            <h1 className="text-3xl text-secondary flex justify-center">$2,418,499</h1>
            <h3 className="text-softBlack flex justify-center">towards creative work</h3>
          </div>
          <div className="border-r px-10 py-5 w-1/3">
            <h1 className="text-3xl text-secondary flex justify-center">23,199</h1>
            <h3 className="text-softBlack flex justify-center">backings</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
