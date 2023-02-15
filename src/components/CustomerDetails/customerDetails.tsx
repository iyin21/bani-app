import Input from "../core/Input";
import { useDispatch } from "react-redux";
import { setPaymentData } from "../../redux/slices/paymentSlice";
import { useAppSelector } from "../../index";
import {useEffect} from "react";

const CustomerDetails=({data}:{data:any})=>{
    const dispatch = useDispatch();
    const { payment} = useAppSelector((state) => state.payment);
    console.log(payment);
    useEffect(()=>{
        console.log(payment)
    },[])
    
    return(
        <div className="bg-white px-[16px] pt-[36px] pb-[24px]">
            <h4 className="font-semibold 2md mb-2">Customer’s details</h4>
           <div className="mb-2">
                <label htmlFor="phoneNumber" className="mb-2">Your Phone number</label>
               
                <Input name="phoneNumber" placeholder="09068689444"  onChange={(e)=>dispatch(setPaymentData({...payment,phoneNumber: e.target.value}))}/>
           </div>
           <div className="mb-2">
                <label htmlFor="fullName" className="mb-2">Your full name</label>
                <div className="flex">
                    <Input name="firstName" placeholder="First name" value={data?.page_first_image} onChange={(e)=>dispatch(setPaymentData({...payment,firstName: e.target.value}))}/>
                    <Input name="lastName" placeholder="Last name" className="ml-2" onChange={(e)=>dispatch(setPaymentData({lastName: e.target.value}))}/>
                </div>
           </div>
           <div className="mb-2">
                <label htmlFor="emailAddress" className="mb-2">Email Address</label>
                <Input name="emailAddress" placeholder="e.g rodney@gmail.com" onChange={(e)=>dispatch(setPaymentData({...payment,emailAddress: e.target.value}))}/>
           </div>
           <div className="mb-2 flex flex-col">
                <label htmlFor="message" className="mb-2">Your message</label>
                <textarea name="message" id="" cols={30} rows={5} placeholder="Write a message here" className="border border-neutral rounded focus:outline-none" onChange={(e)=>dispatch(setPaymentData({...payment,message: e.target.value}))}/>
           </div>
        </div>
    )
}
export default CustomerDetails;