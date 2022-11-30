import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Profil from './Pages/Profil'
import Category from './Pages/Category'
import Plants from './Pages/Plants'
import Animals from './Pages/Animals'
import Natures from './Pages/Natures'

function App() {
  return (
    <BrowserRouter>
    <header>
        <p align="center" id="titleGroup">WELCOME TO DIGITAL GALLERY ART </p>
      </header>
      <Routes>
        <Route path="/photos/natures" element={<Natures />} />
        <Route path="/photos/plants" element={<Plants />} />
        <Route path="/photos/animals" element={<Animals />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
      <footer>
        <NavLink to="/detail" className="iconWrapper">
          {/* <MdGroup className="icon" /> */}
          Detail
        </NavLink>
        <NavLink to="/home" className="iconWrapper">
          {/* <HiHome className="icon" /> */}
          Home
        </NavLink>
        <NavLink to="/profil" className="iconWrapper">
          {/* <MdGroup className="icon" /> */}
          Profil
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App;
