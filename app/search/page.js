'use client'

import InfoCard from "@/components/InfoCard";
import { useSearchParams } from "next/navigation"

export default function Search({ params }) {
  const searchParams = useSearchParams();
  const searchResults = [{ img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Malediven_Wasserbungalow_%2828800500816%29.jpg/2560px-Malediven_Wasserbungalow_%2828800500816%29.jpg', name: 'Nusa Lembongan', region: 'Asia', country: 'Indonesia', lat: '38', lon: '57', animals: ['Manta ray', 'Hammerhead shark'], description: "Awesome diving you can't miss" }, { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Malediven_Wasserbungalow_%2828800500816%29.jpg/2560px-Malediven_Wasserbungalow_%2828800500816%29.jpg', name: 'Pulau Bunaken Siladen', region: 'Asia', country: 'Indonesia', lat: '38', lon: '57', animals: ['Manta ray', 'Hammerhead shark'], description: "Awesome diving you can't miss" }]
  return (
    <main className="flex">
      <section className="flex-grow p5-14 px-6">
        <p className="text-xs">300+ Sites found in {searchParams.get('location')}</p>

        <h1 className="text-3xl font-semibold mt-2 mb-6">Find Mantas here</h1>
        <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Live aboard</p>
          <p className="button">Sort by rating</p>
          <p className="button">Beginner friendly</p>
        </div>
        <div>
          {searchResults.map(({ img, name, region, country, lat, lon, animals, description }, index) => (
            <InfoCard
              img={img}
              name={name}
              region={region}
              country={country}
              lat={lat}
              lon={lon}
              animals={animals}
              description={description}
              key={index}
            />
          ))}
        </div>
      </section>
    </main>
  )
}