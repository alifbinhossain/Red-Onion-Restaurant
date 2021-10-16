import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAll from "../../hooks/useAll";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { carts, firebase } = useAll();
  const { cart } = carts;
  const [newCart, setNewCart] = useState(cart);

  const { user } = firebase;

  const handleQuantity = (isIncrease, food) => {
    const newCart = [...cart];
    if (isIncrease) {
      food.quantity = food.quantity + 1;
      console.log(food);
    } else if (!isIncrease && food.quantity > 0) {
      food.quantity = food.quantity - 1;
    }
    setNewCart(newCart);
  };

  /* ------------------------------ PRICING CALC ----------------------------- */
  const subTotal = newCart?.reduce(
    (pre, current) => pre + current.quantity * current.price,
    0
  );
  const tax = (subTotal * 0.15).toFixed(1);
  const total = Number(subTotal) + Number(tax);

  return (
    <section className="checkout">
      {/* -------------------------------------------------------------------------- */
      /*                                  USER FORM                                 */
      /* -------------------------------------------------------------------------- */}
      <div className="user-form">
        <h2 className="mb-3">Edit Delivery Details</h2>
        <form className="user-form__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="user-form__input-group">
            <input
              placeholder="your email"
              defaultValue={user?.email}
              className="user-form__input"
              {...register("email", {
                required: true,
              })}
            />
            {errors?.email && (
              <small className="error-text">Email is Required</small>
            )}
          </div>
          <div className="user-form__input-group">
            <input
              placeholder="your name"
              defaultValue={user?.displayName}
              className="user-form__input"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name && (
              <small className="error-text">Name is Required</small>
            )}
          </div>
          <div className="user-form__input-group">
            <input
              placeholder="address"
              className="user-form__input"
              {...register("address", {
                required: true,
              })}
            />
            {errors?.address && (
              <small className="error-text">Address is Required</small>
            )}
          </div>
          <div className="user-form__input-group">
            <input
              placeholder="flat no, floor no"
              className="user-form__input"
              {...register("floor no,flat no", {
                required: false,
              })}
            />
          </div>

          <input
            className="btn btn-success w-75"
            type="submit"
            value="Save & Continue"
          />
        </form>
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                                SHOP DETAILS                                */
      /* -------------------------------------------------------------------------- */}
      <div className="shop-details">
        <h4 className="shop-details__location">
          From Gulshan Plaza Restaurant
        </h4>
        <p className="shop-details__time">Arriving in 30-40 min</p>

        {/*----------FOOD ITEM DETAILS---------*/}
        <ul className="shop-details__food-items">
          {newCart.length > 0 &&
            newCart.map((item) => (
              <li className="shop-details__food-item">
                <img className=" me-3" src={item.img} alt="" />
                <p className="shop-details__food-item--details me-auto ">
                  <span className="food-name">{item.name}</span>
                  <span className="food-price">
                    {item.price * item.quantity}$
                  </span>
                  <span className="food-delivery">Free Delivery</span>
                </p>

                <div className="shop-details__quantity-box">
                  <button
                    className="btn-quantity"
                    onClick={() => handleQuantity(false, item)}
                  >
                    <i class="bi bi-dash-square-fill"></i>
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="btn-quantity"
                    onClick={() => handleQuantity(true, item)}
                  >
                    <i class="bi bi-plus-square-fill"></i>
                  </button>
                </div>
              </li>
            ))}
        </ul>

        {/*-------------FOOD PRICING-------------*/}

        <ul className="food-pricing">
          <li className="food-pricing__subtotal">
            Sub Total : <span>{subTotal} $</span>
          </li>
          <li className="food-pricing__tax">
            Tax (15%) : <span> {tax} $</span>{" "}
          </li>
          <li className="food-pricing__delivery">
            Delivery : <span> 0 $</span>{" "}
          </li>
          <li className="food-pricing__total">
            {" "}
            Total : <span>{total} $</span>
          </li>
        </ul>

        <button className="btn btn-success d-block mt-3 w-75">
          Place Order
        </button>
      </div>
    </section>
  );
};

export default Checkout;
