import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"


export function Header() {
  return (
    <div className='p-4 flex items-center' justify-between>
    <div className='flex items-center gap-3'>
<Image Src={'/logo.svg'}
alt='logo'
width={42}
height={42}
/>

<h2 className='text-2xl font-bold'> AI Video Generator </h2>
</div>
<div>
<button> Get Started </button>
</div>
  )
}
export default Header