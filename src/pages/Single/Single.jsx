import React from 'react'
import './Single.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import userImg from '../../assets/user.png'
import Chart from '../../components/Chart/Chart'
import Table from '../../components/Table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="head">
              <h1 className="title">Information</h1>
              <button className="edit">Edit</button>
            </div>
            <div className="item">
              <img src={userImg} alt="" />
              <div className="details">
                <h1 className="name">Jane Doe</h1>
                <div className="contacts">
                  <div className="contact">
                    <div className="label">Email:</div>
                    <div className="target">kap123@gmail.com</div>
                  </div>
                  <div className="contact">
                    <div className="label">Phone:</div>
                    <div className="target">+1 234 567 89</div>
                  </div>
                  <div className="contact">
                    <div className="label">Address:</div>
                    <div className="target">Elton St. 234 Garden Yd. NewYork</div>
                  </div>
                  <div className="contact">
                    <div className="label">Country:</div>
                    <div className="target">USA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Single