import Avatar from './Avatar'
import Menu from './Menu'
import SearchBar from './SearchBar'
// import MoblieMenu from './MoblieMenu'




const Header = () => {
  
  return (
    
    <div id="header" className="font-Proxima-cond fixed !h-[70px] text-white flex flex-row top-0 px-[10vw] bg-black py-5 items-center text-center z-10  w-full">
    <Avatar/>
    <Menu/>
    <SearchBar/>
    {/* <MoblieMenu/> */}
    </div>

  )
}
export default Header