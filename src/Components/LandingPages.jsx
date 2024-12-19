import React from 'react'
import student from '../images/frend.png'
import wotching from '../images/wotching.png'
import frend from '../images/frend.png'
import imgs from '../images.json'
const LandingPages = () => {
    console.log(imgs)
  return (
    <div>
     <img src={student} alt="student" />
     <img src={wotching} alt="wotch" />
     <img src={frend} alt="frend" />
     <img src="/images/student.png" alt="frend" />
     <div className='grid grid-cols-2'>
        {imgs.map(image =>(
            <img onClick={()=>alert("erneste")} src={image.src}alt={image.alt}/>
        ))}
     </div>
    </div>
  )
}

export default LandingPages
