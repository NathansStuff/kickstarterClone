import React from 'react'
import { Backer, Location } from '../../../types/types'
import Countries from '../../../data/country'

type Props = {
  backers: Backer[]
  creatorName: string
}

type countryProps = {
  country: string
  count: number
}

export default function ProjectCommunityScreen({
  backers,
  creatorName,
}: Props) {
  let backersArray: Location[] = []
  backers.map((backer) => {
    backersArray.push(backer.user.location)
  })
  // given backers, return
  var cities = backersArray.reduce(
    // @ts-ignore
    (acc, o) => ((acc[o.city] = (acc[o.city] || 0) + 1), acc),
    {}
  )
  // Given backers, return country: count, eg: US : 2
  var countries = backersArray.reduce(
    // @ts-ignore
    (acc, o) => ((acc[o.country] = (acc[o.country] || 0) + 1), acc),
    {}
  )

  // Given shorthand country: count object, return longname object
  // eg; US: 2 => United States: 2
  let countryNames: countryProps[] = []
  Object.keys(countries).forEach((key, value) => {
    const index = Countries.findIndex((obj) => obj.value == key)
    const countryName = Countries[index].title
    countryNames.push({
      country: countryName,
      count: value + 1,
    })
  })

  // Sorts by highest-low count
  function sortByKey(key: string, array: { country: string; count: number }) {
    //@ts-ignore
    return array.sort(function (a, b) {
      var x = a[key]
      var y = b[key]
      return x > y ? -1 : x < y ? 1 : 0
    })
  }
 
  let citiesMapped = []
  let count=0
  for (const [key, value] of Object.entries(cities)) {
    count+=1
   // @ts-ignore
   citiesMapped.push(<div key={count}>{backerLocationCard(key, value)}</div>)
 }

  //@ts-ignore
  const countrySorted = sortByKey('count', countryNames)
  //@ts-ignore
  // const citySorted = sortByKey('count', cities)

  function backerLocationCard(name: string, count: number) {
    return (
      <div className="flex w-full justify-between text-sm ">
        <h1 className="text-[#2752FF]">{name}</h1>
        <h1 className="text-darkGray">{count} backers</h1>
      </div>
    )
  }

  return (
    <div className='border-b pb-40'>
      <div className="flex items-center justify-center border-b py-20 text-xl text-softBlack md:py-40">
        <h1 className="flex w-full items-center justify-center px-5">
          {backers.length} people are supporting {creatorName}
        </h1>
      </div>
      <div className='md:flex md:w-full justify-center space-x-20'>
        <div className="flex flex-col items-center border-b py-10 text-xl text-softBlack w-full max-w-[500px]">
          <h1>Where Backers Come From</h1>
          <h1>Top Cities</h1>
          <div className="w-full border-b py-5" />
          <div className="w-full px-5 pt-5">
            {citiesMapped}
          </div>
        </div>
        <div className="flex flex-col items-center border-b py-10 w-full max-w-[500px] text-xl text-softBlack">
          <h1>Where Backers Come From</h1>
          <h1>Top Countries</h1>
          <div className="w-full border-b py-5" />
          <div className="w-full px-5 pt-5">
           {/* @ts-ignore */}
            {countrySorted.map((country, index) => {
              return (<div key={index}>{backerLocationCard(country.country, country.count)}</div>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
