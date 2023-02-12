import React, { useState } from 'react'
import './Home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/Widget/Widget'
import Featured from '../../components/Featured/Featured'
import Chart from '../../components/Chart/Chart'
import Table from '../../components/Table/Table'

const Home = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <div className='home'>
      <Sidebar isOpen={sidebarIsOpen} />
      <div className="home-container">
        <Navbar toggleSidebar={()=>setSidebarIsOpen(prev=>!prev)} />
        <div className="widgets">
          <Widget context="user" />
          <Widget context="order" />
          <Widget context="earning" />
          <Widget context="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Earnings Overview" />
        </div>
        <div className="list-container">
          <div className="title">Lastest transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home