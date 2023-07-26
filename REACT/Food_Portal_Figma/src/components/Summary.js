





import React, { useEffect, useState, useContext } from 'react';
import styles from '../Css/Summary.module.css';
import { AppContext } from '../App';




function Summary() {
  const [orderId, setOrderId] = useState({
    idInt: 0,
    idString: '',
  });
  const { trackid, setTrackid } = useContext(AppContext);

  const [dateOnly, setDateOnly] = useState('');
  const [platetotal, setplateTotal] = useState(0.0);
  const [summaryDetails, setSummaryDetails] = useState([]);
  const [additional, setAdditional] = useState(0.0);
  const [addons, setAddons] = useState(0.0);
  const [total,setTotal] = useState(0.0);
  const [totalPayable,setTotalPayable] = useState(0.0);
  const [checktrackid, setChecktrackid] = useState({
    idInt: 0,
    idString: '',
  });
  const [username, setUsername] = useState('Kanna@5873');


  const handleInputChange = (event) => {
    setTrackid(event.target.value);
    localStorage.setItem('trackstatusid', event.target.value);
    setChecktrackid((prevState) => ({
      ...prevState,
      idString: event.target.value,
    }));
  };

  const calculateAddtionalTotalPrice = () => {
    let sum = 0.0;
    if (summaryDetails && summaryDetails.additionalProductInfo) {
      summaryDetails.additionalProductInfo.forEach((product) => {
        sum += product.priceTotal || 0.0; // Ensure the value is a number, defaults to 0 if undefined
      });
    }
    console.log(sum);
    return sum;
  };

  const calculateAddonsTotalPrice = () => {
    let sum = 0.0;
    if (summaryDetails && summaryDetails.additional) {
      summaryDetails.additional.forEach((product) => {
        sum += product.priceTotal || 0.0; // Ensure the value is a number, defaults to 0 if undefined
      });
    }
    console.log(sum);
    return sum;
  };

  var handleTrackOrder1 = () => {
    console.log(checktrackid.idString);
    const apiUrl = `https://localhost:7245/api/TrackStatus/check_trackid/checktrackid?username=${encodeURIComponent(
      username
    )}`;
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...checktrackid }),
    })
      .then(async (data) => {
        if (data.status == 200) {
          var myData = await data.json();

          console.log(myData);
          // checktrackid.idString = id;
          // console.log(checktrackid.idString);
          // localStorage.setItem('trackstatusid', id);
          // setTrackid(id);
          handleTrackOrder2();
          
        } else {
          alert('Invalid Track ID');
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  const handleTrackOrder2 = () => {
    orderId.idString = localStorage.getItem('trackstatusid');
    console.log(orderId.idString);

    fetch('https://localhost:7245/api/TrackStatus/Get_Order_Summary/TrackId', {
      method: 'POST',
      headers: {
        accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...orderId }),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        setSummaryDetails(myData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    let ignore = false;

    const handleTrackOrder = () => {
      orderId.idString = localStorage.getItem('trackstatusid');

      fetch('https://localhost:7245/api/TrackStatus/Get_Order_Summary/TrackId', {
        method: 'POST',
        headers: {
          accept: 'text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...orderId }),
      })
        .then(async (data) => {
          if (!ignore) {
            var myData = await data.json();
            console.log(orderId);
            console.log(myData);
            setSummaryDetails(myData);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    if (!ignore) {
      handleTrackOrder();
    }

    return () => {
      ignore = true;
    };
  }, [orderId]);

  useEffect(() => {
    const deliveryDate = summaryDetails?.deliveryDate?.split('T')[0] ?? '';
    setDateOnly(deliveryDate);

    const multipliedValue = summaryDetails?.count * summaryDetails?.plateCost ?? 0;
    setplateTotal(multipliedValue);
    const Addtionalsum = calculateAddtionalTotalPrice();
    setAdditional(Addtionalsum);
    const Addonsum = calculateAddonsTotalPrice();
    setAddons(Addonsum);
    const tempTotal= multipliedValue + Addtionalsum + Addonsum;
    const discount= tempTotal * 0.1;
    const costafterdiscount= tempTotal - discount;
    const tax =  costafterdiscount *0.1;
    const costwithtax = tax + costafterdiscount;
    console.log(costwithtax);
    setTotal(tempTotal);
    const formattedValue = costwithtax.toFixed(2);

    setTotalPayable(formattedValue);
  }, [summaryDetails]);

  return (
    <section className={styles.mobile}>
      <div className={styles.whole_section_outer_div}>
        <div className={styles.whole_section_inner_div}>
          <div className={styles.track_btn}>
            <div className={styles.track_btn_item1}>
              <input type="text" className={styles.track_input} placeholder={trackid} onChange={handleInputChange} />
            </div>
            <div className={styles.track_btn_item2}>
              <input type="submit" className={styles.track} value="Track" onClick={handleTrackOrder1} />
            </div>
          </div>
          <div className={styles.status}>
            <div className={styles.status_item1}>
              <h1>
                Status:<span className={styles.sta}>Pending</span>
              </h1>
            </div>
            <div className={styles.message}>
              <input type="submit" className={styles.message_btn} value="message" />
            </div>
          </div>
          <div className={styles.whole_summary_outer_div}>
            <div className={styles.summary}>
              <div className={styles.order_summary}>
                <div className={styles.order_summary1}>
                  <div className={styles.order_item1}>
                    <div className={styles.para}>
                      Order ID: <span className={styles.order_summary_content}>{summaryDetails.orderId}</span>
                    </div>
                  </div>
                  <div className={styles.order_item2}>
                    <div className={styles.para}>
                      Delivery Date: <span className={styles.order_summary_content}>{dateOnly}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.order_summary2}>
                  <div className={styles.order_item3}>
                    <div className={styles.para}>
                      Time: <span className={styles.order_summary_content}>{summaryDetails.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.underline} id={styles.order_underline}>
                <hr />
              </div>
              <div className={styles.sub_head}>
                <div className={styles.para}>Contact Details</div>
              </div>
              <div className={styles.contact_summary_containers}>
                <div className={styles.contact_summary1}>
                  <div className={styles.contact_item1}>
                    <div className={styles.item_head}>User Name</div>
                    <div className={styles.item_content}>{summaryDetails.name}</div>
                  </div>
                  <div className={styles.contact_item2}>
                    <div className={styles.item_head}>User Contact Number</div>
                    <div className={styles.item_content}>+91 {summaryDetails.phoneNumber}</div>
                  </div>
                  <div className={styles.contact_item3}>
                    <div className={styles.item_head}>User Email</div>
                    <div className={styles.item_content}>{summaryDetails.email}</div>
                  </div>
                </div>
                <div className={styles.contact_summary2}>
                  <div className={styles.contact_item4}>
                    <div className={styles.item_head}>Delivery Address</div>
                    <div className={styles.item_content}>{summaryDetails.address}</div>
                  </div>
                </div>
              </div>
              <div className={styles.underline}>
                <hr />
              </div>
              <div className={styles.sub_head}>
                <div className={styles.para}>Other Details</div>
              </div>
              <div className={styles.other_details_summary}>
                <div className={styles.other_details_summary1}>
                  <div className={styles.other_details_item1}>
                    <div className={styles.item_head}>Allergies</div>
                    <div className={styles.item_content}>{summaryDetails.allergies}</div>
                  </div>
                  <div className={styles.other_details_item2}>
                    <div className={styles.item_head}>Plate Size</div>
                    <div className={styles.item_content}>
                      {summaryDetails.plateSize} ({summaryDetails.foodtype})
                    </div>
                  </div>
                </div>
                <div className={styles.other_details_summary2}>
                  <div className={styles.other_details_item3}>
                    <div className={styles.item_head}>Delivery Type</div>
                    <div className={styles.item_content}>{summaryDetails.deliveryType}</div>
                  </div>
                  <div className={styles.other_details_item4}>
                    <div className={styles.item_head}>Group Size</div>
                    <div className={styles.item_content}>
                      {summaryDetails.groupSize} ({summaryDetails.count})
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.underline}>
                <hr />
              </div>
              <div className={styles.sub_head}>
                <div className={styles.para}>Additional Details</div>
              </div>
              <div className={styles.additional_details_item}>
                <div className={styles.item_content} id={styles.additional_con}>
                  Ratha Tek Meadows Rd, Elcot Sez, Sholinganallur, Chennai, Tamil Nadu 600119
                </div>
              </div>
            </div>
          </div>







          <div className={styles.whole_table}>
            <div className={styles.table1}>
              <h2 className={styles.table_heading}>order details</h2>
              <div className={`${styles.row} mt-5`}>
                <div className="col">
                  <div className={styles.table_responsive}>
                    <table className={`${styles.table} ${styles.table_borderless} ${styles.custom_table1}`}>
                      <thead className={`${styles.thead_light} ${styles.table_header}`}>
                        <tr>
                          <th scope="col" className={`${styles.common_thead} ${styles.table1_th1}`} >items</th>
                          <th scope="col" className={`${styles.text_right} ${styles.common_thead} ${styles.table1_th2}`} >Qty</th>
                          <th scope="col" className={`${styles.text_right} ${styles.common_thead} ${styles.table1_th2}`}>Cost/Plate</th>
                          <th scope="col" className={`${styles.text_right} ${styles.common_thead} ${styles.table1_th2}`} >Amount</th>
                        </tr>
                      </thead>
                      <tbody className={styles.table_body}>
                        <tr>
                          <td className={`${styles.table_color_black} ${styles.tdata_common}`}>{summaryDetails.groupSize} : {summaryDetails.foodtype}</td>
                          <td  className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>{summaryDetails.count}</td>
                          <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>${summaryDetails.plateCost}</td>
                          <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>${platetotal}</td>
                        </tr>
                        <tr>
                          <td className={styles.menu}>{summaryDetails.menu}</td>
                          
                        </tr>
                        <tr>
                          <td colSpan="4" style={{ borderTop: '1px solid grey' }}></td>
                        </tr>

                        {summaryDetails.additional && summaryDetails.additional.length > 0 && (
                          <tr>
                            <td className={`${styles.table_color_black} ${styles.tdata_common}`}>Add ons</td>
                           
                          </tr>
                        )}
                        {summaryDetails.additional &&
                          summaryDetails.additional.map((addon, index) => (
                            <tr key={index}>
                              <td className={styles.tdata_common} style={{color:'#484848'}}>{addon.addonName}</td>
                              <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>{addon.quantity}</td>
                              <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>${addon.price}</td>
                              <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>${addon.priceTotal}</td>
                            </tr>
                          ))}

                        <tr>
                          
                        </tr>
                        
                        {summaryDetails.additional && summaryDetails.additional.length > 0 && (
                        <tr>
                          <td colSpan="4" style={{ borderTop: '1px solid grey' }}></td>
                        </tr>
                        )}



                        {summaryDetails.additionalProductInfo && summaryDetails.additionalProductInfo.length > 0 && (
                          <tr>
                            <td className={`${styles.table_color_black} ${styles.tdata_common}`}>Additional Products</td>
                            
                          </tr>
                        )}

                        {summaryDetails.additionalProductInfo &&
                          summaryDetails.additionalProductInfo.map((additionalproduct, index) => (
                            <tr key={index}>
                              <td className={styles.tdata_common} style={{color:'#484848'}}>{additionalproduct.additionalProductName}</td>
                              <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>{additionalproduct.quantity}</td>
                              <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>${additionalproduct.price}</td>
                              <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>${additionalproduct.priceTotal}</td>
                            </tr>
                          ))}
                        <tr></tr>

                        
                        {summaryDetails.additionalProductInfo && summaryDetails.additionalProductInfo.length > 0 && (
                        <tr>
                          <td colSpan="4" style={{ borderTop: '1px solid grey' }}></td>
                        </tr>
                        )}
                        
                        <tr>
                          <td className={styles.total_amount}>Total</td>
                          <td className={styles.text_right}></td>
                          <td className={styles.text_right}></td>
                          <td className={styles.text_right}>
                            <span className={styles.total_amount} style={{ color: '#00B373'}}>${total}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.table2}>
              <h2 className={styles.table_heading}>Billing details</h2>
              <div className={`${styles.row} mt-5`}>
                <div className="col">
                  <div className={styles.table_responsive}>
                    <table className={`${styles.table} ${styles.table_borderless} ${styles.custom_table2}`}>
                      <thead className={`${styles.thead_light} ${styles.table_header}`}>
                        <tr>
                          <th scope="col" className={styles.common_thead} style={{ width: '400px' }}>Payable Summary</th>
                          <th scope="col" className={styles.text_right} style={{ minWidth: '150px', marginRight: '150px' }}></th>


                        </tr>
                      </thead>
                      <tbody className={styles.table_body}>
                        <tr className={styles.Billing}>
                          <td className={styles.tdata_common}>Subtotal</td>


                          <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>${total}</td>
                        </tr>
                        <tr className={styles.Billing}>
                          <td className={styles.tdata_common}>Delivery</td>


                          <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>Free</td>
                        </tr>
                        <tr className={styles.Billing}>
                          <td className={styles.tdata_common}>Discount</td>


                          <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>-$10</td>
                        </tr>
                        <tr className={styles.Billing}>
                          <td className={styles.tdata_common}>Tax</td>


                          <td className={`${styles.text_right} ${styles.tdata_common} ${styles.table_color_black}`}>$10</td>
                        </tr>

                        <tr>
                          <td colSpan="2" style={{ borderTop: '1px solid grey', padding: '0px' }}></td>
                        </tr>

                        <tr>
                          <td className={styles.total_amount}>
                            <span style={{ padding: "16px" }}>Total</span></td>
                          <td className={styles.text_right}>
                            <span className={styles.total_amount} style={{ color: '#00B373', padding: '16px' }}>${totalPayable}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_content}>
          <p>
            If you have any questions, please contact{' '}
            <span className={styles.colored_content}>support@foodhut.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Summary;
