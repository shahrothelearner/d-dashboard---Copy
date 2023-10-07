'use client'
import {BsCheck2 } from 'react-icons/bs';

const BulkAction = ({setBulkAction, handleBulkAction}) => {
  return (
    <div className="flex flex-row ml-20 mb-10">
        <select className="border p-2  text-black/50 " id="bulk-action" onChange={(e)=> setBulkAction(e.target.value)}>
          <option>Bulk Action</option>
          <option value="activate">Activate Selected</option>
          <option value="deactivate">Deactivate Selected</option>
          <option value="delete">Delete Selected</option>
        </select>
        <button  onClick={handleBulkAction} type="button" style={{height:"40px"}}  className="cursor-pointer px-4 items-center flex bg-yellow-500 gap-1 text-white" ><BsCheck2 size={20}/>Apply</button>
    </div>
  )
}

export default BulkAction