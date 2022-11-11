import React, {useContext} from 'react'

const AuthContext = React.createContext<any>("");

export function AuthProvider({children, value}) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}