import React from 'react'
// @ts-ignore
import Faq from 'react-faq-component'
import { FAQ } from '../../../types/types'

// react-faq-component style options
const config = {
  animate: true,
  tabFocus: true,
}

type Props = {
  faqs: FAQ[]
}

export default function ProjectFaqScreen({ faqs }: Props) {
  // Add All FAQs
  let rows: { title: string; content: string }[] = []
  faqs.map((faq) => {
    const question = faq.question
    const answer = faq.answer
    rows.push({
      title: question,
      content: answer,
    })
  })
  // Format for react-faq-component
  const data = {
    rows: rows,
  }

  const askAQuestion = (
    <div>
      <p className="pb-5 md:text-sm">
        Don't see the answer to your question? Ask the project creator directly.
      </p>
      <div>
        <p className="w-fit cursor-pointer border bg-[#464646] px-5 py-2 text-sm text-white hover:bg-black">
          Ask a question
        </p>
      </div>
    </div>
  )

  return (
    <div className="flex justify-center">
      <div className="max-w-[1100px]">
        <div className="py-5">
          <h1 className="pb-5 text-2xl">Frequently Asked Questions</h1>
          <div className="md:hidden">{askAQuestion}</div>
        </div>
        <div className="space-x-10 md:flex">
          <div className="w-2/3">
            <Faq data={data} config={config} />
          </div>
          <div className="hidden w-1/3 border-l-4 border-gray-200 pl-5 md:block">
            {askAQuestion}
          </div>
        </div>
      </div>
    </div>
  )
}
