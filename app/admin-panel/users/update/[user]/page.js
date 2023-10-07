'use client'
import {useState} from 'react'
import { FaUserEdit } from 'react-icons/fa'
import CountriesList from '../../addnew-user/CountriesList'
import Image from 'next/image'
import UserData from '@/data/dashboard/UserData'
import FnOnChangeImage from '../../../ads/FnOnChangeImage'



const UserEditPage = ({params}) => {
    const [image, setImage] = useState();
    const data = UserData.find(check => check._id ==  params.user)

    return (
        <div className="w-full mx-auto my-5" style={{ maxWidth: "1200px" }}>
            <div className='m-3'>
                <div className='flex gap-3 my-6'>
                    <FaUserEdit size={30} />
                    <h2 className='text-lg font-bold mb-4'>Edit User</h2>
                </div>
                <form className='bg-white shadow p-5 rounded border text-black/50 w-full'>
                    <div className='flex w-full gap-5 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='uname'>Name</label> 
                            <input type='text' id='uname' className='border p-2 text-6 rounded ' placeholder='Name'  defaultValue={data.name}/>
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='uemail'>Email</label>
                            <input type='email' id='uemail' className='border p-2 text-6 rounded' placeholder='Email' defaultValue={data.email}/>
                        </div>
                    </div>
                    <div className='flex w-full gap-5 my-3 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='username'>UserName</label>
                            <input type='text' id='username' className='border p-2 text-6 rounded' placeholder='UserName'defaultValue={data.username}/>
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='umobile'>Mobile</label>
                            <input type='number' id='umobile' className='border p-2 text-6 rounded' placeholder='Mobile' defaultValue={data.mob}/>
                        </div>
                    </div>
                    <div className='flex w-full gap-5 my-3 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='upassword'>Password</label>
                            <input type='password' id='upassword' className='border p-2 text-6 rounded' placeholder='Password' defaultValue={data.password} />
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='uconfirmpass'>Confirm Password</label>
                            <input type='password' id='uconfirmpass' className='border p-2 text-6 rounded' placeholder='Confirm Password' defaultValue={data.confirmPass} />
                        </div>
                    </div>
                    <div className='flex w-full gap-5 my-3 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='ugender'>Gender</label>
                            <select id='ugender' className='border p-2 text-6 text-black-50 rounded' defaultValue={data.gender}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>

                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='ucountry'>Country</label>
                            <select id='ucountry' className='border p-2 text-6 text-black-50 rounded' defaultValue={data.country}>
                                {CountriesList.map((e, i) =>
                                    <option className='text-' key={i}>{e.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className='flex w-full gap-5 my-3 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='urole'>Role</label>
                            <select id='urole' className='border p-2 text-6 text-black-50 rounded' vale={data.role}>
                                <option>Admin</option>
                                <option>Author</option>
                                <option>Contributor</option>
                                <option>Normal User</option>
                            </select>

                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='ustatus'>Status</label>
                            <select id='ustatus' className='border p-2 text-6 text-black-50 rounded' defaultValue={data.status}>
                                <option>Active</option>
                                <option>In-Active</option>
                            </select>

                        </div>
                    </div>
                    <div className='flex w-full gap-5 my-3 flex-wrap flex-sm-nowrap justify-between'>
                        <div className='flex flex-col relative'>
                            <button type='submit' id="submit" className='bg-blue-600 absolute shadow px-4 py-2 text-white rounded bottom-0 left-0'>Save</button>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                            <label htmlFor='ustatus'>Avatar</label>
                                <div className='border relative' style={{width:"100px", height:"100px"}}>
                                    <Image src={image? image: data.image} fill={true} alt="avatar" className='position-absolute'/>
                                </div>
                                <input type="file" id="avatar" name="avatar" accept="image/*" onChange={e=> FnOnChangeImage(e, setImage)} />
                            </div>

                        </div>
                    </div>


                </form>
            </div>

        </div>
    )
}

export default UserEditPage