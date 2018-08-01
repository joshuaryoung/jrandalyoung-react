import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import menuButton from './img/Menu-thin-circular-outlined-button.svg';
import { CSSTransition } from 'react-transition-group';
import withSizes from 'react-sizes';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {menuOpen: !this.props.isMobile};
  }

  handleMenuClick()
  {
    this.setState({menuOpen : !this.state.menuOpen});
  }

	handleLinkClick()
  {
    if(this.props.isMobile)
		{
			window.scrollTo({top:0, behavior: 'smooth'});
			this.setState({menuOpen : !this.state.menuOpen});
		}
		else
		{
			window.scrollTo({top:0, behavior: 'instant'});
		}
  }

  render() {
    const navLinksJsx = navLinks.map(index => {
      return(
        <CSSTransition key={index.index} classNames="fade" timeout={timeoutDuration} in={this.state.menuOpen} unmountOnExit={true}>
          <NavLink activeClassName="active-navlink" to={index.location}>
            <CSSTransition appear={true} classNames="fade" timeout={timeoutDuration} in={this.state.menuOpen} unmountOnExit={true}>
              <div className="nav-bar-text" onClick={(this.state.menuOpen)? this.handleLinkClick.bind(this) : null}>
                {index.text}
              </div>
            </CSSTransition>
          </NavLink>
        </CSSTransition>
      );
    });

    return (
      <div className={"nav-bar"} style={(this.state.menuOpen ? styleOpen : null)}>
        <img src={menuButton} onClick={this.handleMenuClick.bind(this)} alt="menuButton"/>
        <div className="nav-bar-table">

          {navLinksJsx}

        </div>

      </div>
    );
  }

}

const timeoutDuration = 300;

const navLinks =
[{
  location: '/Home',
  text: 'Home',
  index: 0
},
{
  location: '/Services',
  text: 'Services',
  index: 1
},
{
  location: '/Topics',
  text: 'Topics',
  index: 2
},
{
  location: '/Contact',
  text: 'Contact',
  index: 3
},
{
  location: '/About',
  text: 'About',
  index: 4
}];

const styleOpen =
{
  maxHeight: 34 + 'vh',
  transition: 'max-height ' + timeoutDuration +'ms ease-out'
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 480,
})

export default withSizes(mapSizesToProps)(NavBar);
