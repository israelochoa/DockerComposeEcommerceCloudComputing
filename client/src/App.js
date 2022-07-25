
import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Link} from "react-router-dom"
import{Routes, Route} from "react-router-dom";
import Login from './Login';
import {auth} from './Firebase.js'
import { useStateValue } from './StateProvider';
import Payment from './Payment';


function App() {
  const [{user},dispatch]=useStateValue();
  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      
      if(authUser){
        console.log('The user is >>>',authUser.email);
        dispatch(
          {
            type:"ADD_USER",
            user:authUser,
          }
        )
      }else{
        
        dispatch(
          {
            type:"ADD_USER",
            user:null,
          }
        )
      }
    })
  },[]);
  return (
    <Router>
      <div className="App">
      <Routes>
              <Route path="/" 
              element={
              <>
                <Header/>
                <Home/>
              </>
              } 
                    />  
              <Route path="/checkout" 
              element={
              <>
                <Header/>
                <Checkout/> 
              </>
              } 
              /> 
              <Route path="/payment" 
              element={
              <>
                <Header/>
                <Payment/>
              </>
              } 
              /> 
              <Route path="/login" 
              element={
              <Login/> } />  
              
      </Routes>
      </div>
      </Router>
      
    
    
  );
}


export default App;
