import Intro from "./components/intro/intro";
import About from "./components/about/about"

import React, { useContext } from 'react'
import Productlist from "./components/productlist/Productlist"
import Contact from "./components/contact/contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  // const [dark,setDark]=useState(false)
  const theme =useContext(ThemeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div style={{
     
     color: darkMode && "white",
     backgroundColor: darkMode ? "#222" : "white",
     }}> 
      <Toggle />
      <Intro />
      <About />
      <Productlist />
      <Contact/>
    </div>
  )
}

export default App