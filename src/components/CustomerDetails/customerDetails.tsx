import Input from "../core/Input";

const CustomerDetails=()=>{
    return(
        <div className="bg-white px-[16px] pt-[36px] pb-[24px]">
            <h4>Customer’s details</h4>
           <div>
                <label htmlFor="phoneNumber">Your Phone number</label>
                <Input name="phoneNumber"/>
           </div>
           <div>
                <label htmlFor="fullName">Your full name</label>
                <div className="flex">
                    <Input name="firstName" placeholder="first name"/>
                    <Input name="lastName" placeholder="lastName" />
                </div>
           </div>
           <div>
                <label htmlFor="emailAddress">Email Address</label>
                <Input name="emailAddress"/>
           </div>
           <div>
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="" cols={30} rows={5} placeholder="Write a message here"/>
           </div>
        </div>
    )
}
export default CustomerDetails;