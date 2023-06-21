import Image from 'next/image'
import logo from 'public/img/logo.png'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'

function Header() {
  return (
  <header className='sticky top-0 z-50 grid grid-cols-3 bg-blue-100 shadow-md p-5 md:px-10 md:shadow-md'>
    {/* left */}
    <div className="relative flex items-center h-10 cursor-pointer my-auto">
      <Image src={logo}
      fill
      style={{objectFit: 'contain', objectPosition:'left'}}
      alt='logo'
      />
    </div>

    {/* middle */}
    <div className='flex items-center bg-white md:border-2 rounded-full py-2'>
      <input className='flex-grow pl-5 bg-transparent outline-none' type="text" placeholder='Start your search' />
      <SearchIcon className='hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
    </div>

    {/* right */}
    <div className='flex items-center space-x-3 justify-end text-gray-500'>
      <p className='hidden md:inline cursor-pointer'>Register your diving center</p>
      <GlobeAltIcon className='h-6 cursor-pointer' />

      <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
        <MenuIcon className='h-6' />
        <UserCircleIcon className='h-6' />
      </div>
    </div>
  </header>


  )
}

export default Header