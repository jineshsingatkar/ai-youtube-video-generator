"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-card rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold">Sign in to your account</h2>
        </div>
        <div className="mt-8 space-y-6">
          <Button 
            className="w-full" 
            onClick={() => {
              // Add your authentication logic here
              router.push('/dashboard')
            }}
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  )
} 