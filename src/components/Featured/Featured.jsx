import './Featured.scss'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import React, { PureComponent } from 'react';
import Chart from './Chart';

const Featured = () => {
 
  return (
    <div className='featured'>
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <Chart />
        </div>
        <div className="title">Total sales made today</div>
        <div className="amount">$420</div>
        <div className="desc">
          Previous transactions processing. Last payments may not be included.
        </div>
        <div className="summary">
          <div className="item">
            <div className="title">Target</div>
            <div className="result">
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className="amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="title">Last week</div>
            <div className="result">
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className="amount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="title">Last month</div>
            <div className="result negative">
              <KeyboardArrowDownIcon fontSize='small' />
              <div className="amount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured