'use client'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Categories from './Categories';
import Articles from './Articles';

const Menu = () => {


  return (
    <div>
      <ul className='hidden lg:flex flex-row list-none text-lg font-bold text-center items-center h-[70px] '>
        <li className="group text-center items-center cursor-pointer flex py-[25px] pl-[25px] flex-row hover:text-orange-400" >
          Categories<RiArrowDropDownLine className='items-center text-center' size={22} />
          <ul>
            <li className='group-hover:block absolute hidden left-0 top-[70px] '><Categories /></li>
          </ul>
        </li>
        <li className="group text-center items-center cursor-pointer flex flex-row py-[25px] pl-[25px] hover:text-orange-400">
          Articles<RiArrowDropDownLine className='items-center text-center' size={22} />
          <ul>
            <li className='group-hover:block absolute hidden left-0 top-[70px] '><Articles /></li>
          </ul>
        </li>
        <li className="text-center pl-[25px] items-center cursor-pointer flex flex-row hover:text-orange-400">
          My Bookmarks </li>

      </ul>
    </div>
  )
}

export default Menu