import React from 'react'
import {Link, Outlet } from 'react-router'
import Head from './Head'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
  <Head />
    <Outlet />
   <Footer />
   
    </>
  )
}

export default Layout
