import React, { useEffect, useState } from 'react'
const URL ="https://restcountries.com/v3.1/all"
const Register = () => {
    const [country,setCountry] =useState([])
    const coutries =async () => {
const responsive =await fetch(URL);
const data = await responsive.json();
setCountry(data)
    }
   useEffect(()=>{
    coutries()
   },[])
  return (
   <form>
    <select name="" id="" onChange={e=> setCountry(e.target.value)}>{
        country.map((countr,index)=>(
            <option key={index}>{countr.name.common}</option>
        ))}</select>
      
   </form>
  )
}

export default Register
