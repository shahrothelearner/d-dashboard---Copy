import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const section04 = () => {
    return (
        <div>
            <div className="w-full h-24 bg-black text-white justify-center items-center flex">
                <span className='text-[40px] font-semibold pr-7.5'>Connect With Us</span>
                <i className='gap-[25px] flex text-white cursor-pointer'><FaFacebookF size={36}/>
                    <FaLinkedinIn size={36}/>
                    <FaTwitter size={36}/>
                    <FaInstagram size={36}/>
                    <FaYoutube size={36}/>
                </i>
            </div>
            <div className='max-w-[1100px] w-[90%] m-auto flex justify-between text-center'>
                <div className="my-5 mx-auto leading-9 w-[20%] text-left flex flex-col">
                    <h3 className='text-[20px] font-semibold'>About CPF</h3>
                    <a className='text-black'>About Us</a>
                    <a className='text-black'>Why CPF?</a>
                    <a className='text-black'>CPF Pocket?</a>
                    <a className='text-black'>Privacy Policy</a>
                    <a className='text-black'>Terms & Conditions</a>
                    <a className='text-black'>CPF Rules</a>
                    <a className='text-black'>Who is Sir Kazim?</a>
                    <a className='text-black'>Discover</a>
                    <a className='text-black'>CPF Help Center</a>
                    <a className='text-black'>Contact Us</a>
                </div>
                <div className="my-5 mx-auto leading-9 w-[20%] text-left flex flex-col">
                    <h3 className='text-[20px] font-semibold'>Categories</h3>
                    <a className='text-black'>CSS</a>
                    <a className='text-black'>PMS</a>
                    <a className='text-black'>Topics</a>
                    <a className='text-black'>Featured</a>
                    <a className='text-black'>CPF Magzine</a>
                    <a className='text-black'>CSS, PMS Vocabulary</a>
                    <a className='text-black'>CSS, PMS English Aid</a>
                    <a className='text-black'>One Liner MCQs</a>
                </div>
                <div className="my-5 mx-auto leading-9 w-[20%] text-left flex flex-col">
                    <h3 className='text-[20px] font-semibold'>CSS, PMS Feed</h3>
                    <a className='text-black'>CSS MCQs Feed</a>
                    <a className='text-black'>CSS Screening MCQs</a>
                    <a className='text-black'>CSS Past Papers</a>
                    <a className='text-black'>MCQs</a>
                    <a className='text-black'>CSS, PMS Vocabulary</a>
                    <a className='text-black'>CSS, PMS Grammar</a>
                    <a className='text-black'>Aid</a>
                    <a className='text-black'>PMS Punjab</a>
                    <a className='text-black'>Screening</a>
                    <a className='text-black'>PMS Sindh Screening</a>
                    <a className='text-black'>PMS KPK Screening</a>
                    <a className='text-black'>Armed Forces Prep</a>
                </div>
                <div className="my-5 mx-auto leading-9 w-[20%] text-left flex flex-col">
                    <h3 className='text-[20px] font-semibold'>CPF Exclusives</h3>
                    <a className='text-black'>All Courses</a>
                    <a className='text-black'>All Authors</a>
                    <a className='text-black'>All Teachers</a>
                    <a className='text-black'>Events & Orienttaions</a>
                    <a className='text-black'>Testimonials</a>
                    <a className='text-black'>Become an Author</a>
                    <a className='text-black'>Write to Earn</a>
                    <a className='text-black'>Work With Us</a>
                </div>
            </div>
        </div>
    )
}

export default section04