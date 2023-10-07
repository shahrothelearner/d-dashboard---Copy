'use client'
import { useState } from 'react'
import DashboarDataTable from '@/components/dashboard/DashboarDataTable'
import HeadingSection from '@/components/dashboard/HeadingSection'
import BulkAction from '@/components/dashboard/BulkAction'
import SubCategoryData from '@/data/dashboard/SubCategoryData';
import { totallength, totalElements } from '@/components/dashboard/functions/FnTableStats';

const dataStructure = [
  {
    th: "Title",
    td: "articleTitle",
  },
  {
    th: "Date & Time",
    td: "date"
  },
  {
    th: "Category Name",
    td: "CategoryName"
  },
  {
    th: "SubCategory Name",
    td: "SubCategoriesName"
  },
  {
    th: "Tags",
    td: "tags"
  },
  {
    th: "Viewers",
    td: "viewers"
  },
  {
    th: "Bookmarks",
    td: "bookmarks"
  },

]
const tableStats = [{
  type: "All",
  func: totallength(SubCategoryData ),
},
{
  type: "Active",
  func: totalElements(SubCategoryData , "status", "Active")
},

{
  type: "Drafts",
  func: totalElements(SubCategoryData , "status", "Drafts"),
},
{
  type: "Deleted",
  func: totalElements(SubCategoryData , "status", "Delete"),
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

const SubCategoriesPage = ({params}) => {
  const [bulkAction, setBulkAction] = useState();
  const [dataArr, setDataArr] = useState(SubCategoryData);
  let categoryName = decodeURIComponent(params.subcategory)

  
const heading = {
  heading: categoryName,
  btntext: "Add New Sub-Category",
  to: "/admin-panel/categories/sub-categories/addnew-subcategory",
}
  const handleBulkAction = () => {
    console.log(bulkAction)
  }
  return (
    <div>
      <HeadingSection heading={heading} preview={false} stat={true} order={true}/>
      <BulkAction setBulkAction={setBulkAction} handleBulkAction={handleBulkAction} />
      <DashboarDataTable data={SubCategoryData} dataArr={dataArr} setDataArr={setDataArr} dataStructure={dataStructure} tableStats={tableStats} sortBy={sortBy} updateLink="/admin-panel/categories/sub-categories/" />
    </div>


  )
}

export default SubCategoriesPage
