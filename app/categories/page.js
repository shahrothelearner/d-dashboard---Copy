import React from 'react'
import Card from '@/components/pages/Card'
import courses from '../courses/coursesArr'


const page = () => {
  return (
    <div className='w-full mt-[70px] bg-[#f7f7f7] mx-auto'>
      <div className='max-w-[1100px] w-full m-auto'>
        <h1 className='font-Proxima-cond text-[70px] py-[30px] font-bold text-center' >Categories</h1>
        <div className='flex flex-row flex-wrap gap-4'>
        {courses.map(element=>{
          return(
            <div key={element.id}><Card  element={element} link={"/categories/"}/></div>
          )})}
        </div>
      </div>
    </div>
  )
}

export default page