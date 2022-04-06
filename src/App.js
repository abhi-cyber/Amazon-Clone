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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KlWkSSDy0axSTkZA57XcWbsAo3LgYKzjctDT0OnkfkbtI0rNsJQH2tSLOXIyo0RUiSWeUeZXCTxEAoNkjLBP5WR00wF8XM3TV');

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
    <Route exact path="/payment" element={[<Header />,<Elements stripe={promise}><Payment /></Elements>]} />     
  </Routes>
</Router>
  );
}

export default App;
