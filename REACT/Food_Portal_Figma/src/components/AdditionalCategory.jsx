import './AdditionalCategory.css';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CategoryImg from '../Images/Category.png';
import { Row, Col, Card, Alert, Button } from 'react-bootstrap';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { AppContext } from '../App';
import Veg2 from "../Images/Veg2.png";
import Nonveg2 from "../Images/Nonveg2.png";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AdditionalCategory() {
  const [Category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [alignment, setAlignment] = useState('All');
  const { dataList, setDataList } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [checkedIndexes, setCheckedIndexes] = useState([]);
  const [currentcategory, setCurrentcategory] = useState(1);
  const [isveg, setIsveg] = useState();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://localhost:7245/api/AdditionalCategoryMasters/View_All_AdditionalCategoryMasters'
        );
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchData2 = async () => {
      console.log(currentcategory);

      try {
        const response2 = await axios.get(
          'https://localhost:7245/api/AdditionalProducts/View_by_category_AdditionalProducts?cat=' + currentcategory
        );
        setProduct(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    fetchData2();
  }, [currentcategory]);


  const handleCategoryClick = (categoryItem) => {
    console.log(categoryItem);
    setCurrentcategory(categoryItem);

  };


  const handleCheck = (name) => (event) => {
    const isChecked = event.target.checked;
    const additionalProductsName = name.id;

    if (isChecked) {
      const updatedData = {
        additionalProductsId: additionalProductsName,
        orderId: '#E0014d',
        quantity: 0,
        cost: 0,
      };
      setDataList((prevDataList) => [...prevDataList, updatedData]);
      console.log(dataList);

      if (!checkedIndexes.includes(additionalProductsName)) {
        setCheckedIndexes((prevIndexes) => [...prevIndexes, additionalProductsName]);
      }
    } else {
      console.log('Checkbox is unchecked for item:', name);
      const filteredDataList = dataList.filter(
        (item) => item.additionalProductsId !== additionalProductsName
      );
      setDataList(filteredDataList);

      if (checkedIndexes.includes(additionalProductsName)) {
        setCheckedIndexes((prevIndexes) =>
          prevIndexes.filter((index) => index !== additionalProductsName)
        );
      }
    }
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const incrementVeg = (item) => {
    const updatedDataList = dataList.map((dataItem) => {
      if (dataItem.additionalProductsId === item.id) {
        return {
          ...dataItem,
          quantity: dataItem.quantity + 1,
        };
      }
      return dataItem;
    });
    setDataList(updatedDataList);
  };

  const decrementVeg = (item) => {
    const updatedDataList = dataList.map((dataItem) => {
      if (dataItem.additionalProductsId === item.id && dataItem.quantity > 0) {
        return {
          ...dataItem,
          quantity: dataItem.quantity - 1,
        };
      }
      return dataItem;
    });
    setDataList(updatedDataList);
  };

  const postDataToDatabase = async (addpro) => {
    console.log(dataList);
    const postdata = addpro;
    console.log(postdata);
    fetch('https://localhost:7245/api/AdditionalProductsDetails/Add_AdditionalProductsDetail', {
      method: 'POST',
      headers: {
        accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postdata),
    })
      .then(async (data) => {
        console.log(data);
        if (data.status === 201) {
          const myData = await data.json();
          console.log(myData);
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  const handleCloseAlert = (index) => {
    setCheckedIndexes((prevIndexes) => prevIndexes.filter((idx) => idx !== index));

    const filteredDataList = dataList.map((item) => {
      if (item.additionalProductsId === index) {
        return {
          ...item,
          quantity: 0,
        };
      }
      return item;
    });
    setDataList(filteredDataList);
  };
  const handleAllClick = async () => {
    console.log("All button clicked");
    try {
      // Fetch all items without filtering by isveg parameter
      const response2 = await axios.get(
        'https://localhost:7245/api/AdditionalProducts/View_by_category_AdditionalProducts?cat=' + currentcategory
      );
      setProduct(response2.data);

      // Update the isveg state to null (or any other value that indicates neither Veg nor Non-veg)
      setIsveg(null);

      console.log(product);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleVegClick = async () => {
    setIsveg(true);
    const veg = true;
    try {
      const response2 = await axios.get(
        'https://localhost:7245/api/AdditionalProducts/View_by_foodtype_AdditionalProducts?isveg=' +
        veg +
        '&cat=' +
        currentcategory);
      setProduct(response2.data);
      console.log(product);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log("Veg button clicked");
  };
  const handleNonVegClick = async () => {
    setIsveg(false);
    const veg = false;

    try {
      const response2 = await axios.get(
        'https://localhost:7245/api/AdditionalProducts/View_by_foodtype_AdditionalProducts?isveg=' +
        veg +
        '&cat=' +
        currentcategory);
      setProduct(response2.data);
      console.log(product);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log("Non-veg button clicked");
  };

  const handleClick = () => {
    postDataToDatabase(dataList);
  };




  return (
    <>
      <div>
        <div className="Category1">
          <h2>
            <img src={CategoryImg} alt="Category" /> <b>Category</b>
          </h2>
        </div>

        <div className="Top-Header">
          <div className="Search-Bar">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search item..."
            />
          </div>

          <div className="toggle">
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton
                value="All"
                style={alignment === 'All' ? { backgroundColor: 'orange', color: 'white' } : {}}
                onClick={handleAllClick}

              >
                All
              </ToggleButton>
              <ToggleButton
                value="Veg"
                style={alignment === 'Veg' ? { backgroundColor: 'orange', color: 'white' } : {}}
                onClick={handleVegClick}

              >
                Veg
              </ToggleButton>
              <ToggleButton
                value="Non-veg"
                style={alignment === 'Non-veg' ? { backgroundColor: 'orange', color: 'white' } : {}}
                onClick={handleNonVegClick}

              >
                Non-veg
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className="top-header2">
          {Category === null ? (
            <p>Loading...</p>
          ) : (
            <div className="Category2">
              {Category.map((categoryItem, categoryIndex) => {
                // Find the number of items in each category based on the additionalCategoryId
                const categoryItemCount = product.filter(item => item.additionalCategoryId === categoryItem.id).length;

                return (
                  <div key={categoryIndex} className="item">
                    <h5 onClick={() => handleCategoryClick(categoryItem.id)}>
                      {categoryItem.additionalCategory} ({categoryItemCount})
                    </h5>

                    {categoryIndex !== Category.length - 1 && <hr className="" />}
                  </div>
                );
              })}
            </div>

          )}

          <Row className="wholebdy">
            {product
              .filter((item) => item.additionalProductsName.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((item, index) => {
                const quantity =
                  dataList.find((dataItem) => dataItem.additionalProductsId === item.id)?.quantity || 0;

                return (
                  <Col xs={2} sm={2} md={4} key={index}>
                    <Card className="card">
                      <Card.Body>
                        <Card.Img
                          className="card-img-top"
                          variant="top"
                          src={require(`../Images/FoodCategory/Biriyanis/${item.additionalProductsName}.png`)}
                        />

                        <div className="checkandbutton">
                          <label className="custom-checkbox">
                            <input type="checkbox" onChange={handleCheck(item)} />
                            <span className="checkmark"></span>
                          </label>

                          <Card.Text>
                            <div>
                              {item.isVeg ? (
                                <img src={Veg2} alt='veggg' height="12px" width="15px" />
                              ) : (
                                <img src={Nonveg2} alt='nonveggg' height="12px" width="15px" />
                              )}
                              <p>{item.additionalProductsName}</p>
                            </div>
                          </Card.Text>
                        </div>

                        <div className="btnon">
                          <button className="btn1" onClick={() => decrementVeg(item)}>
                            -
                          </button>{' '}
                          &nbsp;
                          <span className="cnt1">{quantity}</span>
                          <button className="btn1" onClick={() => incrementVeg(item)}>
                            +
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>

          {product
            .filter((item) => item.additionalProductsName.toLowerCase().includes(searchQuery.toLowerCase()))
            .length === 0 && <p className="product-not-found"> ☹️ Product Not Found !</p>}
        </div>

        <div className="center-container">
          {dataList.length === 0 ? (
            <p>No objects in the list</p>
          ) : (
            <ul>
              {dataList.map((item, index) => (
                <li key={index}>
                  {item.additionalProductsId}
                  <br />
                  {item.quantity}
                  <br />
                  {item.orderId}
                  <br />
                </li>
              ))}
            </ul>
          )}

          <button onClick={handleClick}>Click Me</button>

        </div>
      </div>

      <div className="footer">
        {checkedIndexes.length > 0 && (
          <div className="alert">
            {checkedIndexes.map((index) => {
              const item = product.find((item) => item.id === index);
              const quantity = dataList.find((dataItem) => dataItem.additionalProductsId === index)?.quantity || 0;
              return (
                <Alert
                  key={index}
                  variant="warning"
                  onClose={() => handleCloseAlert(index)}
                  dismissible
                  className="custom-alert"
                >
                  <p className="alert-text">
                    <strong>{item.additionalProductsName}</strong> ({quantity})
                  </p>
                </Alert>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default AdditionalCategory;










