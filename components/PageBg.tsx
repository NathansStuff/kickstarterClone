type PageProps = {
  children: JSX.Element | JSX.Element[]
}

export default function PageBg({ children }: PageProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center md:px-20 ">
      <div className="max-w-[1200px] w-full">{children}</div>
    </div>
  )
}
