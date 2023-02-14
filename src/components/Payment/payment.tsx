import Input from "../core/Input";
import Subtract from "../../assets/subtract.svg";
import Addition from "../../assets/addition.svg";

const Payment=()=>{
    return(
        <div className="bg-white px-[16px] pt-[36px] pb-[24px]">
            <p>Payment for product</p>
            <div className="flex justify-between">
                <label htmlFor="quantity">Qantity</label>
                <div className="flex">
                    <img src={Subtract} alt="" />
                    <Input name="quantity" type={"number"} className="w-6"/>
                    <img src={Addition} alt="" />
                </div>
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <Input name="amount"/>
            </div>
            <button className="bg-blue w-full mt-8 rounded py-2">
                Pay
            </button>

        </div>
    )
}

export default Payment;