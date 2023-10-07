'use client'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/logo-removebg.png'
import { BiMenu } from 'react-icons/bi'
import MoblieMenu from './MoblieMenu'
import { BsSearch } from 'react-icons/bs'



const Avatar = () => {
  const [mobMenu, setMobMenu] = useState(false)

  const clickHandle = (e) => {
    e.preventDefault()
    if (mobMenu) { setMobMenu(false) }
    else { setMobMenu(true) }
  }
  return (
  <>
    <div className='lg:hidden block text-white' onClick={clickHandle}>
      <span className='flex items-center gap-2.5'><BiMenu size={34} /><BsSearch size={18} /></span>
    </div>
    <div className='cursor-pointer' >
      <a href='/'><Image src={Logo} className='w-[100px] h-[100px]' width='auto' height='auto' alt="Logo" /></a>
    </div>
    {mobMenu && <MoblieMenu setMobMenu={setMobMenu}/>}
  </>
  )
}

export default Avatar