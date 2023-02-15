import Input from "../core/Input";
import Subtract from "../../assets/subtract.svg";
import Addition from "../../assets/addition.svg";
import { useDispatch } from "react-redux";
import { setPaymentData } from "../../redux/slices/paymentSlice";
import { useAppSelector } from "../../index";
import {useState} from "react";

const Payment=({handlePayment, data}:{handlePayment:()=> void, data: any})=>{
    
    const dispatch = useDispatch();
    const { payment} = useAppSelector((state) => state.payment);

    const [qty, setQty]= useState(0)

    return(
        <div className="bg-white px-[16px] pt-[36px] pb-[24px]">
            <p className="font-semibold 2md mb-2">Payment for product</p>
            {Number(data?.page_amount)>0 &&(
                <div className="flex justify-between">
                <label htmlFor="quantity">Qantity</label>
                <div className="flex">
                    <img src={Subtract} alt="" onClick={()=>{setQty((num)=>num-1); dispatch(setPaymentData({...payment,quantity:qty}))}} />
                    <Input name="quantity" type={"number"} className="w-16 md:px-1  mx-2 h-8" value={qty} onChange={(e)=>{setQty(Number(e.target.value));dispatch(setPaymentData({...payment,quantity: e.target.value}))}}/>
                    <img src={Addition} alt=""  onClick={()=>{setQty((num)=>num+1);dispatch(setPaymentData({...payment,quantity:qty}))}}  />
                </div>
            </div>
            )}
            
            <div>
                <label htmlFor="amount">Amount</label>
                <Input name="amount" type="number" value={data?.page_amount} onChange={(e)=>dispatch(setPaymentData({...payment,amount: data?.page_amount||e.target.value}))}/>
            </div>
            <button className="bg-blue w-full mt-8 rounded py-2 text-white" onClick={handlePayment}>
                Pay
            </button>

        </div>
    )
}

export default Payment;