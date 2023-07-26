import React from 'react';
import { useState, useEffect } from 'react';
import Plate from '../Assets/plates.png';
import Veg from '../Assets/veg_item_icon.png';
import Nonveg from '../Assets/non_veg_item_icon.png';
import {Typography, Box} from '@mui/material';
import styles from './CSS/ChangingBody2.module.css';


const ChangingBodyComponent2 = ({maxFoodItems, vegItemsSelected, nonVegItemsSelected }) => {

const [vegFinal, setVegFinal] = useState([]);

const totalItemCount = Object.values(maxFoodItems).reduce((total, count) => total + count, 0);

const plateSize = 250 + (totalItemCount - 5) * 10;

  useEffect(() => {
    // console.log(vegItemsSelected);
  }, [vegItemsSelected]);

  // console.log(vegItemsSelected);
  useEffect(() => {
    // console.log(nonVegItemsSelected);
  }, [nonVegItemsSelected]);
  return (
<Box
  paddingTop="30px"
  paddingLeft= "10px"
  paddingRight= "50px"
  paddingBottom= "100px"
  width = "500px"
  sx= {{
    boxShadow: '0px 0px 10.30257797241211px 0px rgba(0, 0, 0, 0.07) inset',
    // background: 'red',
    // maxWidth: '100%',
    // margin: '0 auto',
    '@media screen and (max-width: 1550px)': {
      maxWidth: '1550px',
      width: '100%',
      paddingLeft: '130px',

      
    },
    '@media (max-width: 1125px)': {
      paddingLeft: '40px',
      },
      '@media (max-width: 600px)': {
        paddingLeft: '10px',
        },
    // Add more styles as needed
  }}
>      


<Typography
          color='var(--dark)'
          variant='body1'
          fontSize='18px'
          sx={{
            marginBottom: '15px',
            '@media screen and (max-width: 450px)': {
              fontSize: '16px',
            },
          }}
        >
          Small Plate
        </Typography>
        <Typography
            variant='body2'
            color='var(--lightest)'
            fontSize='14px'
            sx={{
              marginBottom: '40px',
              '@media screen and (max-width: 450px)': {
                fontSize: '12px',
              },
            }}
          >
            1 starter + 1 curry + 1 bread + 1 white rice + 1 dessert
          </Typography>
        <Box sx={{
    '@media screen and (max-width: 1550px)': {
      display: 'flex',
      justifyContent: 'space-between',
      '@media screen and (max-width: 900px)': {
        paddingRight: '0px',
        
    },
    '@media screen and (max-width: 800px)': {
      flexDirection: 'column',
      
  },
      '@media screen and (max-width: 450px)': {
        flexDirection: 'column',
        }
    },
  }}>
    
    <Box>

    
    
        

          
          <div style={{ position: 'relative', height: `${plateSize}px`, width: `${plateSize}px`, marginBottom: '20px' }}>
  <img src={Plate} alt="" height={`${plateSize}px`} width={`${plateSize}px`} />

  {vegItemsSelected.map((item, index) => {
    const totalItems = vegItemsSelected.length;
    const angle = (index * (360 / totalItems)) + 90; // Calculate the angle for each image
    const radius = 70 + (totalItems - 5) * 7; // Calculate the radius based on the total item count

    // Calculate the x and y coordinates with respect to the center of the plate
    const centerX = plateSize / 2;
    const centerY = plateSize / 2;
    const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

    return (
      <img
        key={item.id}
        src={require(`../Assets/${item.productsName}.png`)}
        alt={item.productsName}
        style={{
          position: 'absolute',
          top: `${y - 37.5}px`, // Adjust the vertical position with the y-coordinate
          left: `${x - 37.5}px`, // Adjust the horizontal position with the x-coordinate
          height: '75px',
          width: '75px',
        }}
      />
    );
  })}
</div>


    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
    <img src={Veg} height='20px' width = '20px' alt="" />
    <Typography color='var(--darker)' paddingLeft= '10px' variant='body2' fontSize='20px' sx = {{'@media screen and (max-width: 450px)': {
                fontSize: '16px',
              },}}>Veg</Typography>
  </Box>
  
  <Typography variant='body2' fontSize='18px'>
  {Object.values(vegItemsSelected).map((item, index) => (
    <React.Fragment key={index}>

      <span style={{ color: 'var(--lightest)' }}>{item.productsName}</span>
      {index !== Object.values(vegItemsSelected).length - 1 && <span>, </span>}
    </React.Fragment>
  ))}
</Typography>

</Box>
  
</Box>
    



     

       
       
<Box sx={{'@media screen and (max-width: 1550px)': {
          marginRight: '200px',
          width: '400px',
    },'@media screen and (max-width: 1100px)': {
      marginRight: '50px',
      width: '400px',
},'@media screen and (max-width: 900px)': {
  marginRight: '0px',
  width: '320px',
  
},'@media screen and (max-width: 450px)': {
      marginRight: '200px',}}}>
<div style={{ position: 'relative', height: `${plateSize}px`, width: `${plateSize}px`, marginBottom: '20px' }}>
  <img src={Plate} alt="" height={`${plateSize}px`} width={`${plateSize}px`} />

  {nonVegItemsSelected.map((item, index) => {
    const totalItems = nonVegItemsSelected.length;
    const angle = (index * (360 / totalItems)) + 90; // Calculate the angle for each image
    const radius = 70 + (totalItems - 5) * 7; // Calculate the radius based on the total item count

    // Calculate the x and y coordinates with respect to the center of the plate
    const centerX = plateSize / 2;
    const centerY = plateSize / 2;
    const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
    const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

    return (
      <img
        key={item.id}
        src={require(`../Assets/${item.productsName}.png`)}
        alt={item.productsName}
        style={{
          position: 'absolute',
          top: `${y - 37.5}px`, // Adjust the vertical position with the y-coordinate
          left: `${x - 37.5}px`, // Adjust the horizontal position with the x-coordinate
          height: '75px',
          width: '75px',
        }}
      />
    );
  })}
</div>


      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '30px', marginBottom: '20px'}}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={Nonveg} height= '20px' width = '20px' alt="" />
          <Typography color='var(--darker)' paddingLeft= '10px' variant='body2' fontSize='20px' sx = {{'@media screen and (max-width: 450px)': {
                fontSize: '16px',
              },}}>Non Veg</Typography>
        </Box>
        <Typography variant='body2' fontSize='18px'>
          {nonVegItemsSelected.map((item, index) => (
            <React.Fragment key={item.id}>
              <span style={{ color: 'var(--lightest)' }}>{item.productsName}</span>
              {index !== nonVegItemsSelected.length - 1 && <span>, </span>}
            </React.Fragment>
          ))}
        </Typography>
      </Box>
       </Box>
       </Box>

    </Box>
  );
};

export default ChangingBodyComponent2;
