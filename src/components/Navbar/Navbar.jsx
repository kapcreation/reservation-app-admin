import React from 'react'
import './Navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import userImg from '../../assets/user.png'
import { useColorMode } from '../../contexts/ColorModeContext';

const Navbar = ({ toggleSidebar }) => {
  const { ColorModeToggle } = useColorMode()

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='left'>
          <ListOutlinedIcon className='sidebar-toggle' onClick={toggleSidebar} />

          <div className="search">
            <input type="text" placeholder='Search...' />
            <SearchOutlinedIcon />
          </div>
        </div> 
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item">
            <ColorModeToggle />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="badge">2</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="badge">9+</div>
          </div>
          <div className="item">
            <img src={userImg} alt="" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar