"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Authentication } from './Authentication'
import { useAuth } from '../context/AuthContext'

export function Header() {
  const { user } = useAuth()

  return (
    <div className='p-4 flex items-center justify-between max-w-7xl mx-auto'>
      <div className='flex items-center gap-4'>
        <Image 
          src={'/logo.svg'}
          alt='logo'
          width={40}
          height={40}
        />
        <h2 className='text-xl font-semibold text-gray-800'>Video Gen</h2>
      </div>
      <div className='flex items-center gap-4'>
        {!user ? (
          <Authentication>
            <Button className='bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-md text-sm font-medium'>
              Get Started
            </Button>
          </Authentication>
        ) : (
          <>
            <Button variant="outline" className='border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium'>
              Dashboard
            </Button>
            <Image 
              src={user.photoURL} 
              alt='userImage' 
              width={36} 
              height={36}
              className='rounded-full border border-gray-200'
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Header