import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from './components/About';
import Contact from './components/Contact';
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
