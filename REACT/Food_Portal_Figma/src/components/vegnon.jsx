import React, { useEffect,useState } from "react";
import Vector from './../Images/Vector.png';
import Group from '../Images/Group.png';
import Veg from '../Images/veg.png';
import Nonveg from '../Images/nonveg.png';
import BtmImg from '../Images/bg 1.png';
import 'bootstrap/dist/css/bootstrap.css';
import './vegnon.css';
import Header from "./header";
import { Link } from 'react-router-dom';
// import axios from "axios";

const Vegnon = () => {
  const [formData, setFormData] = useState({
    selectedOption: '',
    vegCount: 10,
    nonvegCount: 15,
  });

  const [progressPercentage, setProgressPercentage] = useState(40);
  const [percentageLeft, setPercentageLeft] = useState(40);
  const [isCardClicked, setIsCardClicked] = useState(false);


  useEffect(() => {
    // if (progressPercentage === 60) {
    //   setPercentageLeft(40);
    // } else {
    //   setPercentageLeft(progressPercentage);
    // }
    const newPercentageLeft = 30 ;
    setPercentageLeft(newPercentageLeft);
    if (progressPercentage === 60) {
         setPercentageLeft(40);
       }

  }, [progressPercentage]);

  const incrementVeg = () => {
    if (formData.vegCount < 25) {
      const newVegCount = formData.vegCount + 1;
      const newNonvegCount = 25 - newVegCount;
      const newProgressPercentage = 60;
      setFormData({ ...formData, vegCount: newVegCount, nonvegCount: newNonvegCount });
      setProgressPercentage(newProgressPercentage);
    }
  };

  const decrementVeg = () => {
    if (formData.vegCount > 0) {
      const newVegCount = formData.vegCount - 1;
      const newNonvegCount = 25 - newVegCount;
      const newProgressPercentage = 60;
      setFormData({ ...formData, vegCount: newVegCount, nonvegCount: newNonvegCount });
      setProgressPercentage(newProgressPercentage);
    }
  };

  const incrementNonveg = () => {
    if (formData.nonvegCount < 25) {
      const newNonvegCount = formData.nonvegCount + 1;
      const newVegCount = 25 - newNonvegCount;
      const newProgressPercentage = 60;
      setFormData({ ...formData, vegCount: newVegCount, nonvegCount: newNonvegCount });
      setProgressPercentage(newProgressPercentage);
    }
  };

  const decrementNonveg = () => {
    if (formData.nonvegCount > 0) {
      const newNonvegCount = formData.nonvegCount - 1;
      const newVegCount = 25 - newNonvegCount;
      const newProgressPercentage = 60;
      setFormData({ ...formData, vegCount: newVegCount, nonvegCount: newNonvegCount });
      setProgressPercentage(newProgressPercentage);
    }
  };



  const handleOptionChange = (option) => {
    setFormData({ ...formData, selectedOption: option });
    setIsCardClicked(true);
  };
  const buttonDisabledStyle = {
    backgroundColor: '#C1C8CF',
   color: '#FFFFFF',
   fontWeight:500,
    cursor: 'not-allowed', 
    borderStyle:'none',

  };
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await axios.post('<API_ENDPOINT>', formData);

  //     setFormData({
  //       selectedOption: '',
  //       vegCount: 10,
  //       nonvegCount: 15,
  //     });

  //     console.log('Form submitted successfully!');
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  const toggleCardStyles = (event) => {
    const card = event.currentTarget;
    const isVegNonvegCard = card.classList.contains("veg-nonveg-card");
    setFormData({ ...formData, selectedOption: isVegNonvegCard ? 'both' : '' });
  };

  return (
    <div>
      <Header />
      {/* <form onSubmit={handleSubmit}> */}
        <div className="full" >
          <h3 className="h3tag">Hey! Pick your choice here</h3>
          <p class="ptag">
            18th August 2022, 11:00 am - 12.00 pm , Rattha Group... <span className="spanorange">|</span> 25 Guests
          </p>
          <br />
          <div className="row align-items-center" style={{ marginTop:-10 }}>
            <div className="col-auto">
              <img src={Group} style={{ width: 30, height: 30 }} alt="Group" />
            </div>
            <div className="col">
              <h5 className="h5tagg" style={{ marginTop:-30 , marginLeft:-140}}>Select Food Type</h5>
            </div>
          </div>

          <br />
          <br></br>
          <div className="row" style={{ marginTop:-20 }}>
            <div
              className={`cardvn ${formData.selectedOption === 'veg' ? 'clicked' : ''}`}
              onClick={(event) => {
                toggleCardStyles(event);
                handleOptionChange('veg');
              }}
            >
              <img src={Veg} style={{ width: 40, height: 40, marginTop:10 }} alt="Veg" />
              <br />
              <p class="ptag mt-3" style={{fontSize:20}}>Veg</p>
            </div>
            <div
              className={`cardvn mx-5 ${formData.selectedOption === 'nonveg' ? 'clicked' : ''}`}
              onClick={(event) => {
                toggleCardStyles(event);
                handleOptionChange('nonveg');
              }}
            >
              <img src={Nonveg} style={{ width: 40, height: 40, marginTop:10 }} alt="Non-Veg" />
              <br />
              <p class="ptag mt-3" style={{fontSize:20}}>Non-Veg</p>
            </div>
            <div
              className={`cardvn veg-nonveg-card ${formData.selectedOption === 'both' ? 'clicked' : ''}`}
              onClick={(event) => {
                toggleCardStyles(event);
                handleOptionChange('both');
              }}
            >
              <div className="row">
                <div className="d-flex">
                  <img src={Veg} style={{ width: 40, height: 40,marginTop:10, marginLeft:28 }} alt="Veg" />
                  <img src={Nonveg} style={{ width: 40, height: 40, marginTop:10, marginLeft:10 }} alt="Non-Veg" />
                </div>
              </div>
              <br />
              <p class="ptag" style={{marginTop:-5,fontSize:20}}>Veg & <br></br> Non-Veg</p>
            </div>
          </div>
          <br />
          <br />
          {formData.selectedOption === 'both' && (
            <div className="second">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img src={Vector} style={{ width: 30, height: 30 }} alt="Vector" />
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <h5 className="h5tagg" style={{ marginTop:-40 , marginLeft:-140}}>Select Veg & Non-Veg Count</h5>
                    <h6 className="mx-5" class="h6image mx-5" style={{ marginTop:-30 , marginLeft:-140}}>
                      <img src={Vector} style={{ width: 20, height: 20 }} alt="Vector" />
                      &nbsp;Total - 25
                    </h6>
                  </div>
                </div>
              </div>
              <p class="ptag" className="mt-1">You can select numbers for food type up to 25 people</p>
              <table>
                <tbody>
                  <tr>
                    <td class="tdtag"><p class="ptag">Veg</p></td>
                    <td class="tdtag"><p class="ptag">Non-Veg</p></td>
                  </tr>
                  <tr>
                    <td class="tdtag">
                      <button className="count-button" onClick={decrementVeg}>-</button>
                      <span className="count mx-1 my-1">{formData.vegCount}</span>
                      <button className="count-button" onClick={incrementVeg}>+</button>
                    </td>

                    <td class="tdtag">
                      <button className="count-button" onClick={decrementNonveg}>-</button>
                      <span className="count mx-1 my-1">{formData.nonvegCount}</span>
                      <button className="count-button" onClick={incrementNonveg}>+</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          <img src={BtmImg} alt="Bottom"  className="btm-img" />
        </div>
      {/* </form> */}
      <div className="foot">
      <button type="button" className="btn"><Link to="/groupsize" style={{color:"orangered",textDecoration:"none"}}>&#60; Back</Link></button>
        <div className="progress-bars">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <h6 id="percentage" className="mt-2" style={{ left: `${percentageLeft}%` }}>
          {progressPercentage}%
        </h6>
        <button type="button" id="btn1"  disabled={!isCardClicked}
            style={isCardClicked ? null : buttonDisabledStyle} >Continue &#62;</button>
      </div>
    </div>
  );
};

export default Vegnon;