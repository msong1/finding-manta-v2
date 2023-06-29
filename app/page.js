import Banner from '@/components/Banner'
import LargeCard from '@/components/LargeCard';
import MediumCard from '@/components/MediumCard';
import SmallCard from '@/components/SmallCard';
import Image from 'next/image'

async function getMarineLife() {
  // const response = await fetch("https://mocki.io/v1/56e4ee98-ae64-47ab-9bc8-0a54de3b9c21");
  // return response.json();
  const sampleMarineLifeData = [{ "name": "Manta ray", "img": "/img/marineLifeIcons/manta.png" }, { "name": "Shark", "img": "/img/marineLifeIcons/shark.png" }, { "name": "Turtle", "img": "/img/marineLifeIcons/turtle.png" }, { "name": "Whale", "img": "/img/marineLifeIcons/whale.png" }, { "name": "Seahorse", "img": "/img/marineLifeIcons/seahorse.png" }]
  return sampleMarineLifeData;
}

async function getRegions() {
  return [
    {name: "Asia", img: "/img/regions/asia.webp" },
  // {name: "Africa", img: "/img/regions/africa.webp"},
  {name: "Europe", img: "/img/regions/europe.webp"},
  {name: "North America", img: "/img/regions/na.webp"},
  {name: "South America", img: "/img/regions/sa.webp"},
];
}


export default async function Home() {
  const marineLife = await getMarineLife();
  const regions = await getRegions();

  return (
    <main>
      <Banner />
      <div className=' max-w-7xl mx-auto px-8 sm:px-16'>
        <section className=' pt-6'>
          <h2 className=' text-4xl font-semibold pb-5'>Browse by marine life</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
            {marineLife?.map(({name, img}, id) => (
            <SmallCard img={img} name={name} key={id} />
          ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Browse by region </h2>
          <div className='flex space-x-3 p-3 overflow-x-auto'>
          {/* might need to use scroll-hide */}
            {regions?.map(({name, img}, id) => (
              <MediumCard name={name} img={img} key={id} />
            ))}
          </div>

        </section>
        <LargeCard
          img='/img/largecard.jpeg'
          title='The Best Diving Sites'
          description='Wishlists curated by Finding Manta'
          buttonText='Learn More'
          />
      </div>
    </main>
  )
}