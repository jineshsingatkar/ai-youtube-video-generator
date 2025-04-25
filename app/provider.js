"use client"
import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

function provider({children}) {
  return (
    <div>
        <NextThemesProvider
        
        attribute ="class"
        defaultTheme="system"
        enableSystem
        disableTrasnitionOnChange
        >
        {children}
        </NextThemesProvider>
      
    </div>
  )
}

export default provider
