'use client'
import { useState} from 'react';
import AdsData from '@/data/dashboard/AdsData'
import { totallength, totalElements } from '@/components/dashboard/functions/FnTableStats';
import DashboarDataTable from '@/components/dashboard/DashboarDataTable'
import HeadingSection from '@/components/dashboard/HeadingSection'
import BulkAction from '@/components/dashboard/BulkAction'

const heading = {
    heading: "Ads",
    btntext: "Add New Ad",
    to: "/admin-panel/ads/banners/articlebanners/addnew-ad",
  }
  
  const dataStructure = [
    {
      th: "Title",
      td: "title",
    },
    {
      th: "Url",
      td: "url"
    },
    {
      th: "Body",
      td: "body"
    },
    {
      th: "Status",
      td: "status"
    },
    {
      th: "Image",
      td: "image"
    },
    {
      th: "Created at",
      td: "createdAt"
    },
    {
      th: "Size",
      td: "size"
    },
  
  ]
  
  const tableStats = [{
    type: "All",
    func: totallength(AdsData),
  },
  {
    type: "Active",
    func: totalElements(AdsData, "status", "Active")
  },
  
  {
    type: "In-Active",
    func: totalElements(AdsData, "status", "In-Active"),
  },
  ]
  
  const sortBy=[
    { name:"Name",  //frontend value
      value:"username" //backend name
    },
    { name:"Country",  //frontend value
      value:"country" //backend name
    },
    { name:"Role",  //frontend value
      value:"role" //backend name
    },
    { name:"Status",  //frontend value
      value:"status" //backend name
    },
    ]
const ArticleBanners = () => {
    const [bulkAction, setBulkAction] = useState();
    const [dataArr, setDataArr] = useState(AdsData);
  
  
  
    const handleBulkAction = () => {
      console.log(bulkAction)
    }
    return (
      <div>
        <HeadingSection heading={heading} preview={false} stat={false} />
        <BulkAction setBulkAction={setBulkAction} handleBulkAction={handleBulkAction} />
        <DashboarDataTable data={AdsData} dataArr={dataArr} setDataArr={setDataArr} dataStructure={dataStructure} tableStats={tableStats} sortBy={sortBy}/>
      </div>
    )
    
}

export default ArticleBanners