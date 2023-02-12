import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const ColorModeContext = createContext()

export const useColorMode = () => useContext(ColorModeContext)

export const ColorModeProvider = ({ children }) => {
  const colorModeRef = useRef(null)

  const ColorModeToggle = () => {
    const [active, setActive] = useState(JSON.parse(localStorage.getItem("darkMode")))

    function handleClick () {
      colorModeRef.current.classList.toggle('dark')  
      const darkMode = colorModeRef.current.classList.contains('dark')
      localStorage.setItem("darkMode", JSON.stringify(darkMode))

      setActive(darkMode)
    }

    return (
      <>
        {
          active ?
          <WbSunnyIcon onClick={handleClick} /> :
          <DarkModeOutlinedIcon onClick={handleClick} />
        }
      </>
    )
  }

  useEffect(() => {
    if (colorModeRef?.current) {
      const darkMode = JSON.parse(localStorage.getItem("darkMode"))
      if (darkMode) colorModeRef.current.classList.add("dark")
    }
  }, [colorModeRef])
  
  const value = { colorModeRef, ColorModeToggle }
  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  )
}