import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center'>
      <div className='bg-slate-500 flex justify-center pt-8 w-[300px]'>
        <h1 className='text-3xl text-green-500 pt-4 pb-12'>contact to me</h1>
        <div className='flex flex-col w-[300px] h-[400px] '>
          <form>
         <input className='border outline-none' type="text"placeholder='enter name' /><br/>
            <textarea className='border outline-none' name="" id=""placeholder='type yor message'>type message</textarea><br/>
          </form>
          <button className='p-2 bg-green-900 text-white'>submit</button>
        </div>
      </div>
 
    </div>
  )
}

export default Contact
