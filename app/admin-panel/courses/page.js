'use client'
import { useState} from 'react';
import { totallength, totalElements } from '@/components/dashboard/functions/FnTableStats';
import DashboarDataTable from '@/components/dashboard/DashboarDataTable'
import HeadingSection from '@/components/dashboard/HeadingSection'
import BulkAction from '@/components/dashboard/BulkAction'
import CoursesData from '@/data/dashboard/CoursesData'

const heading = {
    heading: "Courses",
    btntext: "Add New Course",
    to: "/admin-panel/courses/addnew-course",
  }
  
  const dataStructure = [
    {
      th: "Title",
      td: "title",
    },
    {
      th: "Description",
      td: "description"
    },
    {
      th: "Image",
      td: "image"
    },
    {
      th: "Admission Date",
      td: "admissionDate"
    },
    {
      th: "Starting Date",
      td: "openingDate"
    },
    {
      th: "Clossing Date",
      td: "clossingDate"
    },
    {
      th: "Lectures",
      td: "lectures"
    },
    {
      th: "Fee",
      td: "fee"
    },
    {
      th: "Teachers",
      td: "teachers"
    },
    {
        th: "Modality",
        td: "modality"
      },
      {
        th: "Course Level",
        td: "courseLevel"
      },
      {
        th: "Seats",
        td: "seats"
      },
  
  ]
  
  const tableStats = [{
    type: "All",
    func: totallength(CoursesData),
  },
  {
    type: "Active",
    func: totalElements(CoursesData, "status", "Active")
  },
  
  {
    type: "In-Active",
    func: totalElements(CoursesData, "status", "In-Active"),
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
const CoursePage = () => {
    const [bulkAction, setBulkAction] = useState();
    const [dataArr, setDataArr] = useState(CoursesData);
  
  
  
    const handleBulkAction = () => {
      console.log(bulkAction)
    }
    return (
      <div>
        <HeadingSection heading={heading} preview={false} stat={false} />
        <BulkAction setBulkAction={setBulkAction} handleBulkAction={handleBulkAction} />
        <DashboarDataTable data={CoursesData} dataArr={dataArr} setDataArr={setDataArr} dataStructure={dataStructure} tableStats={tableStats} sortBy={sortBy} updateLink="/admin-panel/courses/"/>
      </div>
    )
    
}

export default CoursePage