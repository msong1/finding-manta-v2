'use client'
import { useRouter } from 'next/navigation/'
import logo from 'public/img/logo.png'
import Image from 'next/image';

function Logo() {
  const router = useRouter();
  return (
    <div className="relative flex items-center h-10 cursor-pointer my-auto"
    onClick={() => {
      router.push("/");
    }}>
    <Image src={logo}
    fill
    style={{objectFit: 'contain', objectPosition:'left'}}
    alt='logo'
    />
  </div>
  )
}

export default Logo