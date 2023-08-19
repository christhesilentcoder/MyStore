import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sale from '../components/Sale'


const MainLayout = () => {
  return (
    <div>
      <Sale/>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

export default MainLayout