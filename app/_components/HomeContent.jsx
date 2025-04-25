"use client"

import React from 'react'
import Header from "./Header"
import { Hero } from "./Hero"
import { Dashboard } from "./Dashboard"
import { useAuth } from "../context/AuthContext"

export function HomeContent() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen">
      <Header />
      {user ? <Dashboard /> : <Hero />}
    </div>
  )
} 