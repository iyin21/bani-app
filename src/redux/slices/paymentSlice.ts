import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaymentInterface, PaymentDataInterface } from '../types';

const initialState: PaymentDataInterface={
   payment: null
};

export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers:{
        setPaymentData:(state, action)=>{
            state.payment= action.payload;
        },
        clearPaymentData:(state, action)=>{
        
        state.payment={
            phoneNumber: "",
            firstName: "",
            lastName: "",
            emailAddress:"",
            message: "",
            amount: "",
            quantity: ""
        }
        }
    }

})

export const {setPaymentData, clearPaymentData}= paymentSlice.actions;

export default paymentSlice.reducer;