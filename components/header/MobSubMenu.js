import { useState } from 'react'
import '../../app/home/mainPage.css'
import { AiOutlineLeft } from 'react-icons/ai'
import Link from 'next/link'

const MobSubMenu = ({ name, setMobSubMenu, setMobMenu }) => {
  const [subMenu, setSubMenu] = useState(false)
  const onClickHandle = () => {
    setSubMenu(true)
    setMobSubMenu(false)
  }
  // console.log(name)
  return (
    <div className={subMenu ? "close-menu2" : "mobile-menu2"}>
      <div className='flex w-ful justify-between m-[20px] items-center bg-orange-100 text-[20px] font-semibold p-5 pr-[33%] text-black '><AiOutlineLeft onClick={onClickHandle} />{name.category}</div>
      <div className='font-Proxima w-full md:w-[80%] flex text-left justify-between text-black text-[17px] font-bold pt-[30px] m-auto px-4'>
        <span>{name.category}</span><span>ALL</span>
      </div>
      <hr className='w-full md:w-[80%] mb-4 border-solid border-1 border-black mx-auto' />
      {/* Category sub-menu */}
      {name.category === "Categories" && <div className='font-Proxima w-full md:w-[80%] flex flex-col text-left justify-between text-black text-[17px]  m-auto px-5 py-2 gap-5' >
        <Link className="hover:text-[#f5086a]  text-[18px] font-extralight" href='/categories/css' onClick={() => setMobMenu(false)}>CSS</Link>
        <Link className="hover:text-[#f5086a]  text-[18px] font-extralight" href='/categories/pms' onClick={() => setMobMenu(false)}>PMS</Link>
        <Link className="hover:text-[#f5086a]  text-[18px] font-extralight" href='/categories/featured' onClick={() => setMobMenu(false)}>Featured</Link>
        <Link className="hover:text-[#f5086a]  text-[18px] font-extralight" href='/categories/currentaffairs' onClick={() => setMobMenu(false)}>Current Affairs</Link>
        <Link className="hover:text-[#f5086a]  text-[18px] font-extralight" href='/categories' onClick={() => setMobMenu(false)}>Other Pages</Link>
        <Link className="hover:text-[#f5086a]  text-[18px] font-extralight" href='/categories' onClick={() => setMobMenu(false)}>Other Pages</Link>
      </div>}
      {/* Articles sub-menu */}
      {name.category === "Articles" && <div className='font-Proxima w-full md:w-[80%] flex flex-col text-left justify-between text-black text-[17px]  m-auto px-5 py-2 gap-5' >
        <Link className="hover:text-[#f5086a] text-[18px] font-extralight" href='/articles' onClick={() => setMobMenu(false)}>Latest Articles</Link>
        <Link className="hover:text-[#f5086a] text-[18px] font-extralight" href='/courses' onClick={() => setMobMenu(false)}>All Courses</Link>
        <Link className="hover:text-[#f5086a] text-[18px] font-extralight" href="/events" onClick={() => setMobMenu(false)}>All Events</Link>
        <Link className="hover:text-[#f5086a] text-[18px] font-extralight" href="/authors" onClick={() => setMobMenu(false)}>All Authors</Link>
        <Link className="hover:text-[#f5086a] text-[18px] font-extralight" href='/aspirant' onClick={() => setMobMenu(false)}>Aspirants Contributions</Link>
        <Link className="hover:text-[#f5086a] text-[18px] font-extralight" href='/contact' onClick={() => setMobMenu(false)}>Contact Us</Link>
        <Link className="hover:text-[#f5086a] text-[18px] font-extralight" href='/aboutus' onClick={() => setMobMenu(false)}>About Us</Link>
      </div>}
    </div>




  )
}

export default MobSubMenu