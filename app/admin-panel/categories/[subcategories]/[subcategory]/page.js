'use client'
import { SubCategoryTable } from "sub-components"
import {BsCheck2 } from 'react-icons/bs';
import {MdAddCircle} from 'react-icons/md';
import {GrUnorderedList} from 'react-icons/gr';
import {TbCategory} from 'react-icons/tb';
import Link from "next/link";


const SubCategoryPage = ({params}) => {
  let categoryName = decodeURIComponent(params.subcategory)
  return (
    <div  className="container fluid mb-20">
    <div>
        <div className="d-flex m-3 align-middle ">
          <h1 className="m-3 align-middle text-capitalize">{categoryName}</h1>
          <button type="button" style={{height:"40px"}} className="btn btn-success my-3 mx-1 align-middle rounded-0 d-flex  justify-content-between rounded"><MdAddCircle size={20}/>Add New Article</button>
          <Link href={"/categories"}><button type="button" style={{height:"40px"}} className="btn btn-warning my-3 mx-1 align-middle rounded-0 d-flex  text-white justify-content-between rounded"><TbCategory size={20}/>Live Preview</button></Link>
          <button type="button" style={{height:"40px"}} className="btn btn-primary my-3 mx-1 align-middle rounded-0 d-flex justify-content-between rounded" ><GrUnorderedList size={20}/>Stats</button>
        </div>
        <div className="d-flex m-0">
        <select className="py-2 border-0" id="bulk-action">
          <option>Bulk Action</option>
          <option>Activate Selected</option>
          <option>Deactivate Selected</option>
          <option>Delete Selected</option>
        </select>
        <button type="button" style={{height:"40px"}}  className="btn btn-warning align-middle text-white rounded-0"><BsCheck2 size={20}/>Apply</button>
        <div className="bg-white rounded-5 px-3 py-2 ms-8"> Status: <span className="text-green">Active</span></div>
        <div className="bg-white rounded-5 px-3 py-2 ms-2"> Viewers: <span className="text-green">270/350</span></div>

        </div>
    </div>
    <div>
        <SubCategoryTable categoryName={categoryName}/>
    </div>
</div>
  )
}

export default SubCategoryPage
