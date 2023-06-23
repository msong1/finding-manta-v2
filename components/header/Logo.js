'use client'
import { useRouter } from 'next/navigation/'
import logo from 'public/img/logo.png'
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  const router = useRouter();
  return (
    <Link href='/' className="relative flex items-center h-10 cursor-pointer my-auto flex-shrink">
    <Image src={logo}
    fill
    style={{objectFit: 'contain', objectPosition:'left'}}
    alt='logo'
    href='/'
    />
  </Link>
  )
}

export default Logo