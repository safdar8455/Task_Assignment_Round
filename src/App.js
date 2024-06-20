import React from 'react';
import './App.css'; // Import your CSS file
import Header from "./components/Header/Header.js";
import InstructorCart from "./components/InstructorCart/InstructorCart.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <InstructorCart/>
      <Testimonials/>
    </div>
  );
}

export default App;
