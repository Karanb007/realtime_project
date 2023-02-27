import React from 'react'

//---------components-------------
import Navbar from '../navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
    <Navbar/>
   {children}
    </div>
  )
}

export default Layout