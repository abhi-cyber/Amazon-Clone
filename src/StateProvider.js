import React, { createContext, useContext, useReducer } from "react";

// Prepares the Data Layer
export const StateContext = createContext();

// Wrap our app (provides the data to the other pages)
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pulls the info from the data layer
export const useStateValue = () => useContext
(StateContext);