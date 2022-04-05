import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
  return(
      <div className="home">
          <div className="home__container">
              <img className="home__image" src="https://m.media-amazon.com/images/I/516WH3pstgL._SX3000_.jpg" />

              <div className="home__row">
                  <Product 
                  id="12345"
                  title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)"
                  price={39990}
                  image='https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UY436_FMwebp_QL65_.jpg' 
                  rating={5}
                  />
                  <Product 
                  id="12346"
                  title="OnePlus Smart Band"
                  price={1649}
                  image='https://images-eu.ssl-images-amazon.com/images/I/61XPTRJZcCL._AC_UL675_SR675,480_.jpg' 
                  rating={4}
                  />                 
              </div>

              <div className="home__row">
                  <Product 
                  id="12347"
                  title="Logitech G435 Lightspeed and Bluetooth Wireless Gaming Headset"
                  price={7495}
                  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVg8RzD4s0nIBITpwClufEeg7YEoMUy1p19g-JUtqs1IQ7HwRv' 
                  rating={4}
                  />   
                  <Product 
                  id="12348"
                  title="FIFA 22 (PS4)"
                  price={2975}
                  image='https://images-eu.ssl-images-amazon.com/images/I/81A6hGtMGoL._AC_UL675_SR675,480_.jpg' 
                  rating={5}
                  />   
                  <Product 
                  id="12349"
                  title="Acer Nitro 5 AN515-56 Gaming Laptop"
                  price={85000}
                  image='https://m.media-amazon.com/images/I/71evs2WKJjS._AC_UL640_QL65_.jpg' 
                  rating={4}
                  />      
              </div>

              <div className="home__row">
              <Product 
                  id="12350"
                  title="IPhone 13 Pro Max (256GB ROM, Sierra Blue, 6.7'')"
                  price={130000}
                  image='https://c.tenor.com/yn_Pqm26TLQAAAAC/apple-apple-iphone12.gif' 
                  rating={5}
                  /> 
              </div>

          </div>
      </div>
  )
}

export default Home;
