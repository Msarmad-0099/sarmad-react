import React from 'react';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div className="App" >
      <Dinner dishName="Chicken Khari" sweetdishName="custered"/>
      <Dinner dishName="Zinger" sweetdishName="Russian salad"/>
      <Dinner dishName="Nehari" sweetdishName="Icecream"/>
    </div>
  );
}

export default App;
