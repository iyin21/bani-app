import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import BilliDesign from './components/BilliDesign';
import Payment from './components/Payment';
import CustomerDetails from './components/CustomerDetails';
import Footer from './components/footer';
import { useGetPaymentDetails } from './hooks/payment.hook';

function App() {
  const handlePayment=()=>{
  //  let handler= window.BaniPopUp({
  //     amount: 34,
  //   })
  //   handler
   }

  const {isLoading,userData}=useGetPaymentDetails({page_ref:"share-the-money"})
  console.log(userData)
  return (
    <div>
      {isLoading ?(
        <div>

        </div>
      ):(
        <div className="bg-neutral">
          <div className="grid grid-cols-2 px-[250px] pt-[130px] gap-4">
          <BilliDesign/>
          <Payment handlePayment={handlePayment} data={userData?.data}/>
          <CustomerDetails data={userData?.data}/>
          </div>
        <Footer/>
      </div>
      )}
     
    </div>
    
  );
}

export default App;
