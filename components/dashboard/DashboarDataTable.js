'use client'
import React, { useState, useEffect } from 'react'
import TableStats from '@/components/dashboard/tablesection/TableStats'
import SearchBar from '@/components/dashboard/tablesection/SearchBar'
import Link from 'next/link'
import Image from 'next/image'
import { CiEdit } from 'react-icons/ci';
import { BsEye } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import FnCheckBox from '@/components/dashboard/functions/FnCheckBox';




const DashboarDataTable = ({ data, dataArr, setDataArr, dataStructure, tableStats, sortBy, updateLink, subCatLink }) => {
    const [query, setQuery] = useState([]);
    useEffect(() => {


    }, [dataArr])

    let i = 1;
    return (
        <div className=" mx-[100px] mb-5">
            <TableStats tableStats={tableStats} data={data} />
            <SearchBar dataArr={dataArr} data={data} query={query} setQuery={setQuery} setDataArr={setDataArr} tableStats={tableStats} sortBy={sortBy} />
            <table className="w-[1200px] border p-5">
                <thead>
                    <tr className='px-2 py-4 border h-[60px] break-words'>
                        <th className="p-2 border-b-2"><input type='checkbox' name='th-checkbox' checked={!dataArr.some(el => el?.isChecked !== true)} onChange={(e) => FnCheckBox(e, dataArr, setDataArr)} /></th>
                        <th>Serial</th>
                        {dataStructure.map((element, index) => {
                            return (
                                <th className="px-2 border-b-2" key={index}>{element.th}</th>
                            )
                        })}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {dataArr.map((item, index) => {
                        return (
                            <tr key={index} className='px-4 py-4 border h-[100px] break-words'>
                                <td className="px-3 border-b-2">
                                    <input type='checkbox' name={item._id} checked={item?.isChecked || false} onChange={(e) => FnCheckBox(e, dataArr, setDataArr)} /></td>
                                <td className="px-3 break-all border-b-2">{i++}</td>
                                {dataStructure.map((element, i) => {
                                    return (
                                        <td key={i} className="px-3 border-b-2 relative text-center">
                                            {(() => {
                                                if (element.td === "name") {
                                                    return <Link href={"/admin-panel/categories/" + item[element.td]}>{item[element.td]}</Link>
                                                } if (element.td === "date") {
                                                    return <div>{item.date} <br />  {item.time}</div>
                                                } if (element.td === "viewers") {
                                                    return item.viewersR + "/" + item.viewersF
                                                }
                                                if (element.td === "users") {
                                                    return (
                                                        <div className=' ml-[-15px] relative'>
                                                            {item[element.td].slice(0, 3).map((e, i) => {
                                                                return (

                                                                    <div className='ml-[-15px] relative inline-block hover:z-[3] cursor-pointer'>
                                                                        <Image src={e.image} width={30} height={30} alt={item.title} className="object-cover rounded-[50%] border-spacing-1 border" />
                                                                    </div>
                                                                )
                                                            })}
                                                            {item[element.td].length > 2 && <span className='justifyl-center border-4 rounded-[50%]  items-center p-1 ml-[-15px] mb-[] bg-white z-[2] absolute text-xs'>+{item[element.td].length - 2}</span>}
                                                        </div>
                                                    )
                                                }
                                                if (element.td === "image") {
                                                    return <Image src={item.image} alt={item.title} width={40} height={40} />
                                                } if (element.td === "teachers") {
                                                    return item[element.td].map((e, i) => { return (<span key={i} >{e.name}, </span>) })
                                                } else {
                                                    return item[element.td]?.length > 100 ? item[element.td].slice(0, 100) + "..." : item[element.td]
                                                }
                                            })()}
                                        </td>
                                    )
                                })}
                                <td className="px-2 border-b-2 ">
                                    <div className='flex gap-1 items-center'>
                                        <Link href={updateLink + "view/" + item._id}><BsEye className="text-yellow-500 me-2 cursor-pointer" title="View" /></Link>
                                        <Link href={updateLink + "update/" + item._id}><CiEdit className='text-blue-700 mr-2 cursor-pointer' title="Edit" /></Link>
                                        <RiDeleteBin6Line className="text-red-600 cursor-pointer" title="Delete" />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DashboarDataTable