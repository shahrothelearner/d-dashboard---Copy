'use client'
import { useState} from 'react';
import SubCategoryData from '@/data/dashboard/SubCategoryData'
import { totallength, totalElements } from '@/components/dashboard/functions/FnTableStats';
import DashboarDataTable from '@/components/dashboard/DashboarDataTable'
import HeadingSection from '@/components/dashboard/HeadingSection'
import BulkAction from '@/components/dashboard/BulkAction'

const heading = {
    heading: "Articles",
    btntext: "Add New Article",
    to: "/admin-panel/articles/add-article",
  }
  
  const dataStructure = [
    {
      th: "Title",
      td: "title",
    },
    {
      th: "Author",
      td: "authorName"
    },
    {
      th: "Date",
      td: "date"
    },
    {
      th: "Category Name",
      td: "CategoryName"
    },
    {
      th: "Subcategory Name",
      td: "SubCategoryName"
    },
    {
      th: "Tags",
      td: "tags"
    },
    {
      th: "Image",
      td: "image"
    },
    {
      th: "Reviews",
      td: "realviews"
    },
    {
      th: "Bookmarks",
      td: "bookmarks"
    },
  
  ]
  
  const tableStats = [{
    type: "All",
    func: totallength(SubCategoryData),
  },
  {
    type: "Active",
    func: totalElements(SubCategoryData, "status", "Active")
  },
  
  {
    type: "In-Active",
    func: totalElements(SubCategoryData, "status", "In-Active"),
  },
  ]
  
  const sortBy=[
    { name:"Name",  //frontend value
      value:"username" //backend name
    },
    { name:"Category",  //frontend value
      value:"category" //backend name
    },
    { name:"Sub Category",  //frontend value
      value:"subCategoryName" //backend name
    },
    { name:"Author",  //frontend value
      value:"author" //backend name
    },
    ]
const ArticlePage = () => {
    const [bulkAction, setBulkAction] = useState();
    const [dataArr, setDataArr] = useState(SubCategoryData);
  
  
  
    const handleBulkAction = () => {
      console.log(bulkAction)
    }
    return (
      <div>
        <HeadingSection heading={heading} preview={false} stat={false} />
        <BulkAction setBulkAction={setBulkAction} handleBulkAction={handleBulkAction} />
        <DashboarDataTable data={SubCategoryData} dataArr={dataArr} setDataArr={setDataArr} dataStructure={dataStructure} tableStats={tableStats} sortBy={sortBy} updateLink="/admin-panel/article/update/"/>
      </div>
    )
    
}

export default ArticlePage