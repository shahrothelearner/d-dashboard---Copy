'use client'
import { useState } from 'react'
import DashboarDataTable from '@/components/dashboard/DashboarDataTable'
import HeadingSection from '@/components/dashboard/HeadingSection'
import BulkAction from '@/components/dashboard/BulkAction'
import UserData from '@/data/dashboard/UserData';
import { totallength, totalElements } from '@/components/dashboard/functions/FnTableStats';




const heading = {
  heading: "Users",
  btntext: "Add New User",
  to: "/users/addnew",
}

const dataStructure = [
  {
    th: "User Name",
    td: "username",
  },
  {
    th: "Email",
    td: "email"
  },
  {
    th: "Country",
    td: "country"
  },
  {
    th: "Moblie #",
    td: "mob"
  },
  {
    th: "Role",
    td: "role"
  },
  {
    th: "Status",
    td: "status"
  },
  {
    th: "Image",
    td: "image"
  },

]

const tableStats = [{
  type: "All",
  func: totallength(UserData),
},
{
  type: "Active",
  func: totalElements(UserData, "status", "Active")
},

{
  type: "In-Active",
  func: totalElements(UserData, "status", "In-Active"),
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
const UserPage = () => {
  const [bulkAction, setBulkAction] = useState();
  const [dataArr, setDataArr] = useState(UserData);


  const handleBulkAction = () => {
    console.log(bulkAction)
  }
  return (
    <div>
      <HeadingSection heading={heading} preview={false} stat={false} />
      <BulkAction setBulkAction={setBulkAction} handleBulkAction={handleBulkAction} />
      <DashboarDataTable data={UserData} dataArr={dataArr} setDataArr={setDataArr} dataStructure={dataStructure} tableStats={tableStats} sortBy={sortBy} updateLink="/admin-panel/users/"/>
    </div>
  )
}

export default UserPage