import React from 'react'
import './Herosection.css'
import Divyeshresume from '../assets/Divyesh-Resume.pdf'
const Herosection = () => {
    // const saveFile = () => {
    //     fileSaver.saveAs(
    //       process.env.REACT_APP_CLIENT_URL + "/resources/cv.pdf",
    //       "MyCV.pdf"
    //     );
    //     };
  return (
 <div>
    <div className='hero-sect' id='home'>
    <div className='container'>
  
        <div className="heading">
          <span style={{fontFamily:"sans-serif",}}>Hi,My Nmae is</span>
           <h1 className='first-h'> Divyesh Borse </h1>
           <h1 className='second-h'>I'm Frontend Developer</h1>
        </div>

        <div>
            <button className='resume-btn'><a href={Divyeshresume} download="Divyeshresume">My Resume</a></button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Herosection
