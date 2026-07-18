import React from 'react'
import Navber from './components/Navber'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'

const App = () => {
  return (
    <>
    <Navber/>

    <Routes>
      <Route path='/'  element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App