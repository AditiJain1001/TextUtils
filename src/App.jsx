// TODO: Make only the text the user types in (use text var or preview area) to print.
// TODO: Make the Alert compoent static/ absolute so itsn;t intrusive on the DOM
// !Importatnt Start at video #19 - CWH

import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0)
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#004D40"
      document.body.style.color = "#f8f9fa"
      showAlert("Dark Mode has been enabled", "success")

    } else {
      setMode("light")
      document.body.style.backgroundColor = "#ffffff"
      document.body.style.color = "black"
      showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <>
      {/* <Navbar title="Text Utilities" link1="Home" link2="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alertText={alert}></Alert>
      <About></About>
      <div className="container my-3">
        <TextForm heading="My Text Box" subHeading="Enter text to analyse" showAlert={showAlert} />
      </div> */}
      

      <Router>
      <Navbar title="Text Utilities" link1="Home" link2="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alertText={alert}></Alert>
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="My Text Box" subHeading="Enter text to analyse" showAlert={showAlert} />} />
        </Routes>
      </div>
   </Router>
    </>
  )
}

export default App
