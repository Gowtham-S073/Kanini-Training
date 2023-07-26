import React, { useState, useEffect, useContext} from 'react';
import Future from '../Assets/future_coffee_icon.png';
import Present from '../Assets/present_coffee_icon.png';
import Past from '../Assets/past_coffee_icon.png';
import Veg from '../Assets/veg_item_icon.png';
import {Box, Typography, List, ListItem, ListItemText} from '@mui/material';
import NonVeg from '../Assets/non_veg_item_icon.png';
import spicy_icon from '../Assets/spicy_icon.png';
import Glutten_free_icon from '../Assets/Glutten_free_icon.png';
import veg_icon from '../Assets/veg_icon.png';
import styles from'./CSS/ChangingBody1.module.css';
import { useMediaQuery, createTheme} from '@mui/material';
import { AppContext } from '../../../App';


// Important comments
// I have used whichcategory and currentcategory both, but i think only whichcategory is enough
//  remember to disable nonveg or veg in changbody2 bsed on veg nonveg prop



const ChangingBodyComponent1 = ({onlyVeg, onlyNonVeg, setOnlyNonVeg, setOnlyVeg, maxFoodItems, whichCategory,setVegItemsSelected, vegItemsSelected ,nonVegItemsSelected, setNonVegItemsSelected }) => {

  const theme = createTheme({
    breakpoints: {
      values: {
        custom: 646,
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down('custom'));

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const {orderedFoodList, setOrderedFoodList} = useContext(AppContext); 

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.matchMedia('(min-width: 1036px)').matches;
      setIsLargeScreen(isLargeScreen);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  // Your logic to determine if isContinueDisabled should be true or false

  
  

  const [categories, setCategories] = useState([]);

  const [foodItems, setFoodItems] = useState([]);

  const [loading, setLoading] = useState(true);

  

const [vegFoodItems, setVegFoodItems] = useState([]);
  const [nonvegFoodItems, setNonvegFoodItems] = useState([]);
// Filter and update vegFoodItems and nonvegFoodItems based on onlyVeg and onlyNonVeg
const updateFoodItems = () => {
const updatedVegFoodItems = foodItems.filter((item) => {
    if (item.isVeg === 1 || item.isVeg === 2) {
      return true;
    }
    return false;
  });  const updatedNonvegFoodItems = foodItems.filter((item) => {
    if (item.isVeg === 0 || item.isVeg === 2) {
      return true;
    }
    return false;
  });
  
   if (onlyVeg && onlyNonVeg) {
    setVegFoodItems(updatedVegFoodItems);
    setNonvegFoodItems(updatedNonvegFoodItems);
   }

  else if(onlyVeg) {
    setVegFoodItems(updatedVegFoodItems);
  } 
  else if (onlyNonVeg) {
    setNonvegFoodItems(updatedNonvegFoodItems);
  }
};




// Call the updateFoodItems function whenever onlyVeg or onlyNonVeg changes
useEffect(() => {
  updateFoodItems();
}, [foodItems]);
const handleToggleOnlyVeg = () => {
  setOnlyVeg((prevState) => !prevState);
};

const handleToggleOnlyNonVeg = () => {
  setOnlyNonVeg((prevState) => !prevState);
};
const [selectedVegFoodItemIds, setSelectedVegFoodItemIds] = useState({});
const [selectedNonVegFoodItemIds, setSelectedNonVegFoodItemIds] = useState({});

 
 
     // Controlled by continue and back buttons 
     // Also remember to change setCategories when changing currentscategory
  const [currentCategory, setCurrentCategory] = useState(whichCategory);
     
  useEffect(() => {
    setCurrentCategory(whichCategory);
  }, [whichCategory]);
      
  
  // const vegFoodItems = foodItems.filter((item) => item.isVeg === true);

  // const nonvegFoodItems = foodItems.filter((item) => item.isVeg === false);

  const handleVegFoodItemChange = (event, category) => {
    const selectedId = event.target.value;
    const isSelected = selectedVegFoodItemIds[category]?.includes(selectedId);
  
    let updatedSelection;
  
    if (isSelected) {
      updatedSelection = selectedVegFoodItemIds[category]?.filter((id) => id !== selectedId);
    } else {
      if (selectedVegFoodItemIds[category]?.length < maxFoodItems[category]) {
        updatedSelection = [...selectedVegFoodItemIds[category], selectedId];
      } else {
        // Handle max item constraint
        const firstSelectedId = selectedVegFoodItemIds[category][0];
        updatedSelection = [...selectedVegFoodItemIds[category].slice(1), selectedId];
  
        // Remove the first item from the orderedFoodList if it doesn't exist in the non-veg category
        const isDuplicateInNonVeg = selectedNonVegFoodItemIds[category]?.includes(firstSelectedId);
        if (!isDuplicateInNonVeg) {
          setOrderedFoodList((prevOrderedFoodList) => {
            const updatedOrderedFoodList = prevOrderedFoodList.filter(
              (order) => order.productsId !== parseInt(firstSelectedId)
            );
            return updatedOrderedFoodList;
          });
        }
      }
    }
  
    setSelectedVegFoodItemIds((prevSelectedIds) => ({
      ...prevSelectedIds,
      [category]: updatedSelection || [],
    }));
  
    setVegItemsSelected((prevSelectedItems) => ({
      ...prevSelectedItems,
      [category]: updatedSelection.map((id) => {
        const selectedItem = vegFoodItems.find((item) => item.id.toString() === id);
        return selectedItem || null;
      }),
    }));
  
    setOrderedFoodList((prevOrderedFoodList) => {
      const existingOrderIndex = prevOrderedFoodList.findIndex((order) => order.category === category);
  
      if (isSelected) {
        // If the item is deselected, remove it from the orderedFoodList
        const updatedOrderedFoodList = prevOrderedFoodList.filter((order) => order.productsId !== parseInt(selectedId));
        return updatedOrderedFoodList;
      } else {
        // Check for duplicate selectedId in the orderedFoodList before adding a new object
        const isDuplicateSelectedId = prevOrderedFoodList.some((order) => order.productsId === parseInt(selectedId));
        if (!isDuplicateSelectedId) {
          // If no object with the same selectedId exists, add a new one
          return [...prevOrderedFoodList, { orderId: 0, productsId: parseInt(selectedId) }];
        } else {
          // If the selectedId is already present, remove the previous selection and add the new one
          const updatedOrderedFoodList = prevOrderedFoodList.filter((order) => order.productsId !== parseInt(selectedId));
          return [...updatedOrderedFoodList, { orderId: 0, productsId: parseInt(selectedId) }];
        }
      }
    });
  };
  
  // useEffect(() => {
  //   console.log("Veg Items Selected:", vegItemsSelected);
  // }, [vegItemsSelected]);
  
  // useEffect(() => {
  //   console.log("Selected Veg Food Item IDs:", selectedVegFoodItemIds);
  // }, [selectedVegFoodItemIds]);
 
  useEffect(() => {
    console.log("FOOD iTEMS Selected:", orderedFoodList);
  }, [orderedFoodList]);
  
  // useEffect(() => {
  //   console.log("Non-Veg Items Selected:", nonVegItemsSelected);
  // }, [nonVegItemsSelected]);
  
  // useEffect(() => {
  //   console.log("Selected Non-Veg Food Item IDs:", selectedNonVegFoodItemIds);
  // }, [selectedNonVegFoodItemIds]);
  
  const handleNonVegFoodItemChange = (event, category) => {
    const selectedId = event.target.value;
    const isSelected = selectedNonVegFoodItemIds[category]?.includes(selectedId);
  
    let updatedSelection;
  
    if (isSelected) {
      updatedSelection = selectedNonVegFoodItemIds[category]?.filter((id) => id !== selectedId);
    } else {
      if (selectedNonVegFoodItemIds[category]?.length < maxFoodItems[category]) {
        updatedSelection = [...selectedNonVegFoodItemIds[category], selectedId];
      } else {
        // Handle max item constraint
        const firstSelectedId = selectedNonVegFoodItemIds[category][0];
        updatedSelection = [...selectedNonVegFoodItemIds[category].slice(1), selectedId];
  
        // Remove the first item from the orderedFoodList if it doesn't exist in the veg category
        const isDuplicateInVeg = selectedVegFoodItemIds[category]?.includes(firstSelectedId);
        if (!isDuplicateInVeg) {
          setOrderedFoodList((prevOrderedFoodList) => {
            const updatedOrderedFoodList = prevOrderedFoodList.filter(
              (order) => order.productsId !== parseInt(firstSelectedId)
            );
            return updatedOrderedFoodList;
          });
        }
      }
    }
  
    setSelectedNonVegFoodItemIds((prevSelectedIds) => ({
      ...prevSelectedIds,
      [category]: updatedSelection || [],
    }));
  
    setNonVegItemsSelected((prevSelectedItems) => ({
      ...prevSelectedItems,
      [category]: updatedSelection.map((id) => {
        const selectedItem = nonvegFoodItems.find((item) => item.id.toString() === id);
        return selectedItem || null;
      }),
    }));
  
    setOrderedFoodList((prevOrderedFoodList) => {
      const existingOrderIndex = prevOrderedFoodList.findIndex((order) => order.category === category);
  
      if (isSelected) {
        // If the item is deselected, remove it from the orderedFoodList
        const updatedOrderedFoodList = prevOrderedFoodList.filter((order) => order.productsId !== parseInt(selectedId));
        return updatedOrderedFoodList;
      } else {
        // Check for duplicate selectedId in the orderedFoodList before adding a new object
        const isDuplicateSelectedId = prevOrderedFoodList.some((order) => order.productsId === parseInt(selectedId));
        if (!isDuplicateSelectedId) {
          // If no object with the same selectedId exists, add a new one
          return [...prevOrderedFoodList, { orderId: 0, productsId: parseInt(selectedId) }];
        } else {
          // If the selectedId is already present, remove the previous selection and add the new one
          const updatedOrderedFoodList = prevOrderedFoodList.filter((order) => order.productsId !== parseInt(selectedId));
          return [...updatedOrderedFoodList, { orderId: 0, productsId: parseInt(selectedId) }];
        }
      }
    });
  };
  
  
  

  useEffect(() => {
    // Fetch the data from the API
    const fetchData = async () => {
      try {
        const url = 'https://localhost:7245/api/StdProducts/View_by_category_StdProducts?cat=' + whichCategory;
        const response = await fetch(url);
        const data = await response.json();
        setFoodItems(data);
        
        setLoading(false);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [whichCategory]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://localhost:7245/api/StdFoodCategoryMasters/View_All_StdFoodCategoryMasters');
        const data = await response.json();
        setCategories(data);
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format');
        }
  
        // Extract the category names from the fetched data
        const categoryNames = data.map((category) => category.category);
  
        // Initialize the state objects with the category names
        const selectedVegFoodItemIdsInitial = {};
        const selectedNonVegFoodItemIdsInitial = {};
  
        categoryNames.forEach((categoryName) => {
          selectedVegFoodItemIdsInitial[categoryName] = [];
          selectedNonVegFoodItemIdsInitial[categoryName] = [];
        });
  
        setSelectedVegFoodItemIds(selectedVegFoodItemIdsInitial);
        setSelectedNonVegFoodItemIds(selectedNonVegFoodItemIdsInitial);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchCategories();
  }, []);

  


  return (
    <div className={styles.main_change1_body}>
      
      <Box display="flex" flexDirection="row" alignItems="center" py={{ xs: 3, sm: 5 }} px={0}>
  {categories.map((category, index) => (
    (!isMobile) || (isMobile && index <= 2 && (whichCategory < 4)) || (isMobile && index >= 2 && (whichCategory > 3)) ? (
      <React.Fragment key={category.category}>
        {((index > 0  && index !== 2) || (isMobile && index === 2 && (whichCategory <= 3)) || (!isMobile && index == 2)) && <span className={styles.separator_line}>----&nbsp;&nbsp;</span>}
        <Box display="flex" flexDirection="row" alignItems="center">
          {isLargeScreen ? (
            <>
              {(whichCategory - 1) === index && (
                <img src={Present} alt="icon" height="40px" width="40px" />
              )}
              {(whichCategory - 1) > index && (
                <img src={Future} alt="icon" height="40px" width="40px" />
              )}
              {(whichCategory - 1) < index && (
                <img src={Past} alt="icon" height="40px" width="40px" />
              )}
            </>
          ) : null}
          <Box className={styles.head_desc} px={1}>
          <Typography
  variant="body1"
  className={
    whichCategory - 1 === index
      ? styles.selected_text
      : whichCategory - 1 > index
      ? styles.previously_selected_text
      : styles.non_selected_text
  }
>
  {category.category}
</Typography>
<Typography
  fontSize="12px"
  variant="body2"
  className={whichCategory - 1 === index ? styles.selected_text_sub : styles.non_selected_text_sub}
>
  Select {maxFoodItems[categories[index].category]} item
</Typography>


          </Box>
        </Box>
      </React.Fragment>
    ) : null
  ))}
</Box>














      <Box
        sx={{
          display: 'flex',
          flexDirection: vegFoodItems.length > 0 ? 'row' : 'column',
          justifyContent: 'space-between',
          
          '@media (max-width: 1550px)': {
            // maxWidth: '1000px',
            },
            '@media (max-width: 1250px)': {
              // maxWidth: '800px',
              },

          '@media (max-width: 600px)': {
            flexDirection: 'column',
            },}}>
              
                
              <div>
                {vegFoodItems.length > 0 && (
                  <div>
                    <div className={styles.item_heading}>
                      <Box sx={{
                        display: 'flex',
                        flexDirection: 'row'
                      }}>
                        <Box display= 'flex' alignItems= "center">
                          <img src={Veg} className={styles.veg_and_nonveg_headings} alt="icon" height="14px" width="14px" style={{ verticalAlign: 'middle' }}/>
                          <span>{categories.length > 0 && (<Typography variant="body1" className={styles.cat_heading}>{categories[whichCategory - 1].category}</Typography>)}</span>
                        </Box>
                      </Box>
                    </div>

                    <Box style={{ maxWidth: 'fit-content' }}>
                    <div className={styles.starter_content} style={{ fontSize: '14px', maxWidth: '280px' , paddingBottom: '30px', paddingTop: '10px' }}>
                        {categories.length > 0 && (
                          <span className={styles.choose_sentence}>You can choose {maxFoodItems[categories[whichCategory - 1].category]} {categories[whichCategory - 1].category} depend upon the plate size you selected</span>
                        )}
                      </div>


                    {loading ? (
                      <Typography>Loading...</Typography>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <List>
  {vegFoodItems &&
    vegFoodItems.length > 0 &&
    vegFoodItems.map((item) => {
      const category = item.category;
      const isSelected = selectedVegFoodItemIds[categories[whichCategory - 1].category]?.includes(
        item.id.toString()
      );

      return (
        <div
  key={item.id}
  className={`${styles.list_item} ${isSelected ? styles.selected : styles.not_selected}`}
  style={{marginBottom: '30px' }}
>
          <input
            type="checkbox"
            id={item.id}
            name="vegFoodItem"
            value={item.id}
            checked={isSelected}
            onChange={(event) =>
              handleVegFoodItemChange(event, categories[whichCategory - 1].category)
            }
            style={{ marginRight: '10px', cursor: 'pointer' }}
          />
          <label className={styles.item_label} htmlFor={item.id} style={{ marginRight: '10px', cursor: 'pointer'}}>
            {item.productsName}
          </label>

          {/* Display images based on conditions */}
          {item.isSpicy && <img src={spicy_icon} alt="Spicy" style={{ marginRight: '10px' }} />}
          {item.isGluten && (
            <img src={Glutten_free_icon} alt="Gluten" style={{ marginRight: '10px' }} />
          )}
          {item.isVegan && <img src={veg_icon} alt="Vegan" />}
        </div>
      );
    })}
</List>

                      </div>
                    )}
                  </Box>


                  </div>
                  )}

                  </div>
                                


                                  {nonvegFoodItems.length > 0 && (
                    <Box sx={{
                      '@media (max-width: 1550px)': {
                          paddingRight: '350px',
                        },
                        '@media (max-width: 980px)': {
                          paddingRight: '200px',
                        },
                        '@media (max-width: 820px)': {
                          paddingRight: '50px',
                        },
                        '@media (max-width: 820px)': {
                          paddingRight: '0px',
                        },
                        '@media (max-width: 500px)': {
                          paddingRight: '0px',
                        },
                    }}>
                      <div className={styles.item_heading2}>
                        <Box sx={{
                          display: 'flex',
                          flexDirection: 'row'
                        }}>
                          <Box display= 'flex' alignItems= "center">
                          <img src={NonVeg} className={styles.veg_and_nonveg_headings} alt="icon" height="14px" width="14px" style={{ verticalAlign: 'middle' }}/>
                          <span>{categories.length > 0 && (<Typography variant="body1" className={styles.cat_heading}>{categories[whichCategory - 1].category}</Typography>)}</span>
                        </Box>
                        </Box>
                      </div>

                      <div className={styles.starter_content2} style={{ fontSize: '14px', maxWidth: '280px' , paddingBottom: '30px', paddingTop: '10px'}}>
                        {categories.length > 0 && (
                          <span className={styles.choose_sentence}>You can choose {maxFoodItems[categories[whichCategory - 1].category]} {categories[whichCategory - 1].category} depend upon the plate size you selected</span>
                        )}
                      </div>

                      {loading ? (
                        <Typography>Loading...</Typography>
                      ) : (
                        <List>
                        {nonvegFoodItems &&
                          nonvegFoodItems.length > 0 &&
                          nonvegFoodItems.map((item) => {
                            const category = item.category;
                            const isSelected = selectedNonVegFoodItemIds[categories[whichCategory - 1].category]?.includes(
                              item.id.toString()
                            );
                      
                            return (
                              <div
                                key={item.id}
                                className={`${styles.list_item} ${isSelected ? styles.selected : styles.not_selected}`}
                                style={{ marginBottom: '30px' }}
                              >
                                <input
  type="checkbox"
  id={`nonveg-${item.id}`} // Add a prefix or suffix to the id for non-veg items
  name="nonVegFoodItem"
  value={item.id}
  checked={isSelected}
  onChange={(event) =>
    handleNonVegFoodItemChange(event, categories[whichCategory - 1].category)
  }
  style={{ marginRight: '10px',cursor: 'pointer' }}
/>
<label
  className={styles.item_label}
  htmlFor={`nonveg-${item.id}`} // Match the modified id value
  style={{ marginRight: '10px', cursor: 'pointer' }}
>
  {item.productsName}
</label>

                      
                                {/* Display images based on conditions */}
                                {item.isSpicy && <img src={spicy_icon} alt="Spicy" style={{ marginRight: '10px' }} />}
                                {item.isGluten && (
                                  <img src={Glutten_free_icon} alt="Gluten" style={{ marginRight: '10px' }} />
                                )}
                                {item.isVegan && <img src={veg_icon} alt="Vegan" />}
                              </div>
                            );
                          })}
                      </List>
                      

                      )}
                    </Box>
                  )}


            </Box>
      </div> 
  );
};

export default ChangingBodyComponent1;