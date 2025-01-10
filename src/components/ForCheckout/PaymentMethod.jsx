"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../../../redux/api/order/orderSlice";

const PaymentMethod = () => {
  const paymentMethod = useSelector((state) => state.order.paymentMethod); 
  const dispatch = useDispatch();

  const handlePaymentChange = (method) => {
    dispatch(setPaymentMethod({ payment: method })); // Update payment method in Redux store
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <input
          type="radio"
          id="payment-cash"
          name="paymentMethod"
          value="cash"
          className="radio radio-sm "
          checked={paymentMethod === "cash"} // Ensure case sensitivity matches
          onChange={() => handlePaymentChange("cash")}
        />
        <label className="text-sm" htmlFor="payment-cash">Cash on delivery</label>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="radio"
          id="payment-card"
          name="paymentMethod"
          value="card"
          className="radio radio-sm "
          checked={paymentMethod === "card"} // Ensure case sensitivity matches
          onChange={() => handlePaymentChange("card")}
        />
        <label className="text-sm" htmlFor="payment-card">Pay via Stripe</label>
      </div>
    </div>
  );
};

export default PaymentMethod;
