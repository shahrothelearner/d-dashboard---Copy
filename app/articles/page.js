import React from 'react'
import ArticleCard from './ArticleCard'

const page = () => {
  return (
    <div className='w-[1100px max-w-[90%] m-auto'>
        <h1 className="font-Proxima-cond text-[70px] font-bold pt-[140px] pb-[50px] text-center" >
            Latest Articles</h1>
            <div className='flex flex-row'>
              <div className='w-[75%]'>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
              </div>
              <div className='w-[20%]'></div>
            </div>
    
    </div>
  )
}

export default page