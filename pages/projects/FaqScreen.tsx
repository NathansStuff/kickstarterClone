import React from 'react'

type Props = {
 faqs: object[]
}

export default function FaqScreen({faqs}: Props) {
 console.log(faqs)
 faqs.map(faq=>{
  console.log(faq)
 })
 return (
    <div>
      <div className="py-5">
        <h1 className="pb-5 text-2xl">Frequently Asked Questions</h1>
        <p className="pb-5">
          Don't see the answer to your question? Ask the project creator
          directly.
        </p>
        <div>
          <p className="w-fit cursor-pointer border bg-[#464646] px-5 py-2 text-sm text-white hover:bg-black">
            Ask a question
          </p>
        </div>
      </div>
    </div>
  )
}
