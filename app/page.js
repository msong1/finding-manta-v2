import Banner from '@/components/Banner'
import SmallCard from '@/components/SmallCard';
import Image from 'next/image'

const sampleMarineLifeData = [{ "name": "Manta ray", "img": "/img/marineLifeIcons/manta.png" }, { "name": "Shark", "img": "/img/marineLifeIcons/shark.png" }, { "name": "Turtle", "img": "/img/marineLifeIcons/turtle.png" }, { "name": "Whale", "img": "/img/marineLifeIcons/whale.png" }, { "name": "Seahorse", "img": "/img/marineLifeIcons/seahorse.png" }]

async function getMarineLife() {
  const response = await fetch("https://mocki.io/v1/56e4ee98-ae64-47ab-9bc8-0a54de3b9c21");
  return response.json();
}


export default async function Home() {
  const marineLife = await getMarineLife();
  return (
    <main>
      <Banner />
      <div className=' max-w-7xl mx-auto px-8 sm:px-16'>
        <section className=' pt-6'>
          <h2 className=' text-4xl font-semibold pb-5'>Browse by marine life</h2>
          <h3 className='text-4xl'>
            {sampleMarineLifeData?.map(({name, img}, id) => (
            <SmallCard img={img} name={name} key={id} />
          ))}
          </h3>
        </section>
        <section>
          <h2>Browse by region </h2>
        </section>
        <section>
          <h2>Top 10 dive sites</h2>
        </section>
      </div>
    </main>
  )
}