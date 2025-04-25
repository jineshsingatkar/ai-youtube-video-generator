import React from 'react'
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

export function Dashboard() {
  return (
    <div className='p-10 flex flex-col items-center justify-center mt-24'>
      <div className='text-center mb-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
          You don't have any video created
        </h2>
        <p className='text-gray-600'>
          Create your first video to get started
        </p>
      </div>
      <Button className='bg-black text-white hover:bg-gray-800 flex items-center gap-2'>
        <Plus size={20} />
        Create New Video
      </Button>
    </div>
  )
} 