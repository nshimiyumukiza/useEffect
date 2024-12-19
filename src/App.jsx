import { BrowserRouter,Routes,Route } from 'react-router'
import React from 'react'
import Home from './Papes/Home'
import Projects from './Papes/Projects'
import Contact from './Papes/Contact'
import Layout from './Components/Layout'
import Head2 from './Components/Head2'
import LandingPages from './Components/LandingPages'
import Todos from './Components/Todos'
import Register from './Papes/Register'

const App = () => {
  return (
    <>
     <BrowserRouter >
     <Routes >
      <Route element={<Layout />}>
      <Route path='/'element={<Home />}/>
      <Route path='/contact'element ={<Contact />} />
      <Route path='/projects'element={<Projects />}/>
      <Route path='/contact'element ={<Head2 />}/>
      <Route path='/landing'element ={<LandingPages />}/>
      <Route path='todo'element={<Todos />}/>
      <Route path='/register'element ={<Register />}/>
      </Route>
     </Routes >
     </BrowserRouter>
    </>
  )
}

export default App

