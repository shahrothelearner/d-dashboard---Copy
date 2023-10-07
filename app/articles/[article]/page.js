import Image from 'next/image'
import React from 'react'
import img from '@/public/student.png'
import img2 from '@/public/teacher.png'




const page = () => {
  return (
    <div className='max-w-[1100px] w-[100%] overflow-x-hidden mx-auto'>
      <div className='pt-[140px] w-[90%] flex m-auto justify-between'> 
        <div className='w-[65%] text-[rgb(35,31,32)]'>
          <h1 className='text-[54px] font-bold font-Proxima-cond text-[rgb(35,31,32)] mb-6'>
            A Guide to Recognizing COVID-19 Symptoms in Kids
            </h1>
          <h3 className='text-[28px] mb-6'>It can be hard to identify COVID-19 in children as their symptoms are often mild. They may have no symptoms at all. It is a good idea to do a test if a child shows any symptoms of illness, especially if they’ve been exposed.</h3>
            <div className='relative w-full mb-6' >
                <Image src={img} width="auto" height="auto" alt='article'/>
            </div>
          <p className=' text-lg'>For the past few years, COVID-19 has dominated public discourse. At first, countless conflicting reports led to confusion that it was just like the flu, and that it didn’t have the same impact on children as it did on adolescents and adults.

          As we head into our third year of research on COVID-19, more is known about how the novel coronavirus and COVID-19 affect various people in our communities. We now know that pediatric infection rates are similarTrusted Source to that of adults, though many children may not have any symptoms.

          In fact, researchers in one 2022 pediatric study examined antibody tests. They found evidence that up to 77% of children have already had COVID-19. We now know that children can, in fact, contract the coronavirus that causes COVID-19.

          For parents and caregivers, this can cause anxiety — is that cough and runny nose just a cold that’s circulating through day care, or something more serious?

          This article sheds light on the most common symptoms of COVID-19 in children, and what to do if you suspect your child has it.</p>
          <h2 className='text-4xl font-bold my-11'>
          What are the most common symptoms of COVID-19 in babies and kids?
          </h2>
          <p className=' text-lg mb-11'>
          Experts note that COVID-19 symptoms in children are similar to those documented in adults. However, the symptoms in children are usually not as severe.

          In many cases, children may be asymptomatic. This means that no symptoms may be present even though they test positive.
          </p>
          <h2 className='text-4xl font-bold my-11'>
          What are the most common symptoms of COVID-19 in babies and kids?
          </h2>
          <p className=' text-lg mb-11'>
          Experts note that COVID-19 symptoms in children are similar to those documented in adults. However, the symptoms in children are usually not as severe.

          In many cases, children may be asymptomatic. This means that no symptoms may be present even though they test positive.
          </p>
          <h2 className='text-4xl font-bold my-11'>
          What are the most common symptoms of COVID-19 in babies and kids?
          </h2>
          <p className=' text-lg mb-11'>
          Experts note that COVID-19 symptoms in children are similar to those documented in adults. However, the symptoms in children are usually not as severe.

          In many cases, children may be asymptomatic. This means that no symptoms may be present even though they test positive.
          </p>
          <h2 className='text-4xl font-bold my-11'>
          What are the most common symptoms of COVID-19 in babies and kids?
          </h2>
          <p className=' text-lg mb-11'>
          Experts note that COVID-19 symptoms in children are similar to those documented in adults. However, the symptoms in children are usually not as severe.

          In many cases, children may be asymptomatic. This means that no symptoms may be present even though they test positive.
          </p>
          <h2 className='text-4xl font-bold my-11'>
          What are the most common symptoms of COVID-19 in babies and kids?
          </h2>
          <p className=' text-lg mb-11'>
          Experts note that COVID-19 symptoms in children are similar to those documented in adults. However, the symptoms in children are usually not as severe.

          In many cases, children may be asymptomatic. This means that no symptoms may be present even though they test positive.
          </p>
          
        </div>
        <div className='w-[30%]'>
          <div className='flex flex-row'>
              <div className='relative rounded-full overflow-hidden'>
                <Image src={img2} width="auto" height="auto" className='object-contain' alt='article'/>
              </div>
              <a><h5 className='underline font-semibold pl-2 cursor-pointer m-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h5></a>
          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default page