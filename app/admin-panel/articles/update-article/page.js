'use client'
import React, {useState} from 'react'
// import { Editor } from 'primereact/editor'
// import "primereact/resources/themes/lara-light-indigo/theme.css";  
// import "primereact/resources/primereact.min.css";  
        

const ArticlePage = () => {
  const [text, setText] = useState('')
  const [category, setCategory] = useState([])

  const handelOnchangeCategory =(e)=>{

    const {value} = e.target; 
    // category.push(value)
    setCategory(category =>[...category, value])
    console.log(category)
  }
  const handleRemoveCategory =(e)=>{

  }
  return (
    <div className='ml-20 min-h-screen'>
    <h1 className='font-bold my-10 text-lg'>ArticlePage</h1>
    <form className='flex flex-wrap w-75 m-auto gap-3 ml-20 justify-between'>
       <div className='w-[45%] flex flex-col'><lable htmlFor="article-title">Title:<span className='text-red-600'>*</span></lable>
      <input type="text" name="article-heading" id="article-title" placeholder='Enter article heading' className='p-2 rounded border '/></div>
      <div className='w-[45%] flex flex-col'><lable htmlFor="article-url">URL:<span className='text-red-600'>*</span></lable>
      <input type="text" name="article-slug" id="article-url" placeholder='Enter article slug' className='p-2 rounded border w-50'/></div>
      <lable htmlFor="article-description" className="w-full">Description:<span className='text-red-600'>*</span></lable>
      <textarea name="article-description" id="article-description" placeholder='Enter article desctripion' className='p-2 rounded border w-full' rows={5}/>
      <div className='flex w-full'>

        <select onChange={handelOnchangeCategory} className='p-2 rounded border w-4/12 text-black/50' >
        <option>Main Category 1</option>
        <option>Main Category 2</option>
        <option>Main Category 3</option>
        <option>Main Category 4</option>
        <option>Main Category 5</option>
        <option>Main Category 6</option>
      </select>
      
    
     
      <select className='p-2 rounded border w-4/12 text-black/50' >
        <option>Sub Category</option>
        <option>Sub Category</option>
        <option>Sub Category</option>
        <option>Sub Category</option>
        <option>Sub Category</option>      
        <option>Sub Category</option>
      </select>
      <select className='p-2 rounded border w-4/12 text-black/50' >
        <option>Author 1</option>
        <option>Author 2</option>
        <option>Author 3</option>
        <option>Author 4</option>
        <option>Author 5</option>
        <option>Author 6</option>
      </select>
      </div>
        {/* <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        {/* </div>     */}
        {/* </div> */} 
    </form>
    </div>
  )
}

export default ArticlePage