'use client'
import Link from 'next/link'
import {useState} from 'react'
import { BiSolidCategory } from 'react-icons/bi'
import img from '@/public/images/layouts/select-img.png';
import FnOnChangeImage from '../../ads/FnOnChangeImage'
import Image from 'next/image';


const AddCatogory = () => {
  const [image, setImage] = useState(img);
  return (
    <div className='w-full max-w-[1200px] flex flex-col m-auto p-5'>
      <h1 className='capitalize text-lg font-bold flex gap-2 my-10'><BiSolidCategory size={30} />Add New Category</h1>
      <form className='flex flex-col w-full m-auto justify-between gap-4'>
        <div className='flex w-full flex-wrap gap-5'>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor='category-name' className='py-2'>Category Name</label>
            <input type="text" placeholder='Enter Category Name' name="category-name" className='p-2 border rounded' />
          </div>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor='category-slug' className='py-2 '>Category Slug</label>
            <input type="text" placeholder='Enter Category slug' name="category-slug" className='p-2 border rounded' />
          </div>
        </div>

        <label htmlFor='category-slug' className='py-2 '>Category Description</label>
        <textarea placeholder='Enter Category Description' name="category-description " className='p-2 border rounded' rows={6} />
        <div className='flex w-full flex-wrap gap-6'>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor='category-status' className='py-2'>Category Status</label>
            <select className='p-2 border rounded' name="category-status">
              <option>Active</option>
              <option>In-Active</option>
            </select>
          </div>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor='category-readers' className='py-2 '>Category Readers</label>
            <input type="number" placeholder='Enter Category Readers' name="category-readers" className='p-2 border rounded ' />
          </div>
        </div>
        <div className='flex w-full flex-wrap gap-5'>
          <div className='flex flex-col w-[48%] justify-end'>
            <label htmlFor='category-image' className='py-2 '>Category Featured Image</label>
            <input type="file" placeholder='Upload' name="category-image " className='py-2 w-min border' accept="image/*" onChange={(e) => FnOnChangeImage(e, setImage)} />
            <div className='my-5'>
              <button className='  bg-blue-600 text-white mx-1 px-3 py-2 rounded' data-bs-toggle="tooltip" data-bs-placement="top" title="Save"> Save </button>
              {/* <button className='  bg-red-600 text-white mx-1 px-3 py-2 rounded' data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">Delete</button> */}
              {/* <button className='  bg-purple-600 mx-1 px-3 py-2 rounded text-white' data-bs-toggle="tooltip" data-bs-placement="top" title="Update"> Update</button> */}
              <Link href={"/"}><button className='  bg-yellow-500 mx-1 px-3 py-2 text-white rounded' data-bs-toggle="tooltip" data-bs-placement="top" title="Close">Close</button></Link>
            </div>

          </div>
          <div className='flex flex-col w-[48%] border rounded h-52 relative'>
          <Image src={image} fill={true} alt="banner-img" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddCatogory