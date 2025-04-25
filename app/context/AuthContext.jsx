"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing user session
    const checkUser = async () => {
      try {
        // Add your authentication check logic here
        // For example, check localStorage or make an API call
        setLoading(false)
      } catch (error) {
        console.error('Auth error:', error)
        setLoading(false)
      }
    }

    checkUser()
  }, [])

  const value = {
    user,
    setUser,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 