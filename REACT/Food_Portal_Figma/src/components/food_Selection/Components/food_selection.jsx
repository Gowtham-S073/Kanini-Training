import { React, useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import StaticBodyComponent from "./StaticBodyComponent";
import { Button, Box } from "@mui/material";
import ChangingBodyComponent1 from "./ChangingBodyComponent1";
import ChangingBodyComponent2 from "./ChangingBodyComponent2";
import styles from "./CSS/food_selection.module.css";

const Food_Selection = () => {
  const [whichCategory, setWhichCategory] = useState(1);
  const [vegItemsSelected, setVegItemsSelected] = useState({});
  const [nonVegItemsSelected, setNonVegItemsSelected] = useState({});
  const [percentage, setPercentage] = useState(80); // Initial value of 0%
  const [maxFoodItems, setMaxFoodItems] = useState({
    Starter: 2,
    Curry: 1,
    Bread: 1,
    Rice: 1,
    Dessert: 1,
  });

  const [onlyVeg, setOnlyVeg] = useState(true);

const [onlyNonVeg, setOnlyNonVeg] = useState(true);

  const maxFoodItemValues = Object.values(maxFoodItems); // directly gets the values in maxFooditems

  const [isContinueDisabled, setIsContinueDisabled] = useState(false);

  const [isFinalStep, setIsFinalStep] = useState(false);

  useEffect(() => {
    const currentCategoryKey = Object.keys(maxFoodItems)[whichCategory - 1];
    const isVegSelected = vegItemsSelected[currentCategoryKey] || [];
    const isNonVegSelected = nonVegItemsSelected[currentCategoryKey] || [];
    
    let shouldDisableContinue = false;
  
    if (onlyVeg && !onlyNonVeg) {
      shouldDisableContinue = isVegSelected.length !== maxFoodItems[currentCategoryKey];
    } else if (onlyNonVeg && !onlyVeg) {
      shouldDisableContinue = isNonVegSelected.length !== maxFoodItems[currentCategoryKey];
    } else {
      shouldDisableContinue =
        isVegSelected.length !== maxFoodItems[currentCategoryKey] ||
        isNonVegSelected.length !== maxFoodItems[currentCategoryKey];
    }
  
    setIsContinueDisabled(shouldDisableContinue);
  
    // Check if it's the final step (dessert section)
    if (whichCategory === 5 && !shouldDisableContinue) {
      setIsFinalStep(true);
      setPercentage(100);
    } else {
      setIsFinalStep(false);
      setPercentage(80); // Reset the percentage to 80 for other sections
    }
  }, [vegItemsSelected, nonVegItemsSelected, whichCategory, maxFoodItems, onlyVeg, onlyNonVeg]);
  
  
  const handleContinueClick = () => {
    // Update the currentCategory state based on your logic
    setWhichCategory((prevCategory) => {
      if (prevCategory === 6) {
        return 2; // Reset to 1 if the currentCategory is 5
      } else {
        return prevCategory + 1; // Increment by 1 for other cases
      }
    });
  };

  const handleBackClick = () => {
    setWhichCategory((prevCategory) => {
      if (prevCategory === 1) {
        return 5; // Reset to 5 if the currentCategory is 1
      } else {
        return prevCategory - 1; // Decrement by 1 for other cases
      }
    });
  };

  const [isMobileView, setIsMobileView] = useState(window.matchMedia("(max-width: 700px)").matches);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.matchMedia("(max-width: 700px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  return (
    <div>
      <Header />
      {isMobileView && (
          <Button
            sx={{
              marginTop: "10px",
              backgroundColor: "white",
              textTransform: "none",
              color: "#FF6D00",
              "@media (max-width: 700px)": {
                mx: "30px",
                fontSize: "18px",
              },
              "@media (max-width: 600px)": {
                mx: "0px",
                fontSize: "16px",
              },
              "@media (max-width: 450px)": {
                mx: "0px",
                fontSize: "16px",
              },
            }}
            variant="text"
            color="primary"
            onClick={handleBackClick}
          >
            &#60; Back
          </Button>
        )}
        
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0px",
          paddingLeft: "150px",

          "@media (max-width: 1550px)": {
            paddingLeft: "0px",
            flexDirection: "column",
          },
          "@media (max-width: 1125px)": {
            paddingLeft: "0px",
            flexDirection: "column",
          },

          "@media (max-width: 600px)": {
            padding: "0px",
            paddingTop: "0px",
            flexDirection: "column",
          },
        }}
      >
        
        <Box
          sx={{
            backgroundColor: "white",
            color: "black",
            marginTop: "10px",
            marginBottom: "10px",

            display: "flex",
            flexDirection: "column",

            "@media (max-width: 700px)": {
              marginTop: "0px",
              paddingTop: "0px",
            },
            "@media (max-width: 600px)": {
              paddingTop: '0px',
            },
          }}
        >
          <StaticBodyComponent />

          <ChangingBodyComponent1
            onlyVeg={onlyVeg}
            onlyNonVeg={onlyNonVeg}
            setOnlyNonVeg={setOnlyNonVeg}
            setOnlyVeg={setOnlyVeg}
            whichCategory={whichCategory}
            vegItemsSelected={vegItemsSelected}
            setVegItemsSelected={setVegItemsSelected}
            nonVegItemsSelected={nonVegItemsSelected}
            setNonVegItemsSelected={setNonVegItemsSelected}
            maxFoodItems={maxFoodItems}
          />
        </Box>

        <ChangingBodyComponent2
          vegItemsSelected={Object.values(vegItemsSelected).flat()}
          nonVegItemsSelected={Object.values(nonVegItemsSelected).flat()}
          maxFoodItems={maxFoodItems}
          className={styles.ChangingBodyComponent2}
        />
      </Box>

      <Footer
        whichCategory={whichCategory}
        isContinueDisabled={isContinueDisabled}
        onContinueClick={handleContinueClick}
        onBackClick={handleBackClick}
        percentage={percentage}
      setPercentage={setPercentage}
      />
    </div>
  );
};

export default Food_Selection;
