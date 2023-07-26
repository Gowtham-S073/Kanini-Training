import React, { useState } from 'react';
import './OrderDetail.css';
import Cart from '../Images/Cart.png';
import Additional from '../Images/Additional.png';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Logo from '../Images/Logo.png';
import './header.css';

function OrderDetail() {
  const [alignment, setAlignment] = useState('Soda');

  const handleValueChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment); 
    }
  };
  return (
    <>
      <div>
        <nav>
          <img src={Logo} className="head" alt="headerImage" />
        </nav>
      </div>

      <div className='Detail1'>
        <h3>
          <img src={Cart} alt="Cart" /> <b>Order Details</b>
        </h3>
      </div>
      <div className='Detail2' style={{ display: 'flex' }}>
        <div className='Info1'>
          Order ID: <b>E0001234</b>
        </div>
        <div className='Info1' >
          Delivery Date: <b>Thu, 18 Aug 2022</b>
        </div>
        <div className='Info1' >
          Time: <b>11.00 am - 12.00 pm</b>
        </div>
        <div className='Info1' >
          Total Head Count: <b>25</b>
        </div>
      </div>

      
        {/* Rest of the table content... */}
        <div className="custom-container">
        <div className="row mt-5">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-borderless">
                <tr style={{ backgroundColor: '#EBEBEB', padding:'50px' }}>
                  <th scope="col" style={{ width: '250px' }}>Item</th>
                  <th scope="col" className="text-right" style={{ minWidth: '50px' }}>Qty</th>
                  <th scope="col" className="text-right" style={{ minWidth: '50px' }}>Cost/Plate</th>
                  <th scope="col" className="text-right">Amount</th>
                </tr>
                <tbody style={{ padding: '30px' }}>
                  <tr>
                    <td><b>Small: Veg & Non-veg</b></td>
                    <td className="text-right"><b>2</b></td>
                    <td className="text-right"><b>$15</b></td>
                    <td className="text-right"><b>$30</b></td>
                  </tr>
                  <tr>
                    <td><b>Cut Mirchi Pakora, Chicken 65, Mix Veg korma, Butter chicken, Garlic naan, mushroom biriyani, Egg fried rice, Gulab jamun</b></td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                  </tr>
                  <tr>
                    <td><b>Add ons</b></td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                  </tr>
                  <tr>
                    <td><b>Spoons</b></td>
                    <td className="text-right"><b>25</b></td>
                    <td className="text-right"><b>$2</b></td>
                    <td className="text-right"><b>$50</b></td>
                  </tr>

                  <tr>
                    <td><b>Banana Leafs</b></td>
                    <td className="text-right"><b>25</b></td>
                    <td className="text-right"><b>$3</b></td>
                    <td className="text-right"><b>$25</b></td>
                  </tr>

                  <tr>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                  </tr>


                  <tr>
                    <td><b>Additional Products</b></td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                  </tr>

                  <tr>
                    <td><b>Boneless Chicken Briyani</b></td>
                    <td className="text-right"><b>25</b></td>
                    <td className="text-right"><b>$3</b></td>
                    <td className="text-right"><b>$25</b></td>
                  </tr>

                  <tr>
                    <td>
                      <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        aria-label="Platform"
                        onChange={handleValueChange}
                        width="20px"
                      >
                        <ToggleButton
                          value="Soda"
                          style={
                            alignment === 'Soda'
                              ? { backgroundColor: 'orange', color: 'white' }
                              : {}
                          }
                        >
                          Soda
                        </ToggleButton>
                        <ToggleButton
                          value="Water"
                          style={
                            alignment === 'Water'
                              ? { backgroundColor: 'orange', color: 'white' }
                              : {}
                          }
                        >
                          Water
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                  </tr>

                  <tr>
                    <td colSpan="4" style={{ borderTop: '1px solid grey' }}></td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold"><b>Total</b></td>
                    <td className="text-right"></td>
                    <td className="text-right"></td>
                    <td className="text-right">
                      <span className="font-weight-bold" style={{ color: '#00B373' }}><b>$625</b></span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="4" style={{ borderTop: '1px solid grey' }}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      

      <div className='Detail3' >
        <ul>
          <li ><img src={Additional} alt="Additional" /> Add Additional menu Items</li>
          <li><img src={Additional} alt="Additional" /> Optional Add-ons</li>
        </ul>
      </div>

      <div className='Detail4'>
        <p>Additional Note</p>
        <input
          type="text"
          className="form-control bigger-input"
        />
      </div>

      <div className="footer">
        <button type="button" className="btn"> &#60; Back</button>
        <button type="button" id="btn1">  Continue &#62;</button>
      </div>
    </>
  );
}

export default OrderDetail;
