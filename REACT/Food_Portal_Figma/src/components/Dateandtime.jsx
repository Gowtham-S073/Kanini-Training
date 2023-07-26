import * as React from 'react';
import './Dateandtime.css';
import { useState,useEffect } from 'react';
import bg from '../Images/bg 1.png';
import Dateimg from '../Images/date.png'
import time from '../Images/time.png';
import datepicker from '../Images/datepicker.png';
import delivery from '../Images/delivery.png';
import { orange } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import location from '../Images/location.png';
import { Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Header from './header';
import { Link } from 'react-router-dom';


const Dateandtime = () => {
  const [selected, setSelected] = React.useState('Pickup');
  const [isDatePickerOpen, setIsDatePickerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedTimeBtn, setSelectedTimeBtn] = React.useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isTimeEnabled, setIsTimeEnabled] = useState(false);
  const [isDateFilled, setIsDateFilled] = useState(false);
  const [isTimeFilled, setIsTimeFilled] = useState(false);
  const [isDeliveryOptionFilled, setIsDeliveryOptionFilled] = useState(false);
  const [isAddressFilled, setIsAddressFilled] = useState(false);
  const [address, setAddress] = useState('');
  const isButtonDisabled = !isDateFilled || !isTimeFilled || (selected !== 'Pickup' && (!isDeliveryOptionFilled || !isAddressFilled));
  const [unavailableDates, setUnavailableDates] = useState([]);

  const today = dayjs();
  const dateOnly = today.format('YYYY-MM-DD');
  console.log(dateOnly);
 

  useEffect(() => {

    fetchData();
  }, []);

 

  const fetchData = async () => {
    try 
    {
      const response = await fetch(`https://localhost:7217/api/Orders/GetUnAvailableDate/UnAvailableDate${dateOnly}`);
      if (!response.ok)
      {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();

      const extractedDates = jsonData.map((item) => item.unavailableDate.split('T')[0]);
      console.log(extractedDates);
      setUnavailableDates(extractedDates);
    } 
    catch (error) 
    {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (event) => {
    const option = event.target.value;
    setSelected(option);
    setIsDeliveryOptionFilled(true);
    setIsAddressFilled(option === 'Pickup' || !!address);

  };

  const handleDateInputClick = () => {
    setIsDatePickerOpen(true);
  };


  const handleTimeButtonClick = (event) => {
    if (selectedDate) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleApplyButtonClick = () => {

    const selectedTimeSlotText = getTimeSlotText(selectedTimeBtn);

    const inputElement = document.getElementById('time-input');
    inputElement.placeholder = selectedTimeBtn ? selectedTimeSlotText : 'Select time';
    setAnchorEl(null);
    setIsTimeEnabled(true);
    setIsTimeFilled(true);
    setIsDateFilled(!!selectedDate); 
  };

  const handleCancelButtonClick = () => {
    setSelectedTimeBtn(null);
    
    setAnchorEl(null);
    setSelectedDate(null);
    setIsTimeEnabled(false);
    setIsTimeFilled(false);
  };

  const handleTimeBtnClick = (timeBtnId) => {
    setSelectedTimeBtn(timeBtnId);
  };
  

  const getTimeSlotText = (timeBtnId) => {
    switch (timeBtnId) {
      case 1:
        return '10.00 am - 11.00 am';
      case 2:
        return '11.00 am - 12.00 pm';
      case 3:
        return '12.00 pm - 01.00 pm';
      case 4:
        return '01.00 pm - 02.00 pm';
      case 5:
        return '02.00 pm - 03.00 pm';
      case 6:
        return '03.00 pm - 04.00 pm';
      default:
        return '';
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'time-popover' : undefined;

  const theme = createTheme({
    palette: {
      primary: {
        main: orange['A700'],

      },
    },
    
unavailableDay: {
  
  backgroundColor: 'black', 
  color: 'white',
},


  });

  const isDateDisable = (date) => {
    const day = date.day();
  
    const dateString = date.format('YYYY-MM-DD');
 
  if (unavailableDates.includes(dateString)) {
    return true;
  }

  };
  
  const calculatePercentage = () => {
    if (isAddressFilled) {
      return 20; 
    }
 
    return 0 ;
  }

  const buttonDisabledStyle = {
    backgroundColor: '#C1C8CF',
   color: '#FFFFFF',
   fontWeight:500,
    cursor: 'not-allowed', 
    borderStyle:'none',

  };


  return (
    <div>
    <div className="datecontainer">
      <Header></Header>
      <img src={bg} id="bg" alt="background"></img>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

      <div>
        <p id="centertext">Let's Started!</p>
      </div>

      <div>
        <p className="col1">
          <img src={Dateimg} alt="date" id="date"></img>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; When will the party be?
        </p>
      </div>

      <div className="col2">
        <img src={datepicker} alt="datepicker" id="dateimg" />&nbsp; &nbsp;&nbsp;
        <input
          type="text"
          className="datepicker"
          id = "date-input"
          placeholder="Select date"
          style={{fontSize:'16px', color:'#000000'}}
          onClick={handleDateInputClick}
        />
      </div>
      <span className="col2hr"><hr /></span>

      <div className="col3" onClick={handleTimeButtonClick} >
        <img src={time} alt="time" id="timeimg" />&nbsp;&nbsp;&nbsp;
        <input type="text" className="time" id="time-input" placeholder="Select time" style={{backgroundColor:'#fff'}} disabled={!isTimeEnabled}></input>
      </div>
      <span className="col3hr" sx={{color:'#e0e0e0',}}><hr /></span>


      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        style={{
          marginTop: '40px',
          boxShadow: 'none',
        }}
        classes={{
          paper: 'popover-paper',
        }}
      >
        <div class="timeslots">
          <p class="slothead" >Pick a slot</p><br />

          <div class="tcol1"><button class={`time-btn ${selectedTimeBtn === 1 ? 'selected' : ''}`}
            onClick={() => handleTimeBtnClick(1)} >10.00 am - 11.00 am</button></div>

          <div class="tcol2"><button class={`time-btn ${selectedTimeBtn === 2 ? 'selected' : ''}`}
            onClick={() => handleTimeBtnClick(2)} >11.00 am - 12.00 pm</button></div>

          <div class="tcol3"><button class={`time-btn ${selectedTimeBtn === 3 ? 'selected' : ''}`}
            onClick={() => handleTimeBtnClick(3)} >12.00 pm - 01.00 pm</button></div>


          <div class="tcol4"><button class={`time-btn ${selectedTimeBtn === 4 ? 'selected' : ''}`}
            onClick={() => handleTimeBtnClick(4)}>01.00 pm - 02.00 pm</button></div>

          <div class="tcol5"><button class={`time-btn ${selectedTimeBtn === 5 ? 'selected' : ''}`}
            onClick={() => handleTimeBtnClick(5)} >02.00 pm - 03.00 pm</button></div>

          <div class="tcol6"><button class={`time-btn ${selectedTimeBtn === 6 ? 'selected' : ''}`}
            onClick={() => handleTimeBtnClick(6)} >03.00 pm - 04.00 pm</button></div>


          <div class="btns">
            <div><button type="cancel" class="cancel" onClick={handleCancelButtonClick}>Cancel</button></div>
            <div ><button type="submit"class="apply" onClick={handleApplyButtonClick}>Apply</button></div>
          </div>
        </div>
      </Popover>

      <div>
        <p className="col4">
          <img src={delivery} alt="delivery" id="delivery" />&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Select a delivery option
        </p>
      </div>

      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={selected}
          onChange={handleChange}

        >
          <FormControlLabel
            value="Pickup"
            className="radioContainer"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: orange['A700'],
                  },
                  color: '#e0e0e0',
                }}
              />
            }
            label={
              <Typography component="span" sx={{ fontFamily: 'Poppins, sans-serif', color: selected === 'Pickup' ? '#424242' : '#9e9e9e', }}>
                Pickup
              </Typography>
            }
          />

          <FormControlLabel
            value="Delivery"
            className="radioContainer2"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: orange['A700'],
                  },
                  color: '#e0e0e0',
                }}
              />
            }
            label={
              <Typography component="span" sx={{ fontFamily: 'Poppins, sans-serif', color: selected === 'Delivery' ? '#424242' : '#9e9e9e', }}>
                Delivery
              </Typography>
            }
          />

          <FormControlLabel
            value="Delivery & Onsite Management"
            className="radioContainer3"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: orange['A700'],
                  },
                  color: '#e0e0e0',
                }}
              />
            }
            label={
              <Typography component="span" sx={{ fontFamily: 'Poppins, sans-serif',  color: selected === 'Delivery & Onsite Management' ? '#424242' : '#9e9e9e', }}>
                Delivery & Onsite Management
              </Typography>
            }
          />
        </RadioGroup>
      </FormControl>

      {selected === 'Delivery' || selected === 'Delivery & Onsite Management' ? (
        <div>
          <p id="locationdiv">
            <img src={location} id="locimg" alt="location" />
            <input type="text" style={{fontSize:'16px',}} name="location" id="location" placeholder="Address"   onChange={(e) => {
                setAddress(e.target.value);
                setIsAddressFilled(!!e.target.value);
              }}/>
          </p>
          <span className="addhr"><hr/></span>
        </div>
      ) : null}

      {isDatePickerOpen && (
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>

            <DateCalendar
              views={['day']}
              defaultValue={today}
              minDate={today}
              shouldDisableDate={isDateDisable}
              onChange={(date) => setSelectedDate(date)}
      
            class="calendar"
           
            />
            <div class="datebox">
              <Button class="btndatecancel"  onClick={() => setIsDatePickerOpen(false)}>
                Cancel
              </Button>
              <Button class="btndateapply"
              
                onClick={() => {
                  const inputElement = document.getElementById('date-input');
                  inputElement.placeholder = selectedDate ? selectedDate.format('MMMM D, YYYY') : 'Select date';
                  setIsDatePickerOpen(false);
                }}
              >
                Apply
              </Button>

              
            </div>

          </LocalizationProvider>
        </ThemeProvider>
      )}


    </div>
   
 <div>
    <div className="footertime">
    {isDateFilled && isTimeFilled && ((selected === 'Pickup') || (isDeliveryOptionFilled && isAddressFilled)) && (
    <button type="button" className="prbtn">&#60; Back</button> 
    )}
   
      <div className="progress-bar">
        <div className="progresstime" style={{width:`${calculatePercentage()}%`}}></div>
      </div>
      <h6 id="percentagetime" className="mt-1" style={{ left: `${calculatePercentage() === 0 ? '24%' : '34%'}` }}>
      {`${calculatePercentage()}%`}
      </h6>
  
      <button type="button" id="prbtn1"  disabled={isButtonDisabled} style={isButtonDisabled ? buttonDisabledStyle : null}><Link to="/groupsize" style={{color:'white',textDecoration:"none"}}>Continue &#62;</Link></button>
    </div>
  </div>

  </div>

  );
};

export default Dateandtime;
