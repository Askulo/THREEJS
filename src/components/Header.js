  import Image from 'next/image'
  import Link from 'next/link'
  import React from 'react'

  const Header = () => {
    return (
      <div className=' flex absolute items-center px-4 py-2 md:px-10 justify-between w-full z-10'>

        <div className='py-1'>
          <Link href="/" className='text-xl md:text-2xl font-black tracking-widest'>PAINTING WING</Link>
          <h4 className='text-xs md:text-sm font-bold tracking-wider'>Lets Satisfaction Prevail</h4>
        </div>

        <div>
          <Image src='/logo.png' width={110} height={80} alt='logo' />
        </div>
      </div>
    )
  }

  export default Header
