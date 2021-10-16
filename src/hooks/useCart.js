import { useEffect } from "react";
import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const handleAddToCart = (food) => {
    const newCart = [...cart];
    // console.log(cart);
    const isExist = cart.find((eItem) => eItem.id === food.id);
    if (isExist) {
      isExist.quantity = isExist?.quantity + 1;
      // console.log("Food exist", cart);
    } else {
      food.quantity = 1;
      newCart.push(food);
      // console.log("Food doesn't exist", cart);
    }
    setCart(newCart);

    const totalQuantity = cart.reduce(
      (pre, current) => pre + current.quantity,
      0
    );
    setTotalItems(totalQuantity);
  };

  return {
    cart,
    setCart,
    handleAddToCart,
    totalItems,
    setTotalItems,
  };
};

export default useCart;
