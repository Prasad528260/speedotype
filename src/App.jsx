import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'

function App() {
    let[darkmode,setDarkMode]=useState(localStorage.getItem("darkmode")==="true")
    let[best,setBest]=useState(localStorage.getItem("best")|| 0);
    useEffect(()=>{
      localStorage.setItem("best",best)
    },[best])

    function changeTheme()
    {
      localStorage.setItem("darkmode",!darkmode)
      setDarkMode(
        (prev)=>!prev
      )
    }

  return (
    <>
      <Navbar dabba={darkmode} changeTheme={changeTheme} best={best}/>
      <Body darkmode={darkmode} setBest={setBest} best={best} />
    </>
  )
}

export default App
