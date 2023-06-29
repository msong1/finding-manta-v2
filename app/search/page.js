// 'use client'

import InfoCard from "@/components/InfoCard";
import Map from "@/components/Map";
import getSites from "../(actions)/getSites";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import InfiniteScroll from "@/components/InfiniteScroll";

export default async function Search({ searchParams }) {

  const { country, region, animals } = searchParams;

  const isEmpty = false;

  if (isEmpty) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }
  const searchResults = await getSites(
    {
      where: {
        AND: [
          {
            country:
              { contains: country },
          },
          {
            region:
              { contains: region },
          },
          // { animalIDs:
          //   {has: animals},
          // },
        ]
      }
      ,
      orderBy:
        { loggedDives: 'desc' }
    }
  )

  return (
    <ClientOnly>
      <main className="flex">
        <section className="flex-grow p5-14 px-6 max-w-[950px] max-h-[calc(100vh-175px)] overflow-y-scroll">
          {/* <p className="text-xs">300+ Sites found in {searchParams.get('location')}</p> */}

          <h1 className="text-3xl font-semibold mt-2 mb-6">Find Mantas here</h1>
          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Live aboard</p>
            <p className="button">Sort by rating</p>
            <p className="button">Beginner friendly</p>
          </div>
          {/* <InfiniteScroll> */}
            {searchResults.map((item, index) => (
              <InfoCard
                data={item}
                key={index}
              />
            ))}
          {/* </InfiniteScroll> */}
        </section>
        {/* map */}
        <section className="hidden lg:inline-flex lg:min-w-[600px] lg:w-[100%] lg:max-h-[calc(100vh-100px)]">
          {/* overflow:hidden lg:h-[90vh] lg:max-h-[1%] */}
          <Map searchResults={searchResults} />
        </section>
      </main>
    </ClientOnly>
  )
}