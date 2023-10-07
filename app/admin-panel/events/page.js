'use client'
import { useState} from 'react';
import eventData from '@/data/dashboard/eventData'
import { totallength, totalElements } from '@/components/dashboard/functions/FnTableStats';
import DashboarDataTable from '@/components/dashboard/DashboarDataTable'
import HeadingSection from '@/components/dashboard/HeadingSection'
import BulkAction from '@/components/dashboard/BulkAction'

const heading = {
    heading: "Events",
    btntext: "Add New Event",
    to: "/admin-panel/events/addnew-event",
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
      th: "Syllabus",
      td: "syllabus"
    },
    {
      th: "Learning",
      td: "learning"
    },
    {
      th: "Location",
      td: "location"
    },
    {
      th: "Registration",
      td: "registration"
    },
    {
      th: "Orientation",
      td: "orientation"
    },
    {
      th: "Duration",
      td: "duration"
    },
    {
      th: "Starting Time",
      td: "startTime"
    },
    {
      th: "Ending Time",
      td: "endTime"
    },
    {
      th: "Fee",
      td: "fee"
    },
  
  ]
  
  const tableStats = [{
    type: "All",
    func: totallength(eventData),
  },
  {
    type: "Active",
    func: totalElements(eventData, "status", "Active")
  },
  
  {
    type: "In-Active",
    func: totalElements(eventData, "status", "In-Active"),
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
const EventsPage = () => {
    const [bulkAction, setBulkAction] = useState();
    const [dataArr, setDataArr] = useState(eventData);
  
  
  
    const handleBulkAction = () => {
      console.log(bulkAction)
    }
    return (
      <div>
        <HeadingSection heading={heading} preview={false} stat={false} />
        <BulkAction setBulkAction={setBulkAction} handleBulkAction={handleBulkAction} />
        <DashboarDataTable data={eventData} dataArr={dataArr} setDataArr={setDataArr} dataStructure={dataStructure} tableStats={tableStats} sortBy={sortBy} updateLink="/admin-panel/events/"/>
      </div>
    )
    
}

export default EventsPage