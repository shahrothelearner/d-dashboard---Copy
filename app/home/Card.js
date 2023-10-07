import React from 'react'
import Image from 'next/image'
import CardImg from '@/public/card.jpg'
import './mainPage.css'

const Card = (props) => {

  return (
    <div className='container'>

      <div className='card'>
        <Image src={props.img} fill={true} sizes="(width:auto)" alt="category"/>
      </div>
      <div className='title-des'><h1>{props._id}{props.title}</h1>
      </div>
    </div>
  )
}

export default Card