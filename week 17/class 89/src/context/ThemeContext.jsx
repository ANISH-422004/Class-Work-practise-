import { createContext, useState } from "react";


export const ThemeContext = createContext();


export const ThemeProvider = ({children})=>{
    const [isDark, setIsDark] = useState(false)

    const Toggletheme = ()=>{
        setIsDark(!isDark)
    }

    return (
    <ThemeContext.Provider value={{isDark , Toggletheme}}>
        {children}
    </ThemeContext.Provider>
    )
}