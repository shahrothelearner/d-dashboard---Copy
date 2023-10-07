import React from 'react'
import SideNavBar from '@/components/sideBarNav/SideNavBar'

const layout = ({children}) => {
  return (
    <div className='flex flex-row mt-[70px]'>
        <SideNavBar/>
        {children}
    </div>
  )
}

export default layout