import PortableText from 'react-portable-text'

type Props = {
 content: object[]
}

export default function PortableTextContent({ content }: Props) {
 
  const {SANITY_DATASET_NAME, SANITY_PROJECT_ID} = process.env

  return (
    <PortableText
      className="space-y-5"
      dataset={SANITY_DATASET_NAME}
      projectId={SANITY_PROJECT_ID}   
      content={content}
      serializers={{
        h1: (props: any) => {
          return <h1 className="my-5 text-2xl font-bold" {...props} />
        },
        h2: (props: any) => {
          return <h2 className="text-x1 my-5 font-bold" {...props} />
        },
        p: (props: any) => {
          return <p className="py-5" {...props} />
        },
        li: ({ children }: any) => {
          return <li className="ml-4 list-disc"> {children} </li>
        },
        link: ({ href, children }: any) => {
          return (
            <a href={href} className="text-blue-500 hover:underline">
              {children}
            </a>
          )
        },
      }}
    />
  )
}
