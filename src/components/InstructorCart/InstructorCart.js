import React from 'react';
import './Instructor.css'; // Import your CSS file
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import profile from "../../assets/profile.png"

function InstructorCart() {
  return (
    <div className="instructor-container">
      <div className="instructor-header">
      <div className="header-text">
        <h1>Our Instructor</h1>
        <p>Learn from Our Experienced and Dedicated Instructors.</p>
      </div>

      <div className="button-container">
        <Button>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
      </div>

      <div className="instructor-details">
        <div>
          <img src={profile} alt="Profile pic" className="profile" />
        </div>

        <div>
          <h1>Instructor Name</h1>
          <h2>Post Instructor@tnpofficer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies velit vel mi feugiat, ac feugiat eros suscipit. Vivamus nec dictum risus. Sed sit amet eros a felis luctus facilisis. Integer at urna in nunc vehicula placerat sed quis nulla.</p>
        </div>
      </div>
    </div>
  );
}

export default InstructorCart;
