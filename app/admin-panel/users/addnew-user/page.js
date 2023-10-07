'use client'
import {useState} from 'react'
import { FaUserEdit } from 'react-icons/fa'
import CountriesList from './CountriesList'
import Image from 'next/image'
import FnOnChangeImage from "../../ads/FnOnChangeImage"


const UserCreatePage = () => {
    const [image, setImage] = useState();

 
    return (
        <div className="ml-[50px] w-full mx-auto my-5" style={{ maxWidth: "1200px" }}>
            <div className='ml-3 mx-auto w-full'>
                <div className='flex gap-3 my-sm'>
                    <FaUserEdit size={30} />
                    <h3 className='text-lg font-bold'>Add User</h3>
                </div>
                <form className='bg-white shadow p-5 rounded border text-black-50'>
                    <div className='flex w-full gap-5 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='uname'>Name</label>
                            <input type='text' id='uname' className='border p-2 text-sm rounded ' placeholder='Name' />
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='uemail'>Email</label>
                            <input type='email' id='uemail' className='border p-2 text-sm rounded' placeholder='Email' />
                        </div>
                    </div>
                    <div className='flex w-full gap-5 my-3 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='username'>UserName</label>
                            <input type='text' id='username' className='border p-2 text-sm rounded' placeholder='UserName' />
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='umobile'>Mobile</label>
                            <input type='number' id='umobile' className='border p-2 text-sm rounded' placeholder='Mobile' />
                        </div>
                    </div>
                    <div className='flex w-full gap-5 my-3 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='upassword'>Password</label>
                            <input type='password' id='upassword' className='border p-2 text-sm rounded' placeholder='Password' />
                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='uconfirmpass'>Confirm Password</label>
                            <input type='password' id='uconfirmpass' className='border p-2 text-sm rounded' placeholder='Confirm Password' />
                        </div>
                    </div>
                    <div className='flex w-full gap-5 my-3 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='ugender'>Gender</label>
                            <select id='ugender' className='border p-2 text-sm text-black-50 rounded'>
                                <option>Male</option>
                                <option>Female</option>
                            </select>

                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='ucountry'>Country</label>
                            <select id='ucountry' className='border p-2 text-sm text-black-50 rounded'>
                                {CountriesList.map((e, i) =>
                                    <option className='text-' key={i}>{e.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className='flex w-full gap-5 my-3 flex-wrap flex-sm-nowrap'>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='urole'>Role</label>
                            <select id='urole' className='border p-2 text-sm text-black-50 rounded'>
                                <option>Admin</option>
                                <option>Author</option>
                                <option>Contributor</option>
                                <option>Normal User</option>
                            </select>

                        </div>
                        <div className='flex flex-col w-[48%]'>
                            <label htmlFor='ustatus'>Status</label>
                            <select id='ustatus' className='border p-2 text-sm text-black-50 rounded'>
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
                                    <Image src={image} fill={true} alt="avatar" className='absolute'/>
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

export default UserCreatePage