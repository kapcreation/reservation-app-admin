import React from 'react'
import './Chart.scss'
import { BarChart, Legend, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ aspect, title }) => {
    
  const data = [
    { name: "Jan", value: 1200 },
    { name: "Feb", value: 2100 },
    { name: "Mar", value: 800 },
    { name: "Apr", value: 1600 },
    { name: "May", value: 900 },
    { name: "Jun", value: 1700 },
    { name: "Jul", value: 1500 },
    { name: "Aug", value: 900 },
    { name: "Sep", value: 1000 },
    { name: "Oct", value: 1800 },
    { name: "Nov", value: 1500 },
    { name: "Dec", value: 1700 },
  ];

  return (
    <div className='chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" minWidth="400px" aspect={aspect || 2 / 1}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart