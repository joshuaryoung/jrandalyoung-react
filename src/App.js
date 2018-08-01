import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PreCacheImg from 'react-precache-img';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './App.css';

import Home from './Home';
import Services from './services';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Topics from './Topics';
import About from './About';

import homeDrImage from './img/doctor-1461913281svT.jpg';
import homeDrYoungImg from './img/headShot.jpg';
import podiatricSymbol from './img/Caduceus_clip_art.svg';
import footServices from './img/FootServices.jpeg';
import topicsJPG from './img/Topics.jpeg';
import ContactUsJpg from './img/ContactUs.jpeg';
import AboutPNG from './img/About.png';

const pcImages = [
  homeDrImage,
  podiatricSymbol,
  footServices,
  topicsJPG,
  ContactUsJpg,
  AboutPNG,
	homeDrYoungImg
];

class App extends Component {

  render() {
    return (
      <TransitionGroup>
        <CSSTransition classNames="page-fade" timeout = {2000} appear={true}>
          <Router>
            <div>
              <PreCacheImg
                images=
                {
                  pcImages
                }
              />
              <Header podiatricSymbol={podiatricSymbol} homeDrYoungImg={homeDrYoungImg}/>
              <NavBar />
              <Route render = {({location}) => (
                <div>
                  <TransitionGroup className="component-container">
                    <CSSTransition key={location.key} classNames="component-fade" timeout = {500}>
                      <Switch location={location}>
                        <Route path = "/Home" component = {()=>
                          {
                            return(<Home homeDrImage={homeDrImage} homeDrYoungImg={homeDrYoungImg} />);
                          }} />

                        <Route path = "/Services" component = {()=>
                          {
                            return(<Services footServices={footServices} />);
                          }}
                        />
                        <Route path = "/Topics" component = {()=>
                          {
                            return(<Topics topicsJPG={topicsJPG} />);
                          }} />
                        <Route path = "/Contact" component = {()=>
                          {
                            return(<Contact ContactUsJpg={ContactUsJpg} />);
                          }} />
                        <Route path = "/About" component = {()=>
                          {
                            return(<About AboutPNG={AboutPNG} />);
                          }} />
                        <Route component = {()=>
                          {
                            return(<Home homeDrImage={homeDrImage} homeDrYoungImg={homeDrYoungImg} />);
                          }}
                        />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>

                </div>

                )}>

              </Route>
            </div>

          </Router>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default App;
