"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Authentication } from './Authentication'

export function Hero() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16'>
      <div className='flex flex-col items-center text-center gap-8'>
        <h1 className='text-5xl font-bold text-gray-900 max-w-3xl leading-tight'>
          Create Engaging Short Videos with AI
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl'>
          Transform your ideas into viral short videos in minutes. No video editing skills required.
        </p>
        <div className='flex gap-4'>
          <Authentication>
            <Button className='bg-black text-white hover:bg-gray-800 px-8 py-6 rounded-md text-lg font-medium'>
              Get Started
            </Button>
          </Authentication>
          <Button variant="outline" className='border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-6 rounded-md text-lg font-medium'>
            Learn More
          </Button>
        </div>
        <div className='mt-16 relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-gray-200'>
          <Image
            src="/hero-preview.jpg"
            alt="Video Preview"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}