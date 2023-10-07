'use client'
import {BsSearch} from 'react-icons/bs';
import FnSearch from '../functions/FnSearch';
import FnSort from '../functions/FnSort';





const SearchBar = ({dataArr, data,query, setQuery, setDataArr, tableStats, sortBy}) => {


    
    return (
        <div className='border rounded flex'>
            <select className='border p-2  text-black/50 ' id="no-of-elements" defaultValue={25} onChange={(e) => console.log(e.target.value)}>
                <option>10</option>
                <option>15</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
                <option>200</option>
                <option>300</option>
                <option>400</option>
                <option>500</option>
            </select>
            <select className='border p-2 text-black/50 ' id='type-of-elements' onChange={(e) => {e.target.value === "All"? setDataArr(data):
                setDataArr(data.filter(ele => ele.status === e.target.value))
            }}>
                {tableStats.map((e,i)=>
                <option key={i}>{e.type}</option>
                )}
            </select>
            <select className='border p-2  text-black/50 ' id='sort-by' onChange={(e)=> FnSort(dataArr, e.target.value, setDataArr)}>
                    {sortBy.map((e,i)=>
                <option key={i} value={e.value}>{e.name}</option>
                    )}
                   
                
            </select>
            <input type="search" placeholder="Search..." className='w-full border-0 p-2 ' id='search' onChange={(e)=> FnSearch(e, dataArr, data,query, setQuery, setDataArr)}/>
            <i className='p-2 border items-center'><BsSearch /></i>
        </div>

  )
}

export default SearchBar