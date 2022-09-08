
import './App.css';
import {useEffect, useState} from "react"
import Header from "../src/component/Header.js"
import{useSelector,useDispatch} from "react-redux"
import SubHeader from './component/SubHeader';


function App() {




  return (
    <>
   <Header/>
   <SubHeader/>
   </>
    
    
  );
}

export default App;
