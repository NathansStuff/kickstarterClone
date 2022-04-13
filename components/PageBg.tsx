type PageProps = {
  children: JSX.Element|JSX.Element[]
}

export default function PageBg({ children }: PageProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full md:px-20 pb-40">
      {children}
    </div>
  )
}
