import UserData from '@/data/dashboard/UserData';
import { FaUserAlt } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsLayerBackward } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';


const ViewUserPage = ({ params }) => {

    const data = UserData.filter(element => element._id == params.id);
    
    return (

        <div className="max-w-[1200px] w-full mx-auto my-10 min-h-screen h-full">
            <div className='w-full m-10'>
                <div className='flex mt-5 items-end gap-2 my-5'>
                    <FaUserAlt size={30} />
                    <h4 className='font-bold items-end flex text-lg'>Viewing User</h4>
                    <Link href={"/admin-panel/users/update/"+data[0]._id}>  <button className='flex bg-blue-600 shadow rounded items-center text-white text-sm font-normal border px-3 gap-2 py-2 h-8'><CiEdit /><p>Edit</p></button></Link>
                    <button className='flex bg-red-600 shadow rounded items-center text-white text-sm font-normal border px-3 gap-2 py-2 h-8' ><RiDeleteBin6Line /><p>Delete</p></button>
                    <Link href={"/admin-panel/users"}> <button className='flex bg-yellow-500 shadow items-center rounded text-white text-sm font-normal border px-3 gap-2 py-2 h-8'><BsLayerBackward /><p>Back to List</p></button></Link>
                </div>
                <div className='h-full w-full mb-10'>
                    {data.map((e) => {
                        const keysRaw = Object.keys(e)
                        const keys = keysRaw.filter(check => check !== '_id' && check !== 'password' && check !== 'confirmPass')
                        return (
                            <>
                                {keys.map(key => {
                                    return (
                                        <div key={key} className='bg-white shadow border rounded p-4'>
                                            <h4 className='capitalize text-lg font-bold'>{key}</h4>
                                            {key === 'image' ? <div className='relative'><Image src={e[key]} width={50} height={50} alt={e.name} /></div> : <p>{e[key]}</p>}
                                        </div>
                                    )
                                })

                                }</>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default ViewUserPage