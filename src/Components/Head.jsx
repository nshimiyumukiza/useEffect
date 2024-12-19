import React from 'react'

import { Link } from 'react-router'
const Head = () => {
  return (
    <div>
        <div className='flex justify-between p-4'>
      <h1>
       <Link to="/"> Coding school</Link>
        </h1>
      <div className='flex space-x-3'>
        <Link to="/">Home</Link >
        <Link to="/projects">Projects</Link >
        <Link to="/contact">Contact</Link >
        <Link to ="/landing">landing</Link>
        <Link to ="/todo">todos</Link>
        <Link to ="/register">register</Link>
      </div>
    </div>
    </div>
  )
}

export default Head
