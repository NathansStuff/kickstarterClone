import React, { ReactChildren, ReactChild } from 'react'

type PageProps = {
  children: ReactChildren | ReactChild
}

export default function PageBg({ children }: PageProps) {
  return <div className="">{children}</div>
}
