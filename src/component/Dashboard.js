import React from 'react'
import Topnav from './Topnav'
import '../css/dashboard.css'
import Proview from './Proview'
import Progallery from './Progallery'
export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Topnav />
      <h2>Dashboard</h2>
      <div className='dashboard-overview'>
      <Proview />
      <Progallery />
      </div>
      <h2>content</h2>
      <div className='dashboard-overview'>
      <Proview />
      <Progallery />
      </div>
      </div>
  )
}
