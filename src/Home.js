import React, { Component } from 'react';
import Footer from './Footer';

class Home extends Component {

  render() {

    return (
      <div className="body-container">

          <div className="body-image-container" >

            <img src={this.props.homeDrImage} alt="Doctor" className="body-image"/>
						<img src={this.props.homeDrYoungImg} alt="Doctor Young" className="head-shot-home"/>

          </div>

          <div className="inline-columns-container">

            <div className="inline-column1">

              <h2 className="inline-columns-header">Treatments</h2>

              <ul className="inline-columns-ul">

                <li>

                  Foot and Ankle Care </li>

                <li>

                  Fractures/Broken Bones </li>

                <li>

                  Deformities (Bunions, Hammertoes) </li>

                <li>

                  Heel Spur and Plantar Fasciitis </li>

                <li>

                  Ingrown Toenails </li>

                <li>

                  Diabetic Foot Care </li>

                <li>

                  Orthotics and Arch Supports </li>

                <li>

                  Orthopedic Shoes﻿ </li>

                <li>

                  Pediatric and Geriatric Care </li>

              </ul>

            </div>

            <div className="inline-column2">

              <h2 className="inline-columns-header">Certifications</h2>

              <ul className="inline-columns-ul">

                <li>

                  Fellow of the American College of Foot and Ankle Surgeons
                  </li>

                <li>

                  American Board of Foot and Ankle Surgery </li>

                <li>

                  Utah Podiatric Medical Association </li>

                <li>

                  American Podiatric Medical Association </li>

                <li>

                  Foot and Ankle Laser Treatment </li>

              </ul>

            </div>

            <div className="inline-column3">

              <h2 className="inline-columns-header">Commitment</h2>

              <span className="inline-columns-text"> Our office is committed to
              providing you the best foot and ankle care using the latest
              technology and techniques in a cost effective manner.  We also
              work with other physicians when required including orthopedic,
              vascular, and medical specialists to assure your outcome is the
              best possible. </span>

            </div>

          </div>


          <Footer />
      </div>
    );
  }

}

export default Home;
