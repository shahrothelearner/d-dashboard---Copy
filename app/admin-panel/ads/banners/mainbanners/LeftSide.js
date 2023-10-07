import React from 'react'
import FnOnChangeData from '../../FnOnChangeData'


const LeftSide = ({ setAds, ads, show, maxLength }) => {
    return (
        <div className="w-8/12 bg-white my-5 overflow-hidden rounded border border-secondary">
            <h4 className="w-100 bg-info text-white  p-2">Basic Info:</h4>
            <aside className=" flex flex-col p-5 ">
                <label htmlFor="b1-title" >Enter Banner Title :<span className="text-danger">*</span></label>
                <input type="text" id="b1-title" name="b1-title" placeholder="Enter title" onChange={(e)=> FnOnChangeData(e,setAds, ads)} className="p-2 rounded my-2 border border-secondary text-capitalize" />
                <label htmlFor="b1-title" >Enter Banner Content:<span className="text-danger">*</span></label>
                <textarea id="b1-content" name="b1-content" placeholder="Enter Banner Content" onChange={(e)=> FnOnChangeData(e,setAds, ads)} className="p-2 rounded my-2 border break-words capitalize" maxLength={maxLength? maxLength:""}/>
                {show && <div className=" flex flex-col "> <label htmlFor="b1-url" >Enter Banner Url:</label>
                    <input type="url" id="b1-url" name="b1-content" placeholder="Link Url (http://example.com)" onChange={(e)=> FnOnChangeData(e,setAds, ads)} className="p-2 rounded my-2 border  break-words capitalize" />
                </div>}

            </aside>
        </div>
    )
}

export default LeftSide