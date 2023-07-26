import Vegnon from "./components/vegnon";
import Header from "./components/header";
import Addon from "./addonPage/addon";
import Login from "./loginpage/Login";
import OrderDetail from "../src/components/OrderDetail";
import Submitted from "../src/components/Submitted";
import { useState, createContext } from "react";
import './App.css'
import AdditionalCategory from "./components/AdditionalCategory";
import Food_Selection from "./components/food_Selection/Components/food_selection";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GroupSize from "./components/GroupSize";
import Dateandtime from "./components/Dateandtime";
import TrackStatus from "./components/TrackStatus";
import Summary from "./components/Summary"


export const AppContext = createContext(null);


function App() {

  const [dataList, setDataList] = useState([]);
  const [trackid, setTrackid] = useState('');
  const [orderedFoodList, setOrderedFoodList] = useState([]);

  

  return (
    <div >
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
<BrowserRouter>
<AppContext.Provider value={{trackid, setTrackid, orderedFoodList, setOrderedFoodList , dataList, setDataList}}>

      <Routes>
        <Route path="/food_selection" element={<Food_Selection />} />
        <Route path='/trackstatus' element={<TrackStatus/>}/>
        <Route path="/" element={<Submitted/>} />
        <Route path="/groupsize" element={<GroupSize />} />
        <Route path="/vegnon" element={<Vegnon />} />
        <Route path='summary' element={<Summary/>}/>
      </Routes>

   

      </AppContext.Provider>
    </BrowserRouter> 

    </div>
  );
}

export default App;
