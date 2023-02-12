import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ context }) => {
  let data

  switch (context) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        icon: (
          <PersonOutlinedIcon 
            className='icon' 
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />),
        value: "720",
      }
      break
    case "order":
      data = {
        title: "ORDERS",
        link: "See all orders",
        icon: (
          <ShoppingCartOutlinedIcon 
            className='icon' 
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />),
        value: "250",
      }
      break
    case "earning":
      data = {
        title: "EARNINGS",
        link: "See net earnings",
        icon: (
          <MonetizationOnOutlinedIcon 
            className='icon' 
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", 
            color: "green" }}
          />),
        value: "$4.6k",
      }
      break
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon 
            className='icon' 
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />),
        value: "$7.8k"
      }
      break
    default:
      break
  }

  return (
    <div className='widget'>
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{data.value}</div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget