import { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import MobSubMenu from './MobSubMenu'
const MoblieMenu = ({ setMobMenu }) => {
  const [mobSubMenu, setMobSubMenu] = useState({ status: false, category: "" })
  const mobMenuClickHandle = (e) => {
    // console.log(e.target.getAttribute('name'))
    let name = e.target.getAttribute('name')
    // console.log(name)
    setMobSubMenu({ status: true, category: name })
  }
  return (
    <div>
      <div className='w-[100vw] h-[100vh] absolute top-[70px] overflow-auto left-0 shadow animate-[mobAnimation_0.3s_ease-in-out_forwards] flex flex-row'>
       {/* <div className='max-w-[950px] absolute left-[-475px] flex flex-row z-10 h-full'>  */}
        <div className='bg-[#fbf5ed] w-[475px]  py-8 px-0 m-0'>
          < div className='md:w-[80%] w-full m-auto'>
            <div className='flex text-center justify-center px-2 pb-3'>
              <input type='search' placeholder='Search....' size={30} />
              <span className='bg-[#02838d] items-center text-center p-1'>GO</span>

            </div>
            <hr className='my-4 border-solid border-1 border-black' />

            <p className='font-bold text-lg font-Proxima text-black flex justify-between px-[10%] hover:text-[#f5086a]' onClick={mobMenuClickHandle} name="Categories">Categories
              <i><AiOutlineRight name="Categories" /></i></p>

            <hr className='my-4 border-solid border-1 border-black' />

            <p className='font-bold text-lg font-Proxima text-black flex justify-between px-[10%] hover:text-[#f5086a]' onClick={mobMenuClickHandle} name="Articles">Articles
              <i ><AiOutlineRight name="Articles" /></i></p>

            <hr className='my-4 border-solid border-1 border-black' />
          </div>
        </div>
        {/* <div className='bg-[#fbf5ed] w-[475px]  py-8 px-0 m-0'>
          < div className='md:w-[80%] w-full m-auto'>
            <div className='flex text-center justify-center px-2 pb-3'>
              <input type='search' placeholder='Search....' size={30} />
              <span className='bg-[#02838d] items-center text-center p-1'>GO</span>

            </div>
            <hr className='my-4 border-solid border-1 border-black' />

            <p className='font-bold text-lg font-Proxima text-black flex justify-between px-[10%] hover:text-[#f5086a]' onClick={mobMenuClickHandle} name="Categories">Categories
              <i><AiOutlineRight name="Categories" /></i></p>

            <hr className='my-4 border-solid border-1 border-black' />

            <p className='font-bold text-lg font-Proxima text-black flex justify-between px-[10%] hover:text-[#f5086a]' onClick={mobMenuClickHandle} name="Articles">Articles
              <i ><AiOutlineRight name="Articles" /></i></p>

            <hr className='my-4 border-solid border-1 border-black' />
          </div>
        </div>
      </div> */}
        <div className='bg-black opacity-80 w-full hidden sm:block' onClick={() => setMobMenu(false)}></div>
      </div>
      {/* <MobSubMenu/>  */}
      {mobSubMenu.status && <MobSubMenu name={mobSubMenu} setMobSubMenu={setMobSubMenu} setMobMenu={setMobMenu}/>}

    </div>
  )
}

export default MoblieMenu