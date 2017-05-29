import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <header className="header">
        <div className="top-bar container-fluid">
            <div className="actions">
                <a className="btn hidden-xs" href="mailto:hanyu2@asu.edu"><i className="fa fa-paper-plane" aria-hidden="true"></i> Hire Me</a>
                <a className="btn" href="http://themes.3rdwavemedia.com/sphere/1.1/#"><i className="fa fa-download" aria-hidden="true"></i> Download My Resume</a>
            </div>
            <ul className="social list-inline">
                <li><a href="https://www.linkedin.com/in/hanyu2"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/hanyu2"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
            </ul>
        </div>

        <div className="intro">
            <div className="container text-center">
                <img className="profile-image" src="/images/profile-image.png" alt=""/>
                <h1 className="name">Han Yu</h1>
                <div className="title">Software Engineer</div>
                <div className="profile">
                    <p>Master Student in Computer Science at Arizona State University</p>
                    <p>Currently looking for full time jobs.</p>
                </div>
            </div>
        </div>

        <div className="contact-info">
            <div className="container text-center">
                <ul className="list-inline">
                    <li className="email"><i className="fa fa-envelope"></i><a href="mailto:hanyu2@asu.edu">hanyu2@asu.edu</a></li>
                    <li><i className="fa fa-phone"></i> 480 452 9484</li>
                    <li className="website"><i className="fa fa-globe"></i><a href="http://themes.3rdwavemedia.com/sphere/1.1/#" target="_blank">portfoliosite.com</a></li>
                </ul>
            </div>
        </div>

        <div className="page-nav-space-holder hidden-xs">
            <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
                <div className="container">
                    <ul id="page-nav" className="nav page-nav list-inline">
                        <li><a className="scrollto" href="http://themes.3rdwavemedia.com/sphere/1.1/#experiences-section">Experiences</a></li>
                        <li><a className="scrollto" href="http://themes.3rdwavemedia.com/sphere/1.1/#education-section">Education</a></li>
                        <li><a className="scrollto" href="http://themes.3rdwavemedia.com/sphere/1.1/#skills-section">Skills</a></li>
                        <li><a className="scrollto" href="http://themes.3rdwavemedia.com/sphere/1.1/#testimonials-section">Testimonials</a></li>
                        <li><a className="scrollto" href="http://themes.3rdwavemedia.com/sphere/1.1/#portfolio-section">Portfolio</a></li>
                        <li><a className="scrollto" href="http://themes.3rdwavemedia.com/sphere/1.1/#contact-section">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
  }
};
export default Header;
