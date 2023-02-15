import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import paymentSlice from "../slices/paymentSlice";

export const store = configureStore({
  reducer: {
    payment: paymentSlice,
  },
});
