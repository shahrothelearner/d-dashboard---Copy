'use client'
import { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { BsJournalBookmark } from 'react-icons/bs'
import Modal from 'react-modal'
import LoginModal from '../logInPopUp/LoginModal'
import SignUp from '../logInPopUp/SignUp'
import UserDropDown from './UserDropDown'
import NoAvatar from '@/public/no-avatar.png'
import Image from 'next/image'



const SearchBar = () => {

  const [search, setSearch] = useState({ color: "white", display: "none" })
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [showDropDown, setShowDropDown] = useState(false)
  
  
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
    */
   function handleClickOutside(event) {
     if (!event.target.closest("#search-div")) {
       setSearch({ color: "white", display: "none" });
      }if (!event.target.closest("#user-dropdown")) {
        setShowDropDown(false);
       }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  


  const onClickHandle = () => {
    setSearch({ color: "black", display: "block" })
  }

  const modalOpenHandle = () => {
    setIsOpen(true);

  }
  const modalCloseHandle = () => {
    setIsOpen(false);

  }
  return (
    <>

      <div className='flex items-center text-center z-[1]'>
        <div className=' gap-2.5 flex absolute right-[12%] text-lg font-semibold cursor-pointer'>
          <span className='hover:text-orange-500'>Subscribe</span>
          <span  className='hover:text-orange-500 hidden lg:block' onClick={modalOpenHandle}>
            Sign In/Up
          </span>
          <span  className='lg:hidden hover:text-orange-500'>
            <BsJournalBookmark size={24} />
          </span>
          <span className="lg:hidden hover:text-orange-500">
            <FaUserCircle size={24} />
          </span>
        </div>
        <div id="search-div" className='hidden lg:flex bg-black absolute z-[1] top-[18px] right-[8%]'>
          <input id="search-input" className='block text-lg py-1 px-4 text-black translate-x-0 animate-[searchAnimation_1s_ease-in-out_forwards]' type='text' placeholder='Search...' size={32} style={{ display: search.display }} autoFocus />
          <i onClick={onClickHandle}>
            <BsSearch className="absolute right-[2%] mt-2 text-white cursor-pointer" size={18} style={{ color: search.color }} /></i>
        </div>
        {isLogin && <div id="user-dropdown" className="absolute right-[2%] overflow-hidden flex flex-col"><Image src={NoAvatar} width={50} height={50} className="rounded-[50%] cursor-pointer" onClick={()=>setShowDropDown(true)}/> 
        </div>}
        {console.log(showDropDown)}
       {showDropDown && <div  className='absolute right-[2%] top-[60px]'><UserDropDown/></div>}

        <Modal ariaHideApp={false}  isOpen={isOpen} onRequestClose={modalCloseHandle} className='absolute w-[700px] h-[600px] my-[30px] mx-auto left-0 right-0 border-solid rounded-lg shadow-sm z-50 bg-white font-Poppins'
         style={{
          overlay: {
            zIndex:100
          }
        }}
        >
          {/* <LoginModal/> */}
          <SignUp />
        </Modal>
      </div>
    </>
  )
}

export default SearchBar