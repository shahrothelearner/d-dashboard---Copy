import {BsArrowRightCircle} from 'react-icons/bs'
import Link from 'next/link'


const Articles = () => {
  return (
    <div className='absolute bg-[#fbf5ed] w-[100vw] h-[470px] text-black p-5 left-0 animate-[menuAnimation_0.3s_ease-in-out_forwards]' id="Articles">
    <div  className='w-[80vw] text-left flex flex-row text-black text-[16px] justify-between my-[10px] mx-[8rem] leading-[3rem]'>
    <span onClick={()=>(document.getElementById("Articles").style.display="none")} className= "absolute top-0 right-[10%] text-[20px] cursor-pointer">X</span>
            <div className='w-[25%]'>
              <h3 className='flex text-[18px] justify-between'>Featured
               <span style={{display:"flex", alignItems:"center"}}>ALL<BsArrowRightCircle/>
               </span>
              </h3>
            <hr className='h-[3px] text-black bg-black'/>
            <ul className=' animate-[searchAnimation_0.5s_ease-in-out_forwards]'>
                <li className='list-items'><Link  className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight"  href='/articles'>Latest Articles</Link> </li>
                <li className='list-items'><Link  className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight"  href='/courses'>All Courses</Link> </li>
                <li className='list-items'><Link  className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight"  href="/events">All Events</Link> </li>
                <li className='list-items'><Link   className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" href="/authors">All Authors</Link> </li>
                <li className='list-items'><Link   className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" href='/aspirant'>Aspirants Contributions</Link> </li>
                <li className='list-items'><Link   className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" href='/contact'>Contact Us</Link> </li>
                <li className='list-items'><Link   className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" href='/aboutus'>About Us</Link> </li>
            </ul>
            </div>
            </div></div>
  )
}
export default Articles;