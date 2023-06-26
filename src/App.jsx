import { useContext } from "react"
import Navbar from "./components/navbar/Navbar"
import { ThemeContext } from "./Context/ThemeContext"
import Main from "./components/main/Main"

export default function App() {
  const { dark } = useContext(ThemeContext)

  return (
    <div className={`h-screen  ${dark ? "dark" : "light"}`} >
      <Navbar />
      <Main />

    </div >
  )
}