import react from 'react'
import { Button } from "@/components/ui/button"


export function Hero() {
    return (
        <div className='p-10 flex flex-col items-center justify-center mt-24 md:px-20 lg:px36 xl:px-48'>
        <h2 className='font-bold text-6xl text-center text-gray-500'> AI Youtube Video Short Generate </h2>
        <p classname='mt-4 text-2xl text-gray-400 text-center'>AI Generated Scripts, images, and voiceovers in seconds. 
        Create, edit, and Publish engaging shorts with ease!</p>
        <div className='mt-7' gap-8 flex>

        <button size="lg" variant="secondary">Explore</button>
        <button size="lg">Get Started</button>
        </div>
        </div>

    )
    }