import React from 'react';
import './App.css'; // Import your CSS file
import Header from "./components/Header/Header.js";
import InstructorCart from "./components/InstructorCart/InstructorCart.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div>
      <Header />
      <InstructorCart/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
