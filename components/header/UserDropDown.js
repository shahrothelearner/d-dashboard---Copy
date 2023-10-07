import Link from "next/link"
import avatar1 from "@/public/images/avatar/avatar-1.jpg"
import Image from "next/image"
import { AiFillHome} from 'react-icons/ai'
import { FaRegCreditCard} from 'react-icons/fa'

const UserDropDown = () => {
  return (
    <div className="rounded-xl border bg-white flex flex-col text-black/80 p-5 font-medium gap-3 text-sm text-left">
        <div className="flex gap-3 items-center pb-5 border-b">
        <Image src={avatar1} width={60} height={60} alt="avatar"  className="rounded-[50%]"/>
        <div>
            <h2 className="text-[16px] font-bold mb-0">User Name</h2>
            <p className="text-black/50 text-xs">user@example.com</p>
        </div>
        </div>
    <Link href={"/admin-panel"} className=" cursor-pointer font-semibold text-black/50 flex gap-1 items-center" ><FaRegCreditCard/> Dashboard</Link>
    <Link href={"/"} className=" cursor-pointer font-semibold text-black/50 flex gap-1 items-center" ><AiFillHome/>Home</Link>
    <button className="cursor-pointer rounded bg-red-600 text-center shadow text-white py-1">Sing Out</button>    
    </div>
  )
}

export default UserDropDown