import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Coin from './Pages/Coin/Coin'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coin/:coinId' element={<Coin/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
