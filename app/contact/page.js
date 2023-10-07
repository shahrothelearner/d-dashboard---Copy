import Image from 'next/image';
import React from 'react'
import img from '@/public/contact-us.png'

const page = () => {
  return (
    <div className='max-w-[1100px]  w-full m-auto p-0 '>
      <div className='flex items-center w-[90%] h-[400px] flex-row mx-auto pt-32'>
        <div className='w-[60%] px-[40px]'>
          <h1 className='text-5xl font-bold pb-2'>Contact Us</h1>
          <p className='text-lg '>if you have any idea to share or question to ask, CPF support is always ready to assist you via email support.</p>
        </div>
        <div className='w-[30%] relative '>
          <Image src={img} width="auto" height="auto" alt='cpf contact us'/></div>
      </div>
      <div className='w-[60%] mx-auto flex flex-col my-8  '>
        <form className='flex flex-col gap-y-4 text-lg p-10 rounded-xl'>
          <label for="contact">Select A Reason To Contact</label>
          <select name='contact' className='w-full p-2 border-black border border-black/10'>
            <option>--Select--</option>
            <option>Have a study-related question</option>
            <option>Facing a technical issue</option>
            <option>Want to work with CPF</option>
            <option>Want to buy a subscription plan</option>
            <option>Want to upgrade a subscription plan</option>
            <option>Can help CPF grow</option>
            <option>Want to Advertise on CPF</option>
            <option>Want a CPF author profile</option>
            <option>Want to display my teaching profile</option>
            <option>I can create MCQs or One-Liners</option>
            <option>I can explain MCQs or One-Liners</option>
            <option>Why is my account suspended?</option>
            <option>Why is my account deletd?</option>
          </select>
          <label for="name">Complete Name<span className='text-red-500'>*</span></label>
          <input type="text" name='name' placeholder='Type your complete name here' className='w-full p-2 bg-white border border-black/10 ' />
          <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col w-[48%]'><label for="email">Email<span className='text-red-500'>*</span></label>
              <input type="email" name='email' placeholder='Write Your Email' className='w-full p-2 bg-white border border-black/10 ' /></div>
            <div className='flex flex-col w-[48%]'>
              <label for="number">Contact Number<span className='text-red-500'>*</span></label>
              <input type="text" name='number' placeholder='Your Contact Number' className='w-full p-2 border border-black/10' /></div>
          </div>
          <label for="textarea">Message<span className='text-red-500'>*</span></label>
          <textarea name='textarea' placeholder='Write Your Message' className='w-full p-2 border border-black/10' rows="10" />
          <div>
            <input type="checkbox"  id="contact-form-checkbox" />   I agree to be contacted by CPF team on my email & phone number.
          </div>
          <input type='submit' name="submit" className="bg-black h-[50px] w-full text-white mt-10" value="Submit" />
        </form>
      </div>
    </div>
  )
}
export default page;