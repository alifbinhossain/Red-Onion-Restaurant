import React from "react";
import { createContext } from "react";
import useBreakfast from "../hooks/useBreakfast";
import useCart from "../hooks/useCart";
import useDinner from "../hooks/useDinner";
import useFirebase from "../hooks/useFirebase";
import useLunch from "../hooks/useLunch";

export const AllContext = createContext();
const AllProvider = ({ children }) => {
  const allContext = {
    carts: useCart(),
    firebase: useFirebase(),
    breakfast: useBreakfast(),
    lunch: useLunch(),
    dinner: useDinner(),
  };

  return (
    <AllContext.Provider value={allContext}>{children}</AllContext.Provider>
  );
};

export default AllProvider;
