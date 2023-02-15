import Input from "../core/Input";
import Subtract from "../../assets/subtract.svg";
import Addition from "../../assets/addition.svg";
import { useDispatch } from "react-redux";
import { setPaymentData } from "../../redux/slices/paymentSlice";
import { useAppSelector } from "../../index";

const Payment=({handlePayment, data}:{handlePayment:()=> void, data: any})=>{

    const dispatch = useDispatch();
    const { payment} = useAppSelector((state) => state.payment);
    return(
        <div className="bg-white px-[16px] pt-[36px] pb-[24px]">
            <p className="font-semibold 2md mb-2">Payment for product</p>
            {Number(data?.page_amount)>0 &&(
                <div className="flex justify-between">
                <label htmlFor="quantity">Qantity</label>
                <div className="flex">
                    <img src={Subtract} alt="" />
                    <Input name="quantity" type={"number"} className="w-10 md:px-1  mx-2 h-8" onChange={(e)=>dispatch(setPaymentData({...payment,quantity: e.target.value}))}/>
                    <img src={Addition} alt="" />
                </div>
            </div>
            )}
            
            <div>
                <label htmlFor="amount">Amount</label>
                <Input name="amount" type="text" onChange={(e)=>dispatch(setPaymentData({...payment,amount: e.target.value}))}/>
            </div>
            <button className="bg-blue w-full mt-8 rounded py-2 text-white" onClick={handlePayment}>
                Pay
            </button>

        </div>
    )
}

export default Payment;