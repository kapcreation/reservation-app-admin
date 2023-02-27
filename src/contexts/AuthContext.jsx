import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

function setAuthorizationHeader() {
  axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`
}
setAuthorizationHeader()

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

  async function login(data) {
    const res = await axios.post(`${process.env.REACT_APP_API}/auth/login`, data)
    
    if (!res.data.isAdmin) throw new Error("Only admin can login!")

    setUser(res.data)
  }

  async function register() {

  }

  useEffect(() => {
    console.log("user", user)
    localStorage.setItem("user", JSON.stringify(user))
    setAuthorizationHeader()
  }, [user])
  

  const value={ user, login, register }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}