// import React from "react";
// import loginLogo from "../Images/hutlogo.png";
// import '../loginpage/login.css';
// import logLogo from "../Images/loglogo.png";


// const login = () => {
//   return (
//     <div className="splitContainer">

//       <div className="leftPart">
//       <img className="loglogo" src={logLogo} alt="" />

//         <div className="logbut">
            
            
//         <button className="loginButton">Login</button>
//         <button className="signupButton">Signup</button>
//         </div>

//       </div>
//       <div className="rightPart">
        // <img className="hutLogo" src={loginLogo} alt="" />
//       </div>
//     </div>
//   );
// };

// export default login;



// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import '../loginpage/login.css';
// import logLogo from "../Images/loglogo.png";

// const Login = () => { // Changed function name to "Login" with a capital letter
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
        // <img className="loglogo" src={logLogo} alt="" />

//         <div className="logbut">
//           <button className="loginButton">Login</button>
//           <button className="signupButton">Signup</button>
//         </div>

//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>


//       </div>
//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Login; // Changed the component name to "Login" for consistency with naming conventions





// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import '../loginpage/login.css';
// // import logLogo from "../Images/loglogo.png';

// const Login = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   const handleButtonClick = () => {
//     // Add the logic you want to execute when the button is clicked
//     // For example, you can handle form submission or any other action here
//     console.log("Button clicked!");
//   };

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//         {/* <img className="loglogo" src={logLogo} alt="" /> */}

//         <div className="logbut">
//           <button className="loginButton">Login</button>
//           <button className="signupButton">Signup</button>
//         </div>

//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>

//         {/* Input box with the attached button */}
//         <div className="inputBoxContainer">
//           <input type="text" placeholder="Enter your text" />
//           <button className="inputButton" onClick={handleButtonClick}>
//             Submit
//           </button>
//         </div>
//       </div>

//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Login;





// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import '../loginpage/login.css';
// import logLogo from "../Images/loglogo.png";

// const Login = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   const [inputValue, setInputValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     // Add validation logic here, for example, checking if the input is not empty
//     if (inputValue.trim() === "") {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       // Continue with your logic when the input is valid
//       console.log("Button clicked with input value:", inputValue);
//     }
//   };

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//       <img className="loglogo" src={logLogo} alt="" />

//         <div className="logbut">
//           <button className="loginButton">Login</button>
//           <button className="signupButton">Signup</button>
//         </div>

//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>

//         {/* Validated input box with the attached square button */}
//         <div className="inputBoxContainer">
//           <input
//             type="text"
//             placeholder="Enter your text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className={isValid ? "inputBox" : "inputBox invalid"}
//           />
//           <button className="squareButton" onClick={handleButtonClick}>
//             Submit
//           </button>
//         </div>
//       </div>

//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Login;








// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import "../loginpage/login.css";
// import logLogo from "../Images/loglogo.png";
// import { Button, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
// import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";


// // TemporaryDrawer component
// const TemporaryDrawer = () => {
//   const [state, setState] = useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {["left", "right", "top", "bottom"].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// const Login = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   const [inputValue, setInputValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     // Add validation logic here, for example, checking if the input is not empty
//     if (inputValue.trim() === "") {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       // Continue with your logic when the input is valid
//       console.log("Button clicked with input value:", inputValue);
//     }
//   };

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//         <img className="loglogo" src={logLogo} alt="" />

//         <div className="logbut">
//           <button className="loginButton">Login</button>
//           <button className="signupButton">Signup</button>
//         </div>

//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>

//         {/* Validated input box with the attached square button and the login drawer */}
//         <div className="inputBoxContainer">
//           <input
//             type="text"
//             placeholder="Enter your text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className={isValid ? "inputBox" : "inputBox invalid"}
//           />
//           <button className="squareButton" onClick={handleButtonClick}>
//             Submit
//           </button>

//           {/* Add the Login Drawer here */}
//           <TemporaryDrawer />
//         </div>
//       </div>

//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import "../loginpage/login.css";
// import logLogo from "../Images/loglogo.png";
// import { Button, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
// import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";

// // TemporaryDrawer component
// const TemporaryDrawer = ({ anchor, open, onClose }) => {
//   // Define the toggleDrawer function
//   const toggleDrawer = (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }

//     onClose(); // Call the onClose function to close the drawer
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//       role="presentation"
//       onClick={toggleDrawer} // Use the toggleDrawer function here
//       onKeyDown={toggleDrawer} // Use the toggleDrawer function here
//     >
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Drawer anchor={anchor} open={open} onClose={onClose}>
//       {list(anchor)}
//     </Drawer>
//   );
// };

// const Login = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   const [inputValue, setInputValue] = useState("");
//   const [isValid, setIsValid] = useState(true);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control the drawer

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     // Add validation logic here, for example, checking if the input is not empty
//     if (inputValue.trim() === "") {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       // Continue with your logic when the input is valid
//       console.log("Button clicked with input value:", inputValue);
//     }
//   };

//   // Function to open the drawer on the right side
//   const handleLoginButtonClick = () => {
//     setIsDrawerOpen(true);
//   };

//   // Function to close the drawer
//   const closeDrawer = () => {
//     setIsDrawerOpen(false);
//   };

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//         <img className="loglogo" src={logLogo} alt="" />

//         <div className="logbut">
//           <button className="loginButton" onClick={handleLoginButtonClick}>
//             Login
//           </button>
//           <button className="signupButton">Signup</button>
//         </div>

//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>

//         {/* Validated input box with the attached square button */}
//         <div className="inputBoxContainer">
//           <input
//             type="text"
//             placeholder="Enter your text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className={isValid ? "inputBox" : "inputBox invalid"}
//           />
//           <button className="squareButton" onClick={handleButtonClick}>
//             Submit
//           </button>
//         </div>
//       </div>

//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>

//       {/* Add the Login Drawer here */}
//       <TemporaryDrawer anchor="right" open={isDrawerOpen} onClose={closeDrawer} />
//     </div>
//   );
// };

// export default Login;






// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import "../loginpage/login.css";
// import logLogo from "../Images/loglogo.png";

// const Login = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   const [inputValue, setInputValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     // Add validation logic here, for example, checking if the input is not empty
//     if (inputValue.trim() === "") {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       // Continue with your logic when the input is valid
//       console.log("Button clicked with input value:", inputValue);
//     }
//   };

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleSignUpClick = () => {
//     setIsSidebarOpen(true);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//         <img className="loglogo" src={logLogo} alt="" />

//         <div className="logbut">
//           <button className="loginButton">Login</button>
//           <button className="signupButton" onClick={handleSignUpClick}>
//             Signup
//           </button>
//         </div>

//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>

//         {/* Validated input box with the attached square button */}
//         <div className="inputBoxContainer">
//           <input
//             type="text"
//             placeholder="ENTER YOUR PINCODE"
//             value={inputValue}
//             onChange={handleInputChange}
//             className={isValid ? "inputBox" : "inputBox invalid"}
//           />
//           <button className="squareButton" onClick={handleButtonClick}>
//             Submit
//           </button>
//         </div>
//       </div>

//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>

//       {/* Sidebar */}
//       <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
//         <a href="#home" className="closebtn" onClick={closeSidebar}>
//           &times;
//         </a>
//         <h2>Sign Up</h2>
//         {/* Add your sign-up form or content here */}
//         {/* For example: */}
//         <form>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import "../loginpage/login.css";
// import logLogo from "../Images/loglogo.png";
// import { Button, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Drawer } from "@mui/material";
// import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";

// // TemporaryDrawer component
// const TemporaryDrawer = ({ anchor, open, onClose }) => {
//   // Define the toggleDrawer function
//   const toggleDrawer = (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }

//     onClose(); // Call the onClose function to close the drawer
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//       role="presentation"
//       onClick={toggleDrawer} // Use the toggleDrawer function here
//       onKeyDown={toggleDrawer} // Use the toggleDrawer function here
//     >
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {["right"].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={open}
//             onClose={onClose}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// const Login = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   const [inputValue, setInputValue] = useState("");
//   const [isValid, setIsValid] = useState(true);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control the drawer

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     // Add validation logic here, for example, checking if the input is not empty
//     if (inputValue.trim() === "") {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       // Continue with your logic when the input is valid
//       console.log("Button clicked with input value:", inputValue);
//     }
//   };

//   // Function to open the drawer on the right side
//   const handleLoginButtonClick = () => {
//     setIsDrawerOpen(true);
//   };

//   // Function to close the drawer
//   const closeDrawer = () => {
//     setIsDrawerOpen(false);
//   };

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//         <img className="loglogo" src={logLogo} alt="" />

//         <div className="logbut">
//           <button className="loginButton" onClick={handleLoginButtonClick}>
//             Login
//           </button>
//           <button className="signupButton">Signup</button>
//         </div>

//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>

//         {/* Validated input box with the attached square button */}
//         <div className="inputBoxContainer">
//           <input
//             type="text"
//             placeholder="Enter your text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className={isValid ? "inputBox" : "inputBox invalid"}
//           />
//           <button className="squareButton" onClick={handleButtonClick}>
//             Submit
//           </button>
//         </div>
//       </div>

//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>

//       {/* Add the Login Drawer here */}
//       <TemporaryDrawer anchor="right" open={isDrawerOpen} onClose={closeDrawer} />
//     </div>
//   );
// };

// export default Login;








// import React, { useState } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import "../loginpage/login.css";
// import logLogo from "../Images/loglogo.png";
// import { Button, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, TextField } from "@mui/material";
// import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";

// // TemporaryDrawer component
// const TemporaryDrawer = () => {
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [signupOpen, setSignupOpen] = useState(false);

//   const toggleLoginDrawer = () => {
//     setLoginOpen(!loginOpen);
//   };

//   const toggleSignupDrawer = () => {
//     setSignupOpen(!signupOpen);
//   };

//   const handleLoginClick = () => {
//     // Handle login functionality
//     console.log("Login clicked");
//     setLoginOpen(false);
//   };

//   const handleSignupClick = () => {
//     // Handle signup functionality
//     console.log("Signup clicked");
//     setSignupOpen(false);
//   };

//   const loginList = () => (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleLoginDrawer} onKeyDown={toggleLoginDrawer}>
//       <List>
//         <ListItem>
//           <ListItemText primary="Username" />
//           <TextField />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Password" />
//           <TextField type="password" />
//         </ListItem>
//       </List>
//       <Divider />
//       <Button variant="contained" color="primary" onClick={handleLoginClick}>
//         Login
//       </Button>
//     </Box>
//   );

//   const signupList = () => (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleSignupDrawer} onKeyDown={toggleSignupDrawer}>
//       <List>
//         <ListItem>
//           <ListItemText primary="Username" />
//           <TextField />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Password" />
//           <TextField type="password" />
//         </ListItem>
//       </List>
//       <Divider />
//       <Button variant="contained" color="secondary" onClick={handleSignupClick}>
//         Sign Up
//       </Button>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleLoginDrawer}>Login</Button>
//       <Button onClick={toggleSignupDrawer}>Signup</Button>

//       {/* Login Drawer */}
//       <Drawer anchor="right" open={loginOpen} onClose={toggleLoginDrawer}>
//         {loginList()}
//       </Drawer>

//       {/* Signup Drawer */}
//       <Drawer anchor="right" open={signupOpen} onClose={toggleSignupDrawer}>
//         {signupList()}
//       </Drawer>
//     </div>
//   );
// };

// const Login = () => {
//   // ... (rest of your Login component code remains the same)
//   // ...

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//         {/* ... (rest of your Login component code remains the same) */}
//         {/* ... */}

//         {/* Validated input box with the attached square button and the login drawer */}
//         <div className="inputBoxContainer">
//           {/* ... (rest of your input fields and buttons remain the same) */}
//           {/* ... */}
//           {/* Add the Login Drawer here */}
//           <TemporaryDrawer />
//         </div>
//       </div>

//       <div className="rightPart">
//         {/* ... (rest of your Login component code remains the same) */}
//         {/* ... */}
//       </div>
//     </div>
//   );
// };

// export default Login;






// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import "../loginpage/login.css";
// import logLogo from "../Images/loglogo.png";
// import { Button, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, TextField } from "@mui/material";
// import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";

// // TemporaryDrawer component
// const TemporaryDrawer = () => {
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [signupOpen, setSignupOpen] = useState(false);

//   const toggleLoginDrawer = () => {
//     setLoginOpen(!loginOpen);
//   };

//   const toggleSignupDrawer = () => {
//     setSignupOpen(!signupOpen);
//   };

//   const handleLoginClick = () => {
//     // Handle login functionality
//     console.log("Login clicked");
//     setLoginOpen(false);
//   };

//   const handleSignupClick = () => {
//     // Handle signup functionality
//     console.log("Signup clicked");
//     setSignupOpen(false);
//   };

//   const loginList = () => (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleLoginDrawer} onKeyDown={toggleLoginDrawer}>
//       <List>
//         <ListItem>
//           <ListItemText primary="Username" />
//           <TextField />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Password" />
//           <TextField type="password" />
//         </ListItem>
//       </List>
//       <Divider />
//       <Button variant="contained" color="primary" onClick={handleLoginClick}>
//         Login
//       </Button>
//     </Box>
//   );

//   const signupList = () => (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleSignupDrawer} onKeyDown={toggleSignupDrawer}>
//       <List>
//         <ListItem>
//           <ListItemText primary="Username" />
//           <TextField />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary="Password" />
//           <TextField type="password" />
//         </ListItem>
//       </List>
//       <Divider />
//       <Button variant="contained" color="secondary" onClick={handleSignupClick}>
//         Sign Up
//       </Button>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleLoginDrawer}>Login</Button>
//       <Button onClick={toggleSignupDrawer}>Signup</Button>

//       {/* Login Drawer */}
//       <Drawer anchor="right" open={loginOpen} onClose={toggleLoginDrawer}>
//         {loginList()}
//       </Drawer>

//       {/* Signup Drawer */}
//       <Drawer anchor="right" open={signupOpen} onClose={toggleSignupDrawer}>
//         {signupList()}
//       </Drawer>
//     </div>
//   );
// };

// const Login = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   const [inputValue, setInputValue] = useState("");
//   const [isValid, setIsValid] = useState(true);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     // Add validation logic here, for example, checking if the input is not empty
//     if (inputValue.trim() === "") {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       // Continue with your logic when the input is valid
//       console.log("Button clicked with input value:", inputValue);
//     }
//   };

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//         <img className="loglogo" src={logLogo} alt="" />

//         <div className="logbut">
//           <button className="loginButton">Login</button>
//           <button className="signupButton">Signup</button>
//         </div>

//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>

//         {/* Validated input box with the attached square button and the login drawer */}
//         <div className="inputBoxContainer">
//           <input
//             type="text"
//             placeholder="Enter your text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className={isValid ? "inputBox" : "inputBox invalid"}
//           />
//           <button className="squareButton" onClick={handleButtonClick}>
//             Submit
//           </button>

//           {/* Add the Login Drawer here */}
//           <TemporaryDrawer />
//         </div>
//       </div>

//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Login;





// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import "../loginpage/login.css";
// import logLogo from "../Images/loglogo.png";
// import { Button, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, TextField } from "@mui/material";
// import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";
// import designimg from "../Images/designimg.png";
// // TemporaryDrawer component
// const TemporaryDrawer = ({ anchor, open, onClose, children }) => {
//   const toggleDrawer = (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }
//     onClose();
//   };

//   return (
//     <Drawer anchor={anchor} open={open} onClose={toggleDrawer}>
//       {children}
//     </Drawer>
//   );
// };

// const Login = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   const [inputValue, setInputValue] = useState("");
//   const [isValid, setIsValid] = useState(true);
//   const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
//   const [isSignupDrawerOpen, setIsSignupDrawerOpen] = useState(false);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     // Add validation logic here, for example, checking if the input is not empty
//     if (inputValue.trim() === "") {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       // Continue with your logic when the input is valid
//       console.log("Button clicked with input value:", inputValue);
//     }
//   };

//   const handleLoginButtonClick = () => {
//     setIsLoginDrawerOpen(true);
//   };

//   const handleSignupButtonClick = () => {
//     setIsSignupDrawerOpen(true);
//   };

//   const closeLoginDrawer = () => {
//     setIsLoginDrawerOpen(false);
//   };

//   const closeSignupDrawer = () => {
//     setIsSignupDrawerOpen(false);
//   };

//   const handleLoginClick = () => {
//     // Add your login logic here
//     console.log("Logging in with username and password");
//     // Close the login drawer
//     setIsLoginDrawerOpen(false);
//   };

//   const handleSignupClick = () => {
//     // Add your signup logic here
//     console.log("Signing up with username and password");
//     // Close the signup drawer
//     setIsSignupDrawerOpen(false);
//   };

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//         <div style={{display:"flex" , justifyContent:"space-between"}}>
//         <img className="loglogo" src={logLogo} alt="" />

//         <div className="logbut">
//           <button className="loginButton" onClick={handleLoginButtonClick}>
//             Login
//           </button>
//           <button className="signupButton" onClick={handleSignupButtonClick}>
//             Signup
//           </button>
//         </div>
//         </div>
//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>

//         {/* Validated input box with the attached square button */}
//         <div className="inputBoxContainer">
//           <input
//             type="text"
//             placeholder="Enter your text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className={isValid ? "inputBox" : "inputBox invalid"}
//           />
//           <button className="squareButton" onClick={handleButtonClick}>
//             Submit
//           </button>
//         </div>
//       </div>

//       <div className="desimg">
//         <img src={designimg} alt="" />
//       </div>

//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>

      

//       {/* Login Drawer */}
//       <TemporaryDrawer anchor="right" open={isLoginDrawerOpen} onClose={closeLoginDrawer}>
//         <Box sx={{ width: 250 }} role="presentation" onClick={closeLoginDrawer} onKeyDown={closeLoginDrawer}>
//           <List>
//             <ListItem>
//               <ListItemText primary="Username" />
//               <TextField />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="Password" />
//               <TextField type="password" />
//             </ListItem>
//           </List>
//           <Divider />
//           <Button variant="contained" color="primary" onClick={handleLoginClick}>
//             Login
//           </Button>
//         </Box>
//       </TemporaryDrawer>

//       {/* Signup Drawer */}
//       <TemporaryDrawer anchor="right" open={isSignupDrawerOpen} onClose={closeSignupDrawer}>
//         <Box sx={{ width: 250 }} role="presentation" onClick={closeSignupDrawer} onKeyDown={closeSignupDrawer}>
//           <List>
//             <ListItem>
//               <ListItemText primary="Username" />
//               <TextField />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="Password" />
//               <TextField type="password" />
//             </ListItem>
//           </List>
//           <Divider />
//           <Button variant="contained" color="secondary" onClick={handleSignupClick}>
//             Sign Up
//           </Button>
//         </Box>
//       </TemporaryDrawer>
     
//     </div>
    
//   );
// };

// export default Login;












// import React, { useState, useEffect } from "react";
// import loginLogo from "../Images/hutlogo.png";
// import "../loginpage/login.css";
// import logLogo from "../Images/loglogo.png";
// import { Button, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, TextField } from "@mui/material";
// import { Inbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";
// import designimg from "../Images/designimg.png";

// // TemporaryDrawer component
// const TemporaryDrawer = ({ anchor, open, onClose, children }) => {
//   const toggleDrawer = (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }
//     onClose();
//   };

//   return (
//     <Drawer anchor={anchor} open={open} onClose={toggleDrawer}>
//       {children}
//     </Drawer>
//   );
// };

// const Login = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 2000); // Change the text every 2 seconds (you can adjust the interval)

//     return () => clearInterval(intervalId);
//   }, []);

//   const [inputValue, setInputValue] = useState("");
//   const [isValid, setIsValid] = useState(true);
//   const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
//   const [isSignupDrawerOpen, setIsSignupDrawerOpen] = useState(false);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     // Add validation logic here, for example, checking if the input is not empty
//     if (inputValue.trim() === "") {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       // Continue with your logic when the input is valid
//       console.log("Button clicked with input value:", inputValue);
//     }
//   };

//   const handleLoginButtonClick = () => {
//     setIsLoginDrawerOpen(true);
//   };

//   const handleSignupButtonClick = () => {
//     setIsSignupDrawerOpen(true);
//   };

//   const closeLoginDrawer = () => {
//     setIsLoginDrawerOpen(false);
//   };

//   const closeSignupDrawer = () => {
//     setIsSignupDrawerOpen(false);
//   };

//   const handleLoginClick = () => {
//     // Add your login logic here
//     console.log("Logging in with username and password");
//     // Close the login drawer
//     setIsLoginDrawerOpen(false);
//   };

//   const handleSignupClick = () => {
//     // Add your signup logic here
//     console.log("Signing up with username and password");
//     // Close the signup drawer
//     setIsSignupDrawerOpen(false);
//   };

//   return (
//     <div className="splitContainer">
//       <div className="leftPart">
//         <div>
//           <img className="loglogo" src={logLogo} alt="" />

//           <div className="logbut">
//             <button className="loginButton" onClick={handleLoginButtonClick}>
//               Login
//             </button>
//             <button className="signupButton" onClick={handleSignupButtonClick}>
//               Signup
//             </button>
//           </div>
//         </div>
//         <div className="changingText">
//           <h1>{texts[textIndex]}</h1>
//         </div>
//         <h4 className="sub">Order food from favourite restaurants near you.</h4>

//         {/* Validated input box with the attached square button */}
//         <div className="inputBoxContainer">
//           <input
//             type="text"
//             placeholder="Enter your pincode"
//             value={inputValue}
//             onChange={handleInputChange}
//             className={isValid ? "inputBox" : "inputBox invalid"}
//           />
//           <button className="squareButton" onClick={handleButtonClick}>
//             CHECK
//           </button>
//         </div>
//       </div>

//       <div className="desimg">
//         <img src={designimg} alt="" />
//       </div>

//       <div className="rightPart">
//         <img className="hutLogo" src={loginLogo} alt="" />
//       </div>

//       {/* Login Drawer */}
//       <TemporaryDrawer anchor="right" open={isLoginDrawerOpen} onClose={closeLoginDrawer}>
//         <Box sx={{ width: 730 }} role="presentation" onClick={closeLoginDrawer} onKeyDown={closeLoginDrawer}>
//           <List>
//             <ListItem>
//               <ListItemText primary="Username" />
//               <TextField />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="Password" />
//               <TextField type="password" />
//             </ListItem>
//           </List>
//           <Divider />
//           <Button sx={{backgroundColor:"black" , display:"flex" , justifyContent:"center", height: 70 }} variant="contained" color="primary" onClick={handleLoginClick}>
//             Login
//           </Button>
//         </Box>
//       </TemporaryDrawer>

//       {/* Signup Drawer */}
//       <TemporaryDrawer anchor="right" open={isSignupDrawerOpen} onClose={closeSignupDrawer}>
//         <Box sx={{ width: 730 }} role="presentation" onClick={closeSignupDrawer} onKeyDown={closeSignupDrawer}>
//           <List>
//             <ListItem>
//               <ListItemText primary="Username" />
//               <TextField />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="Password" />
//               <TextField type="password" />
//             </ListItem>
//           </List>
//           <Divider />
//           <Button variant="contained" color="secondary" onClick={handleSignupClick}>
//             Sign Up
//           </Button>
//         </Box>
//       </TemporaryDrawer>
//     </div>
//   );
// };

// export default Login;



























import React, { useState, useEffect } from "react";
import loginLogo from "../Images/hutlogo.png";
import "../loginpage/login.css";
import logLogo from "../Images/loglogo.png";
import { Button, Drawer, Box, List, ListItem, Divider, TextField } from "@mui/material";
import designimg from "../Images/designimg.png";

// TemporaryDrawer component
const TemporaryDrawer = ({ anchor, open, onClose, children }) => {
  const toggleDrawer = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    onClose();
  };

  return (
    <Drawer anchor={anchor} open={open} onClose={toggleDrawer}>
      {children}
    </Drawer>
  );
};

const Login = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Welcome!", "Login to continue", "Sign up to get started"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change the text every 2 seconds (you can adjust the interval)

    return () => clearInterval(intervalId);
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoginDrawerOpen, setIsLoginDrawerOpen] = useState(false);
  const [isSignupDrawerOpen, setIsSignupDrawerOpen] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Add validation logic here, for example, checking if the input is not empty
    if (inputValue.trim() === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
      // Continue with your logic when the input is valid
      console.log("Button clicked with input value:", inputValue);
    }
  };

  const handleLoginButtonClick = () => {
    setIsLoginDrawerOpen(true);
  };

  const handleSignupButtonClick = () => {
    setIsSignupDrawerOpen(true);
  };

  const closeLoginDrawer = () => {
    setIsLoginDrawerOpen(false);
  };

  const closeSignupDrawer = () => {
    setIsSignupDrawerOpen(false);
  };

  const handleLoginClick = () => {
    // Add your login logic here
    console.log("Logging in with username and password");
    // Close the login drawer
    setIsLoginDrawerOpen(false);
  };

  const handleSignupClick = () => {
    // Add your signup logic here
    console.log("Signing up with username and password");
    // Close the signup drawer
    setIsSignupDrawerOpen(false);
  };

  return (
    <div className="splitContainer">
      <div className="leftPart">
        <div>
          <img className="loglogo" src={logLogo} alt="" />

          <div className="logbut">
            <button className="loginButton" onClick={handleLoginButtonClick}>
              Login
            </button>
            <button className="signupButton" onClick={handleSignupButtonClick}>
              Signup
            </button>
          </div>
        </div>
        <div className="changingText">
          <h1>{texts[textIndex]}</h1>
        </div>
        <h4 className="sub">Order food from favourite restaurants near you.</h4>

        {/* Validated input box with the attached square button */}
        <div className="inputBoxContainer">
          <input
            type="text"
            placeholder="Enter your pincode"
            value={inputValue}
            onChange={handleInputChange}
            className={isValid ? "inputBox" : "inputBox invalid"}
          />
          <button className="squareButton" onClick={handleButtonClick}>
            CHECK
          </button>
        </div>
      </div>

      <div className="desimg">
        <img src={designimg} alt="" />
      </div>

      <div className="rightPart">
        <img className="hutLogo" src={loginLogo} alt="" />
      </div>

      {/* Login Drawer */}
      <TemporaryDrawer anchor="right" open={isLoginDrawerOpen} onClose={closeLoginDrawer}>
        <Box sx={{ width: 730 }} role="presentation" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          <List>
            <ListItem>
              <TextField label="Username" variant="outlined" />
            </ListItem>
            <ListItem>
              <TextField label="Password" variant="outlined" type="password" />
            </ListItem>
          </List>
          <Divider />
          <Button sx={{ backgroundColor: "black", display: "flex", justifyContent: "center", height: 70 }} variant="contained" color="primary" onClick={handleLoginClick}>
            Login
          </Button>
        </Box>
      </TemporaryDrawer>

      {/* Signup Drawer */}
      <TemporaryDrawer anchor="right" open={isSignupDrawerOpen} onClose={closeSignupDrawer}>
        <Box sx={{ width: 730 , justifyContent:"center" }} role="presentation" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          <List>
            <ListItem>
              <TextField label="Username" variant="outlined" />
            </ListItem>
            <ListItem>
              <TextField label="Password" variant="outlined" type="password" />
            </ListItem>
          </List>
          <Divider />
          <Button variant="contained" color="secondary" onClick={handleSignupClick}>
            Sign Up
          </Button>
        </Box>
      </TemporaryDrawer>
    </div>
  );
};

export default Login;
