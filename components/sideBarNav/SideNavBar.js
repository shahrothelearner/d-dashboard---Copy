'use client'
import React from 'react'
import { AiFillHome, AiFillSetting } from 'react-icons/ai'
import { SiBookstack } from 'react-icons/si'
import { FaUsers, FaAdversal } from 'react-icons/fa'
import { BiSolidCategory, BiSolidVideos } from 'react-icons/bi'
import { PiArticleNyTimesFill } from 'react-icons/pi'
import { BsFillCalendar2EventFill } from 'react-icons/bs'
import SideBarMenu from './SideBarMenu'


const SideNavBar = () => {
    return (
        <div>
            <div className='h-full fixed w-[50px] bg-black item-left flex flex-col text-white gap-3 z-[50000000] group'>
                <div className='group-hover:block hidden absolute left-[50px] z-[50000000]'><SideBarMenu /></div>
                <i className='px-3 py-2 cursor-pointer block'><AiFillHome size={20} /></i>
                <i className='px-3 py-2 cursor-pointer  block'><SiBookstack size={20} /></i>
                <i className='px-3 py-2 cursor-pointer  block'><FaUsers size={20} /></i>
                <i className='px-3 py-2 cursor-pointer  block'><BiSolidCategory size={20} /></i>
                <i className='px-3 py-2 cursor-pointer  block'><PiArticleNyTimesFill size={20} /></i>
                <i className='px-3 py-2 cursor-pointer  block'><BiSolidVideos size={20} /> </i>
                <i className='px-3 py-2 cursor-pointer  b'><FaAdversal size={20} /></i>
                <i className='px-3 py-2 cursor-pointer  block'><BsFillCalendar2EventFill size={20} /></i>
                <i className='px-3 py-2 cursor-pointer  block'><AiFillSetting size={20} /></i>
            </div>
        </div>
    )
}

export default SideNavBar