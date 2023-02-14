import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import BilliDesign from './components/BilliDesign';
import Payment from './components/Payment';
import CustomerDetails from './components/CustomerDetails';

function App() {
  return (
    <div className="bg-neutral grid grid-cols-2 px-[300px] pt-[130px] gap-4">
      <BilliDesign/>
      <Payment/>
      <CustomerDetails/>
    </div>
  );
}

export default App;
