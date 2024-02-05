import React, { ReactNode } from 'react'
import { Interface } from 'readline'

interface Props {
    children: ReactNode;
}
const AdminPage = ( { children}: Props) => {
  return (
    <div className='flex'>
       <aside className='bg-slate-200 p-5 mr-5'>
       <h1>
        Admin Sidebar
       </h1>
       </aside>
       {children}
    </div>
  )
}

export default AdminPage
