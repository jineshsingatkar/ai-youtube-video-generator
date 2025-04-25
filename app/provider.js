"use client"
import React, { use, useEffect } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/firebase'

const AuthContext = React.createContext()


function provider({children}) {
    const [user, setuser] = useState();
    useEffect(() => {
        const Unsubsribe=onAuthStateChanged(auth, (user) => {
          console.log(user);
          
        })
        return () => Unsubsribe()
      }, [])
  // const [mounted, setMounted] = useState(false)

  return (
    <div>
        <AuthContext.provider value={{user}}>
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

export const useAuth = () => {
const Context = useContext(AuthContext)
return Context;
}
export default provider
