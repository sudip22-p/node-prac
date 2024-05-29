import React from 'react';
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <div className="App">
    <h1 className="text-4xl text-[#6e41e0] font-bold text-center my-8 transform transition duration-500 hover:scale-105 hover:text-green-500">
    eSewa Payment Integration
  </h1>
      <PaymentForm />
    </div>
  );
}

export default App;
