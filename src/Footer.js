import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <footer className="footer-container">

        <div className="footer-text">

          <p>3336 South Pioneer Parkway, Suite 302<br />West Valley City, UT
          84120<br />801.417.5386</p>

          <p id="copyRight">
            {dateText}
          </p>

          <table align="center" className="footer-table">

            <tbody>

              <tr>

                <td>

                  <NavLink to="/Home">Home</NavLink>

                </td>

                <td>

                  <NavLink to="/Services">Services</NavLink>

                </td>

                <td>

                  <NavLink to="/Topics">Topics</NavLink>

                </td>

                <td>

                  <NavLink to="/Contact">

                    Contact Us </NavLink>

                </td>

                <td>

                  <NavLink to="/About">About</NavLink>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </footer>
    );
  }

}

const d = new Date();
const dateText = '© 2017 - ' + d.getFullYear();

export default Footer;
