"use client"

import React from 'react'
import { Sparkles, Zap, Wand2, Video } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered Script Generation",
    description: "Generate engaging scripts in seconds with our advanced AI technology."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast Creation",
    description: "Create and publish videos in minutes, not hours."
  },
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: "Smart Video Editing",
    description: "Automatically edit and optimize your videos for maximum engagement."
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Professional Voiceovers",
    description: "Add natural-sounding voiceovers to your videos with AI."
  }
]

export function Features() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-24'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-gray-900 mb-4'>Powerful Features</h2>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Everything you need to create professional short videos
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features.map((feature, index) => (
          <div key={index} className='p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors'>
            <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4'>
              {feature.icon}
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
            <p className='text-gray-600'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 