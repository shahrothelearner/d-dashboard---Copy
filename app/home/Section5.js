import React from 'react'
import Image from 'next/image'
import Img from '@/public/scientist-microscop.webp'

const Section5 = () => {
  return (
    <div className='section-05'>
      <div className='section5-flex'>
        <div className="section5-1st-block">
          <div><h2>Science and integrity matter to us<br /></h2></div>
          <br />At Healthline, we set high standards of quality, research, and transparency for what we share,
          ensuring you have access to nothing but the best. Here's how:<br /><br />
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>To ensure accuracy, each of our 20,000+ articles is reviewed by a medical subject matter expert such as a doctor,
              nurse, or therapist.<br /><br /></li>
            <li>Our recommendations are current and based on research thanks to our diligent health and medical monitoring standards.<br /><br /></li>
            <li>Featured brands are reviewed for medical credibility, business practices, and social impact.<br /><br /></li>
            <p style={{ fontWeight: "600" }}>READ ABOUT OUR PROCESS</p></ul></div>  
        <div className="section5-2nd-block">
          <Image className="section5-img" src={Img} alt="banner" style={{position:"absolute"}} fill={true} sizes='(width:auto)'/></div>
      </div>
      
    </div>
  )
}

export default Section5