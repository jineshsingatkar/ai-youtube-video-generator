import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <div className='p-4 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Image 
          src={'/logo.svg'}
          alt='logo'
          width={42}
          height={42}
        />
        <h2 className='text-2xl font-bold'>AI Video Gen</h2>
      </div>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Header