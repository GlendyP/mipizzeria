import { createContext, useState } from 'react'
 
 export const UserContext = createContext({})
 
 export const UserProvider = ({ children }) => {
   const [token, setToken] = useState(true)
 
   const logout = () => {
     setToken(false)
   }
 
   const getToken = () => {
     return token
   }
 
   const contextState = {
     logout,
     getToken
   }
 
   return (
     <UserContext.Provider value={contextState}>
       {children}
     </UserContext.Provider>
   )
 }