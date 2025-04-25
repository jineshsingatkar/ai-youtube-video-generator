"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export function Authentication({ children }) {
  const router = useRouter()

  const handleAuth = () => {
    // Add your authentication logic here
    router.push('/auth/signin')
  }

  return (
    <div onClick={handleAuth}>
      {children}
    </div>
  )
}