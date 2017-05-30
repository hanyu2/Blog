import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <header className="header">
        <div className="top-bar container-fluid">
            <div className="actions">
                <a className="btn hidden-xs animated infinite swing" href="mailto:hanyu2@asu.edu"><i className="fa fa-paper-plane" aria-hidden="true"></i> Hire Me</a>
                <a className="btn" href="/#"><i className="fa fa-book" aria-hidden="true"></i>Blog</a>
                <a className="btn" href="/#"><i className="fa fa-download" aria-hidden="true"></i> Download My Resume</a>
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
                <div className="location"><i className="fa fa-map-marker" aria-hidden="true">&nbsp;</i>Tempe, AZ, USA</div>
                <div className="profile">
                    <p>Master Student in Computer Science at Arizona State University.<br/>
                    Experienced in algorithm, software development, web development and data engineering.<br />
                    Seeking job opportunities to solve challenging problems through teamwork.<br />
                    Give me a chance, give you a surprise!</p>
                </div>
            </div>
        </div>

        <div className="contact-info">
            <div className="container text-center">
                <ul className="list-inline">
                    <li className="email"><i className="fa fa-envelope"></i><a href="mailto:hanyu2@asu.edu">hanyu2@asu.edu</a></li>
                    <li><i className="fa fa-phone"></i> 480 452 9484</li>
                    <li className="website"><i className="fa fa-globe"></i><a href="http://www.han-yu.me" target="_blank">www.han-yu.me</a></li>
                </ul>
            </div>
        </div>

        <div className="page-nav-space-holder hidden-xs">
            <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
                <div className="container">
                    <ul id="page-nav" className="nav page-nav list-inline">
                        <li><a className="scrollto" href="/#education-section">Education</a></li>
                        <li><a className="scrollto" href="/#projects-section">Projects</a></li>
                        <li><a className="scrollto" href="/#skills-section">Skills</a></li>
                        <li><a className="scrollto" href="/#awards-section">Awards</a></li>
                        <li><a className="scrollto" href="/#contact-section">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
  }
};
export default Header;
