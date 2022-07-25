import React from 'react'
import "./Home.css"
import Product from './Product'
import axios from 'axios';

function callServer() {
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/test`, {
    params: {
      table: 'sample',
    },
  }).then((response) => {
    console.log("hello",response.data);
  });
}
function Home() {
  return (
    <div 
    className='home'>
        {callServer()}
        <div 
        className='home__container'>
            <img
            className="home__image"
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt="">
            </img>
            <div className='home__row'>
              <Product 
              id='226666'
              title='The learn startup'
              price={29.99} 
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={3}
              />
              <Product 
              id="26656"
              title='The learn startup2'
              price="" 
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating=""
              />
              
            </div>
            <div className='home__row'>
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
            <div className='home__row'>
              <Product />
              <Product />
            </div>
        </div>
    </div>
  )
}

export default Home