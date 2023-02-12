import React from 'react'
import './Sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';
import { useColorMode } from '../../contexts/ColorModeContext';

const Sidebar = ({ isOpen }) => {
  const { ColorModeToggle } = useColorMode()

  return (
    <div className={`sidebar ${!isOpen && "hidden"}`}>
      <div className="top">
        <Link to="/" className="logo">kap</Link>
      </div>
      <div className="center">
        <div className='categories'>
          <p className="title">Main</p>
          <Link to="/" className='category'>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users" className='category'>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </Link>
          <Link to="/hotels" className='category'>
            <StoreIcon className="icon" />
            <span>Hotels</span>
          </Link>
          <Link to="/rooms" className='category'>
            <CreditCardIcon className="icon" />
            <span>Rooms</span>
          </Link>
          <Link to="/" className='category'>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </Link>
          <p className="title">Useful</p>
          <Link to="/" className='category'>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </Link>
          <Link to="/" className='category'>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </Link>
          <p className="title">Service</p>
          <Link to="/" className='category'>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </Link>
          <Link to="/" className='category'>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </Link>
          <Link to="/" className='category'>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </Link>
          <p className="title">User</p>
          <Link to="/" className='category'>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </Link>
          <Link to="/" className='category'>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  )
}

export default Sidebar