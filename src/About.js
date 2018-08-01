import React, { Component } from 'react';
import Footer from './Footer';

class About extends Component {

  render() {
    return (
    <div className="body-container">
        <div className="body-image-container">
          <img
src={this.props.AboutPNG}
alt="About"
className="body-image" />
        </div>
        <div className="about-body-text-container">
          <h2 className="about-body-text-headings">
            Biography
          </h2>
          <div className="about-body-text">
            Dr. Randal Young was born and raised in Salt Lake City, Utah. He attended Olympus High School and went on to get his undergraduate degree at the University of Utah in Geography and Pre-Medicine. He also spent two years in Mexico on a mission during that time period. Dr. Young has two grown children and enjoys spending time with his family. He also enjoys traveling, golf, and hiking in the mountains around Salt Lake City,  He plays the viola and has played in the Salt Lake Symphony.  He is an avid oil painter as well and loves landscapes.
          </div>
        </div>
        <div className="about-body-text-container">
          <h2 className="about-body-text-headings">
            Education
          </h2>
          <div className="about-body-text">
            Dr. Young attended the Ohio College of Podiatric Medicine and following his graduation attended a Foot and Ankle Surgical Residency Program in Salt Lake City.
          </div>
        </div>
        <div className="about-body-text-container">
          <h2 className="about-body-text-headings">
            Certifications
          </h2>
          <div className="about-body-text">
            <ul>
              <li>
Fellow of the American College of Foot and Ankle Surgeons
</li>
              <li>
American Board of Foot and Ankle Surgery
</li>
              <li>
Utah Podiatric Medical Association
</li>
              <li>
American Podiatric Medical Association
</li>
              <li>
Foot and Ankle Laser Treatment
</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>

    );
  }

}

export default About;
