import { News } from '../../types/types'

type Props = {
  news: News
}

export default function NewsCard({ news }: Props) {
  return (
    <a href={`blog/${news.slug}`} className='group' >
      <div className="border-b py-20 px-5">
        <div className="lg:flex lg:px-0">
          <img
            alt="news cover image"
            src={news.image}
            className="h-60 w-full object-cover lg:w-2/4"
          />
          <div className="mt-5 border-[6px] border-t-0 border-r-0 border-b-0 border-l-secondary pl-5 lg:mt-0 lg:ml-5">
            <h1 className=" group-hover:text-secondary group-hover:underline pb-5 text-xl lg:text-2xl">{news.title}</h1>
            <h1 className="text-sm">{news.blurb}</h1>
            <p className="hidden cursor-pointer pt-5 text-blueLink lg:block">
              {news.callToAction}
            </p>
          </div>
        </div>{' '}
        <p className="cursor-pointer pt-5 text-blueLink lg:hidden">
          {news.callToAction}
        </p>
      </div>
    </a>
  )
}
