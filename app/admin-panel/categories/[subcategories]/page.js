'use client'
import { useState } from 'react'
import DashboarDataTable from '@/components/dashboard/DashboarDataTable'
import HeadingSection from '@/components/dashboard/HeadingSection'
import BulkAction from '@/components/dashboard/BulkAction'
import SubCategoriesData from '@/data/dashboard/SubCategoriesData';
import { totallength, totalElements } from '@/components/dashboard/functions/FnTableStats';

const heading = {
  heading: "Sub-Categories",
  btntext: "Add New Sub-Category",
  to: "/admin-panel/categories/sub-categories/addnew-subcategory",
}
const dataStructure = [
  {
    th: "Category Name",
    td: "SubCatName",
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
    th: "Total Articles",
    td: "totalArticles"
  },
  {
    th: "Published",
    td: "publishedArticles"
  },
  {
    th: "Drafts",
    td: "draftArticles"
  },
  {
    th: "Featured",
    td: "featuredArticles"
  },
  {
    th: "Deleted",
    td: "deletedArticles"
  },
  {
    th: "Status", 
    td: "status"
    
  },
  {
    th: "Viewers", 
    td: "users"
    
  },

]
const tableStats = [{
  type: "All",
  func: totallength(SubCategoriesData ),
},
{
  type: "Active",
  func: totalElements(SubCategoriesData , "status", "Active")
},

{
  type: "Drafts",
  func: totalElements(SubCategoriesData , "status", "Drafts"),
},
{
  type: "Deleted",
  func: totalElements(SubCategoriesData , "status", "Delete"),
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
  const [dataArr, setDataArr] = useState(SubCategoriesData);
  let categoryName = decodeURIComponent(params.subcategories)

  const handleBulkAction = () => {
    console.log(bulkAction)
  }
  return (
    <div>
      <HeadingSection heading={heading} preview={false} stat={true} order={true}/>
      <BulkAction setBulkAction={setBulkAction} handleBulkAction={handleBulkAction} />
      <DashboarDataTable data={SubCategoriesData} dataArr={dataArr} setDataArr={setDataArr} dataStructure={dataStructure} tableStats={tableStats} sortBy={sortBy} updateLink="/admin-panel/categories/sub-categories/" />
    </div>


  )
}

export default SubCategoriesPage
