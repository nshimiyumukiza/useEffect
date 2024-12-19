import React, { useEffect } from 'react'
import { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const URL ="https://jsonplaceholder.typicode.com/posts"
const Todos = () => {
    const [post,setPost] =useState([])
    const[isalaoading,setIsLoading] =useState(false)
    const posts = async()=> {
        const responsive = await fetch(URL) ;
        const data = await responsive.json() ;
        setPost(data)
    }
useEffect(()=>{
    posts()
},[])
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-black text-white ">
{post.map((pos,index) =>(
    <div key={index} className='border rounded-lg p-2'>
        <p className='text-2xl font-bold text-green-500'>{pos && pos.title}</p>
        <p>{pos && pos.body}</p>
        </div>
))}
    </div>
  )
}

export default Todos
