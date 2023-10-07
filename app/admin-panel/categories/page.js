'use client'
import { useState } from 'react'
import DashboarDataTable from '@/components/dashboard/DashboarDataTable'
import HeadingSection from '@/components/dashboard/HeadingSection'
import BulkAction from '@/components/dashboard/BulkAction'
import ActiveProjectsData from '@/data/dashboard/ActiveProjectsData';
import { totallength, totalElements } from '@/components/dashboard/functions/FnTableStats';

const heading = {
  heading: "Categories",
  btntext: "Add New Category",
  to: "/admin-panel/categories/addnew-category",
}
const dataStructure = [
  {
    th: "Category Name",
    td: "name",
  },
  {
    th: "Date & Time",
    td: "date"
  },
  {
    th: "Seo Score",
    td: "seoScore"
  },
  {
    th: "Total Subcategories",
    td: "totalsubcategories"
  },
  {
    th: "Active Subcategories",
    td: "activesubcatergories"
  },
  {
    th: "In-Active Subcategories",
    td: "inactivesubcategories"
  },
  {
    th: "Status", 
    td: "status"
    
  },
  {
    th: "Viewers Real/Fake", 
    td: "viewers"
    
  },

]
const tableStats = [{
  type: "All",
  func: totallength(ActiveProjectsData ),
},
{
  type: "Active",
  func: totalElements(ActiveProjectsData , "status", "Active")
},

{
  type: "Drafts",
  func: totalElements(ActiveProjectsData , "status", "Drafts"),
},
{
  type: "Deleted",
  func: totalElements(ActiveProjectsData , "status", "Delete"),
},
]
const sortBy=[
  { name:"Name",  //frontend value
    value:"username" //backend name
  },
  { name:"Date",  //frontend value
    value:"date" //backend name
  },
  { name:"Active",  //frontend value
    value:"active" //backend name
  },
  { name:"In-Active",  //frontend value
    value:"inactive" //backend name
  },
  ]

const categoryPage = () => {
  const [bulkAction, setBulkAction] = useState();
  const [dataArr, setDataArr] = useState(ActiveProjectsData);


  const handleBulkAction = () => {
    console.log(bulkAction)
  }

  return (
    <div>
      <HeadingSection heading={heading} preview={false} stat={true} order={true} />
      <BulkAction setBulkAction={setBulkAction} handleBulkAction={handleBulkAction} />
      <DashboarDataTable data={ActiveProjectsData} dataArr={dataArr} setDataArr={setDataArr} dataStructure={dataStructure} tableStats={tableStats} sortBy={sortBy} updateLink="/admin-panel/categories/" subCatLink={true}/>
    </div>
  )
}

export default categoryPage