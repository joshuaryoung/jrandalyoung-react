import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="header-container">
			
				<img src={this.props.homeDrYoungImg} alt="head shot" className="head-shot"/>

        <img src={this.props.podiatricSymbol} alt="Podiatric Symbol"
        className="header-img" />

        <div className="header-text-container">

          <h1 className="header-text-h1">

            J. Randal Young, DPM PC </h1>

          <h2 className="header-text-h2">

            Podiatric Medicine and Surgery </h2>

        </div>

      </div>
    );
  }

}

export default Header;
