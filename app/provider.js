"use client"
import React, { use, useEffect } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { onAuthStateChanged } from 'firebase/auth'

function provider({children}) {

    useEffect(() => {
        const Unsubsribe=onAuthStateChanged(auth, (user) => {
          console.log(user);
        })
        return () => Unsubsribe()
      }, [])
  // const [mounted, setMounted] = useState(false)

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
