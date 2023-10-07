import Card from '@/components/pages/Card'
// import '../courses/courses.css'
import courses from '../courses/coursesArr'
const page = () => {
  return (
    <div className='w-full mt-[70px] bg-[#f7f7f7] mx-auto'>
      <div className='w-[80%] mx-auto '>
        <h1 className='font-Proxima-cond text-[70px] py-[50px] font-bold text-center'>All Authors</h1>
        <div className='flex flex-row flex-wrap gap-4'>
          {courses.map(element => {
            return (
              <div key={element.id}><Card element={element} link={"/authors/"} /></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default page
