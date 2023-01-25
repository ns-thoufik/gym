import React from 'react';
import './App.css';
// import Testimonials from './assets/testimonials/Testimonials';
import Hero from './component/hero/Hero';
import Plans from './component/plans/Plans';
import Programs from './component/programs/Programs';
import Reasons from './component/Reasons/Reasons';
import Join from './component/join/Join';
import Footer from './component/Footer/Footer';

function App() {
  return (
   <div className="App">
    <Hero/>
    <Programs/>
    <Reasons/>
    <Plans/>
    {/* <Testimonials /> */}
    <Join/>
    <Footer/>
   </div>
  );
};

export default App;
