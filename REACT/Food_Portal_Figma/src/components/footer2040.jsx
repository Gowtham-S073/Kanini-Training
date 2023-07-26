import React, { useEffect, useState } from "react";
import './footer2040.css';
import { Link } from 'react-router-dom';

const Footer2040 = ({ progressPercentage }) => {
  const [percentageLeft, setPercentageLeft] = useState(20);

  useEffect(() => {
    if (progressPercentage === 40) {
      setPercentageLeft(28);
    } else {
      setPercentageLeft(progressPercentage);
    }
  }, [progressPercentage]);

  return (
    <div>
      <div className="footer">
        <button type="button" className="btn"><Link to="/dateandtime" style={{color:"orangered",textDecoration:"none"}}>&#60; Back</Link></button>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <h6 id="percentages" className="mt-2" style={{ left: `${percentageLeft}%` }}>
          {progressPercentage}%
        </h6>
        <button type="button" id="btn1"><Link to="/vegnon" style={{color:'white',textDecoration:"none"}}>Continue &#62;</Link></button>
      </div>
    </div>
  );
};

export default Footer2040;