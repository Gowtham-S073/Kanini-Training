import React, { useEffect, useState } from "react";
import Vector from './../Images/Vector.png';
import Emoji1 from '../Images/Emoji1.png';
import GroupSizeImage from '../Images/GroupSize.png';
import './GroupSize.css';
import BtmImg from '../Images/bg 1.png';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./header";
import { Variable } from "../Variables";
import Footer2040 from "./footer2040";

const GroupSize = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [allSizes, setAllSizes] = useState([]);
  const [showAlertPopup, setShowAlertPopup] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(20);

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const response = await fetch(Variable.Group_Sizes_Url);
        if (response.ok) {
          const data = await response.json();
          setAllSizes(data);
          if (data.length > 0) {
            setSelectedOption(data[0]); // Select the first option by default
          }
        } else {
          // Handle the error case
          console.error("Failed to fetch group sizes");
        }
      } catch (error) {
        // Handle any network or general error
        console.error("Error occurred while fetching group sizes:", error);
      }
    };

    fetchSizes();
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    const minCount = option.minValue;
    const adultMinCount = Math.floor(minCount / 2);
    const kidsMinCount = Math.ceil(minCount / 2);
    setAdultCount(adultMinCount); // Set adult count to half of minCount
    setKidsCount(kidsMinCount); // Set kids count to remaining half of minCount
    setPopupVisible(true);
  };

  const [adultCount, setAdultCount] = useState(selectedOption?.minValue ? Math.floor(selectedOption.minValue / 2) : 0);
  const [kidsCount, setKidsCount] = useState(selectedOption?.minValue ? Math.ceil(selectedOption.minValue / 2) : 0);

  const incrementAdult = () => {
    if (selectedOption && adultCount + 1 <= selectedOption.maxValue) {
      setAdultCount(adultCount + 1);
      const newsProgressPercentage = 40;
      setProgressPercentage(newsProgressPercentage);
      if (kidsCount + 1 + adultCount + 1 > selectedOption.maxValue) {
        setKidsCount(selectedOption.maxValue - (adultCount + 1));
        setShowAlertPopup(true);


      }
    }
  };

  const decrementAdult = () => {
    if (adultCount > selectedOption?.minValue / 2) {
      setAdultCount(adultCount - 1);
      const newsProgressPercentage = 40;
      setProgressPercentage(newsProgressPercentage);
      if (kidsCount + adultCount - 1 < selectedOption.minValue) {
        setKidsCount(selectedOption.minValue - (adultCount - 1));
        setShowAlertPopup(false);
      }
    }
  };

  const incrementKids = () => {
    if (selectedOption && kidsCount + 1 <= selectedOption.maxValue) {
      setKidsCount(kidsCount + 1);
      const newsProgressPercentage = 40;
      setProgressPercentage(newsProgressPercentage);
      if (adultCount + 1 + kidsCount + 1 > selectedOption.maxValue) {
        setAdultCount(selectedOption.maxValue - (kidsCount + 1));
        setShowAlertPopup(true);

      }
    }
  };

  const decrementKids = () => {
    if (kidsCount > selectedOption?.minValue / 2) {
      setKidsCount(kidsCount - 1);
      const newsProgressPercentage = 40;
      setProgressPercentage(newsProgressPercentage);
      if (adultCount + kidsCount - 1 < selectedOption.minValue) {
        setAdultCount(selectedOption.minValue - (kidsCount - 1));
        setShowAlertPopup(false);
      }
    }
  };

  const totalCount = adultCount + kidsCount;

  useEffect(() => {
    if (showAlertPopup) {
      // Show alert popup when count reaches maximum value
      alert("Move to next size");
      setShowAlertPopup(false); // Reset the flag
    }
  }, [showAlertPopup]);

  return (
    <div>
      <Header />
      <div className="container">
        <h3 className="looks">Looks cool! Go ahead</h3>
        <p className="times">18th August 2022, 11:00 am - 12.00 pm, Rattha Group...</p>
        <br />
        <div className="row align-items-center">
          <div className="col-auto">
            <img src={Emoji1} style={{ width: 50, height: 30 }} alt="Emoji1" />
          </div>
          <div className="col">
            <h5 className="mb-0">Select Your Group Size</h5>
          </div>
        </div>

        <br />
        <div className="row">
          {allSizes.map((data) => (
            <div
              key={data.id}
              className={`card mx-5 ${selectedOption === data ? 'clicked' : ''}`}
              onClick={() => {
                handleOptionChange(data);
              }}
            >
              <img src={GroupSizeImage} style={{ width: 30, height: 30 }} alt="GroupSize" />
              <br />
              <div className={data.groupType}>
                <span className="gsize" style={{ fontSize: '20px' }}>{data.minValue}+<br /></span>
                <span className="gsize">{data.groupType}</span>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        {popupVisible && selectedOption && (
          <div className="popup">
            <div className="popup-content">
              <div className="second">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img src={Vector} style={{ width: 50, height: 30 }} alt="Vector" />
                  </div>
                  <div className="col">
                    <div className="d-flex align-items-center">
                      <h5 className="mb-0 mr-3 ">Select No of Adults & Kids</h5>
                    </div>
                    <h6 className="mb-0 h6img">
                      <img src={Vector} style={{ width: 20, height: 20 }} alt="Vector" />
                      &nbsp;Total - {totalCount}
                    </h6>
                  </div>

                </div>

                <p className="times">You can select minimum {selectedOption.minValue} people including adults and kids</p>
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td className="tdtime"><p className="times">Adults</p></td>
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="tdtime"><p className="times">Kids</p></td>
                    </tr>
                    <tr>
                      <td className="tdtime">
                        <button className="counts-button" onClick={decrementAdult}>-</button>
                        <span className="counts mx-2 my-2">{adultCount}</span>
                        <button className="counts-button" onClick={incrementAdult}>+</button>
                      </td>
                      <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                      <td className="tdtime">
                        <button className="counts-button" onClick={decrementKids}>-</button>
                        <span className="counts mx-2 my-2">{kidsCount}</span>
                        <button className="counts-button" onClick={incrementKids}>+</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        <img src={BtmImg} alt="Bottom" className="btm-image" />
      </div>
      <Footer2040 progressPercentage={progressPercentage}></Footer2040>
    </div>
    // footer

  );
};

export default GroupSize;