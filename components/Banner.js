import banner from 'public/img/banner.jpg'
import Image from 'next/image'
import Link from 'next/link'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl-h-[700px]'>
      <Image src={banner}
      fill
      style={{objectFit: 'cover', objectPosition:'center'}}
      alt='logo'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg text-white'>Need some inspiration?</p>
        <Link href={`/search?country=&region=&animals=`}>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Show me recommendations!</button>
        </Link>
      </div>
    </div>
  )
}

export default Banner