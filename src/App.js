import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes , Route }
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>>', authUser);

      if (authUser){
        // the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM (naming convention used for styling)
    <Router>
      
  <Routes>
    <Route exact path="/login" element={[<Login />]} />
    <Route exact path="/" element={[<Header />,<Home />]} />
    <Route exact path="/checkout" element={[<Header />,<Checkout />]} />  
    <Route exact path="/payment" element={[<Header />,<Payment />]} />     
  </Routes>
</Router>
  );
}

export default App;
