import React, { Component } from 'react';
import Footer from './Footer';

class Contact extends Component {

  render() {
    return (
      <div className="body-container">

        <div className="body-image-container">

          <img
            src={this.props.ContactUsJpg}
            alt="Contact Us" />

        </div>

        <div className="contact-form-container">

          <form
            action="https://15h7awb7ec.execute-api.us-east-2.amazonaws.com/prod/ClayMarksContact"
            method="post"
            target="_blank"
            className="contact-form">

            Name<br />
          <input
            type="text"
            name="name"
            required />

          <br />

          Your Email Address<br />
					<input
						type="text"
						name="email"
						required />

					<br />Message<br />
					<textarea
						name="message"
						required
						className="contact-form-message-input"
						wrap="hard" />

					<br />

					<div className="contact-form-submit">

						<button type="submit">SEND</button>

					</div>

				</form>

			</div>

			<Footer />

		</div>

    );
  }

}

export default Contact;
