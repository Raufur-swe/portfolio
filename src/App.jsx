import React from 'react'
import Navber from './components/Navber'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import ContactPage from './page/ContactPage'
import AboutMePage from './page/AboutMePage'
import CursorFollower from './components/CursorFollower'

const App = () => {
  return (
    <>
    <CursorFollower/>
    <Navber/>

    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/contact'  element={<ContactPage/>}/>
      <Route path='/about'  element={<AboutMePage/>}/>
    </Routes>
    </>
  )
}

export default App