import Banner from '@/components/Banner'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Banner />
      <section>
        <h2>Explore by marine life</h2>
      </section>
      <section>
        <h2>Browse by region </h2>
      </section>
      <section>
        <h2>Top 10 dive sites</h2>
      </section>
    </main>
  )
}
