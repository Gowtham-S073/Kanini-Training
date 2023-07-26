

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Vector from '../Images/Vector.png';
import '../addonPage/addon.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css';

const Addon = () => {
  const [datum, setDatum] = useState([]);
  const [checkedIndexes, setCheckedIndexes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7245/api/AddOnsMasters/View_All_AddOnsMasters');
        const updatedData = response.data.map((item) => ({ ...item, cnt: 0, isChecked: false }));
        setDatum(updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (index) => {
    setDatum((data) => {
      const updatedData = [...data];
      updatedData[index] = {
        ...updatedData[index],
        isChecked: !updatedData[index].isChecked,
        cnt: updatedData[index].isChecked ? 0 : 1,
      };
      return updatedData;
    });

    setCheckedIndexes((indexes) => {
      if (indexes.includes(index)) {
        return indexes.filter((i) => i !== index);
      } else {
        return [...indexes, index];
      }
    });
  };

  const handleIncrement = (index) => {
    if (datum[index].isChecked) {
      setDatum((data) => {
        const updatedData = [...data];
        updatedData[index].cnt += 1;
        return updatedData;
      });
    }
  };

  const handleDecrement = (index) => {
    if (datum[index].isChecked && datum[index].cnt > 0) {
      setDatum((data) => {
        const updatedData = [...data];
        updatedData[index].cnt -= 1;
        return updatedData;
      });
    }
  };

  const handleCloseAlert = (index) => {
    setDatum((data) => {
      const updatedData = [...data];
      updatedData[index].isChecked = false;
      updatedData[index].cnt = 0;
      return updatedData;
    });

    setCheckedIndexes((indexes) => indexes.filter((i) => i !== index));
  };

  return (
    < >
      <div className='desktop'>
        {/* <Header /> */}
        <div className="vecimg">
          <img src={Vector} alt="" />
          <h2 className="heading">Add Ons</h2>
        </div>
        <Row className="wholebdy">
          {datum.map((item, index) => (
            <Col key={index} sm={6} md={3}>
              <Card className="card">
                <Card.Body>
                  <div className="btnon">
                    <button
                      className="btn1"
                      onClick={() => handleDecrement(index)}
                      disabled={!item.isChecked}
                    >
                      -
                    </button>{' '}
                    &nbsp;
                    <span className="cnt1">{item.cnt}</span>
                    <button
                      className="btn1"
                      onClick={() => handleIncrement(index)}
                      disabled={!item.isChecked}
                    >
                      +
                    </button>
                  </div>
                  <Card.Img
                    className="card-img-top"
                    variant="top"
                    src={require(`../Images/${item.addOnsName}.png`)}
                  />
                  <Card.Text>
                    <div>
                      <p className="name">{item.addOnsName}</p>
                      <p>{item.unitPrice}</p>
                      <img src={item.addOnsImage} alt="" />
                    </div>
                  </Card.Text>
                </Card.Body>
                <div>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      checked={item.isChecked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* <Footer1> */}
        <div className="alert">
          {checkedIndexes.map((index) => (
            <Alert
              key={index}
              variant="warning"
              onClose={() => handleCloseAlert(index)}
              dismissible
              className="custom-alert"
            >
              {/* <Alert.Heading>Holy guacamole!</Alert.Heading> */}
              <p className="alert-text">
                {/* You should check in on some of those fields below: */}
                <br />
                <strong>{datum[index].addOnsName}</strong> ({datum[index].cnt})
                {/* <Button className="close-button" onClick={() => handleCloseAlert(index)}>
                  X
                </Button> */}
              </p>
            </Alert>
          ))}
        </div>
        {/* </Footer1> */}
      </div>
    </>
  );
};

export default Addon;










