import React from 'react'
import Card2 from './Card2'
import {BsArrowRightCircle} from 'react-icons/bs'
import Link from 'next/link'


const Section2 = () => {
  return (
    <div className='section'>
    <h1>Latest Articles</h1> 
        <div className='heading-section'>lorem ipsum
        <Link href="/articles">
          <span className='border-span'>View ALL<BsArrowRightCircle/>
        </span>
          </Link>
        </div>
        <hr/>
    <div className='first-section'>
        <div><Card2/><Card2/></div>
        <div><Card2/><Card2/></div>
    </div></div>
  )
}

export default Section2