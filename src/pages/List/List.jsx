import React from 'react'
import './List.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Datatable from '../../components/Datatable/Datatable'

const List = ({ context }) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <Datatable context={context} />
      </div>
    </div>
  )
}

export default List