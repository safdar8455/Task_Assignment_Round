import React from 'react';
import  "./Testimonials.css";
import profile from "../../assets/profile.png";

const cart = [
  {
    profile: profile,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies velit vel mi feugiat, ac feugiat eros suscipit. Vivamus nec vehicula placerat sed quis nulla."
  },
  {
    profile: profile,
    name: "Jane Smith",
    text: "Sed sit amet eros a felis luctus facilisis. Integer at urna in nunc vehicula placerat sed quis nulla. Duis suscipit arcu ut nisi tincidunt, nec rhoncus elit sodales."
  },
  {
    profile: profile,
    name: "Jane Smith",
    text: "Sed sit amet eros a felis luctus facilisis. Integer at urna in nunc vehicula placerat sed quis nulla. Duis suscipit arcu ut nisi tincidunt, nec rhoncus elit sodales."
  },
];

const Testimonials = () => {
  return (
    <div className='testimonial-container'>
      <h1>Testimonials</h1>
      <div className="cart">
        {cart.map((cart, index) => (
          <div key={index} className="testimonial">
           
            <div className="testimonial-head">
            <img src={cart.profile} alt="Profile pic" className="profile" />
              <h3>{cart.name}</h3>
            </div>
            <div className="testimonial-content">
              <p>{cart.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
