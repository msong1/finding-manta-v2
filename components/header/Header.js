'use client'

import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
import Logo from './Logo'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function Header() {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState({
    country: '',
    region: '',
    animals: [],
  });

  const handleChange = (e) => {
    setSearchInput({
      ...searchInput,
      country: e.target.value
    });
  }

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-blue-500 shadow-md p-5 md:px-10 md:shadow-md'>
      {/* left */}
      <Logo setSearchInput={setSearchInput}/>
      {/* middle */}
      <div className='flex items-center bg-white md:border-2 rounded-full py-2'>
        <input value={searchInput.country} className='flex-grow pl-5 bg-transparent outline-none' type="text" placeholder='Search...'
          onChange={handleChange} />

        <Link href={`/search?country=${searchInput.country}&region=${searchInput.region}&animals=${searchInput.animals}`}>
          <SearchIcon className='hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer md:mx-2 flex-shrink-0'/>
        </Link>
      </div>

      {/* right */}
      <div className='flex items-center space-x-3 justify-end text-gray-50'>
        {/* <p className='hidden md:inline cursor-pointer'>Register your diving center</p> */}
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