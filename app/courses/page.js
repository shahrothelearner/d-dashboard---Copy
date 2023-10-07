import Card from '@/components/pages/Card'
import courses from './coursesArr'

const page = () => {
  return (
    <div className='w-full mt-[70px] bg-[#f7f7f7] mx-auto'>
      <div className='w-[80%] m-auto '>
        <h1 className='font-Proxima-cond text-[70px] py-[50px] font-bold text-center'>All Courses</h1>
        <div className='flex flex-row flex-wrap gap-4 '>
          {courses.map(element => {
            return (
              <div key={element.id}><Card  element={element} link={"/courses/"}/></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default page
