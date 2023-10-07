'use client'
import { useState } from 'react'
import Submenu from './SubMenu'
import { BsArrowRightCircle } from 'react-icons/bs'
import Link from 'next/link'






const Categories = () => {

      const [menuArticle, setName] = useState({ artName: "", show: false })
      const subMenuHandle = (e) => {
            setName((preVal) => ({ ...preVal, artName: e.target.name }))
      }
      const subMenuHandleLeave = (e) => {
            if (menuArticle.show) {
                  // setName({artName: e.target.name })     
            } else {
                  setName({ artName: "" })
            }
      }

      return (
            <div className='absolute bg-[#fbf5ed] w-[100vw] h-[470px] text-black p-5 left-0 animate-[menuAnimation_0.3s_ease-in-out_forwards] ' id="dropdown">
                  {/* main menu */}
                  <div className='w-[80vw] text-left flex flex-row text-black text-[16px] justify-between my-[10px] mx-[8rem] leading-[3rem]'>
                        <span onClick={() => (document.getElementById("dropdown").style.display = "none")} className="absolute top-0 right-[10%] text-[20px] cursor-pointer">X</span>
                        <div className="w-[25%]">
                              <h3 className='flex text-[18px] justify-between'>
                                    <div>Categories</div>
                                    <div>
                                          <Link className="hover:text-[#f5086a]" href="/categories">
                                                <span className='flex items-center'>
                                                      ALL<BsArrowRightCircle />
                                                </span>
                                          </Link>
                                    </div>
                              </h3>

                              <hr className='h-[3px] text-black bg-black' />
                              <ul className=' overflow-x-hidden overflow-y-auto h-[350px] animate-[searchAnimation_0.5s_ease-in-out_forwards]'>
                                    <li><Link className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" onMouseOver={subMenuHandle} onMouseLeave={subMenuHandleLeave} name="CSS" href='/categories/css'>CSS</Link></li>
                                    <li><Link className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" onMouseOver={subMenuHandle} onMouseLeave={subMenuHandleLeave} name="PMS" href='/categories/pms'>PMS</Link></li>
                                    <li><Link className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" onMouseOver={subMenuHandle} onMouseLeave={subMenuHandleLeave} name="Featured" href='/categories/featured'>Featured</Link></li>
                                    <li><Link className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" onMouseOver={subMenuHandle} onMouseLeave={subMenuHandleLeave} name="Current Affairs" href='/categories/currentaffairs'>Current Affairs</Link></li>
                                    <li><Link className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" onMouseOver={subMenuHandle} onMouseLeave={subMenuHandleLeave} name="Other Pages" href='/categories'>Other Pages</Link></li>
                                    <li><Link className="hover:text-[#f5086a] block w-[100vw] text-[18px] font-extralight" onMouseOver={subMenuHandle} onMouseLeave={subMenuHandleLeave} name="Other Pages" href='/categories'>Other Pages</Link></li>

                              </ul>
                        </div>

                        <div style={{ width: "75%" }}>
                              <div style={{ padding: "0 15px" }}>
                                    <h3 className='flex text-[18px] justify-between'>{menuArticle.artName ? menuArticle.artName : "Categories"}
                                          <Link href="/categories">
                                                <span className='flex items-center'>ALL<BsArrowRightCircle /></span>
                                          </Link>
                                    </h3>
                                    <hr className='h-[3px] text-black bg-black' /></div>
                              {menuArticle.artName ?
                                    <div onMouseOver={() => (setName((preVal) => ({ ...preVal, show: true })))}
                                          onMouseLeave={() => (setName({ artName: "", show: false }))}>
                                          <Submenu menuArticle={menuArticle} />  </div> : ""}
                              {/* <div className="other-categories-menu">
                                          <div>
                                                <a>Acid Reflux</Link><br />
                                                <a>ADHD</Link><br />
                                                <a>Allergies</Link><br />
                                                <a>Alzheimer's & Dementia</Link><br />
                                                <a>Bipolar Disorder</Link><br />
                                                <a>Cancer</Link>
                                                <a>Crohn's Disease</Link></div>
                                          <div>
                                                <a>Acid Reflux</Link><br />
                                                <a>ADHD</Link><br />
                                                <a>Allergies</Link><br />
                                                <a>Alzheimer's & Dementia</Link><br />
                                                <a>Bipolar Disorder</Link><br />
                                                <a>Cancer</Link><br />
                                                <a>Crohn's Disease</Link></div>
                                          <div>
                                                <a>Acid Reflux</Link><br />
                                                <a>ADHD</Link><br />
                                                <a>Allergies</Link><br />
                                                <a>Alzheimer's & Dementia</Link><br />
                                                <a>Bipolar Disorder</Link><br />
                                                <a>Cancer</Link><br />
                                                <a>Crohn's Disease</Link></div>

                                    </div> */}

                        </div>
                  </div>
            </div>
      )
}

export default Categories