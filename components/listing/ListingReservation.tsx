"use client";

import React from "react";
import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';




type Props = {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
};



function ListingReservation({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}: Props) {

  async function handleReserve() {
    try {
      const stripe = await loadStripe('pk_test_51QlU3q02QnJoD6Qk3zSW0y1NmqFqI7bYp4tUfSevzi8gkNwX330itx2ZIWCtFBSruZTIHd0ocar8J8KTemy84hxy0080TVB9He'); // Replace with your Stripe publishable key
  
      // Create a checkout session
      const response = await axios.post('/api/create-checkout-session', {
        price,
        dateRange,
      });
  
      // Redirect to the Stripe checkout page
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to proceed with payment. Please try again.');
    }
  }
  

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <p className="flex gap-1 text-2xl font-semibold">
          $ {price} <p className="font-light text-neutral-600">night</p>
        </p>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={handleReserve} />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <p>Total</p>
        <p> $ {totalPrice}</p>
      </div>
    </div>
  );
}


export default ListingReservation;
