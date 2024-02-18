import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import axios  from 'axios'
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost/>
    </div>
  )
}

export default App