import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Body extends Component{
  render(){
    return(
      <div className="wrapper container">
        <section id="education-section" className="education-section section">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
                <div className="item">
                    <div className="study-place">
                        <h3 className="place">Arizona State University</h3>
                        <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Tempe, AZ, USA</div>
                    </div>
                    <div className="job-meta">
                        <div className="title">MS in Computer Science </div>
                        <div className="time">2015 - Present</div>
                    </div>
                    <div className="study-desc">
                      <p>Exptected to graduate in Fall 2017.</p>
                      <p>Related courses: Artifitial Intelligence, Data Mining, Foundation of Algoithms, Mobile Computing, Knowledge representation, Software design and Analysis</p>
                    </div>
                </div>

                <div className="item">
                    <div className="study-place">
                        <h3 className="place">Shandong Normal University</h3>
                        <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Jinan, Shandong, China</div>
                    </div>
                    <div className="job-meta">
                        <div className="title">BS in Computer Science</div>
                        <div className="time">2011 - 2015</div>
                    </div>
                    <div className="study-desc">
                          <ul>
                              <li>The 10th "Qilu" Software Design Contest, Honorable Award, Jinan Computer Society</li>
                              <li>University Scholarship, Shandong Normal University</li>
                              <li>The 5th "Lanqiao" Cup National Software Contest, Provincial Second Class Award (Shandong), Ministry of Industry and Information Technology of China</li>
                              <li>The 5th National Software Outsourcing Innovation Contest for College Students, Successful Participant, Ministry of Education of China</li>
                          </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills-section" className="skills-section section text-center ">
            <h2 className="section-title">Professional Skills</h2>
            <div className="top-skills">
                <h3 className="subtitle">Top Skills</h3>
                <div className="row">
                    <div className="item col-xs-12 col-sm-4">
                        <div className="item-inner">
                            <h4 className="skill-name">Java</h4>
                            <div className="level">Proficient, 5 years</div>
                            <div className="desc">
                              I started learning Java by myself when I was a freshman. I also learned Objected Oriented Programming and design patterns
                              with which I developed some classic games in GUI.
                            </div>
                        </div>
                    </div>
                    <div className="item col-xs-12 col-sm-4">
                        <div className="item-inner">
                            <h4 className="skill-name">Meteor.js &amp; React.js</h4>
                            <div className="level">Familiar, 1 years</div>
                            <div className="desc">
                              With two guys in 2016 summer, we developed an Android App Store with Meteor.js and React.js.
                              Check out: <a href="http://appstore-meteor.herokuapp.com/">BitTiger AppStore</a><br/>
                              And this website is also built with Meteor.js and React.js. Thanks!
                            </div>
                        </div>
                    </div>
                    <div className="item col-xs-12 col-sm-4">
                        <div className="item-inner">
                            <h4 className="skill-name">Python</h4>
                            <div className="level">Familiar, 2 years</div>
                            <div className="desc">
                              Used python in AI class to implement searching, Reinforcement Learning algorithms. And I am
                              currently using Python to crawl intersting data on the Internet.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="other-skills">
                <h3 className="subtitle">Other Skills</h3>
                <div className="misc-skills">
                    <span className="skill-tag">Algorithm</span>
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">MongoDB</span>
                    <br/>
                    <span className="skill-tag">Spark</span>
                    <span className="skill-tag">Scala</span>
                    <span className="skill-tag">Ambari</span>
                    <span className="skill-tag">Matlab</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">Android</span>
                </div>
            </div>
        </section>

        <section id="contact-section" className="contact-section section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="intro">
                <img className="profile-image" src="./images/profile-image.png" alt=""/>
                <div className="dialog">
                    <p>I&#39;m looking for software engineering and full stack jobs.</p>
                    <p><strong>I can help with the following:</strong></p>
                    <ul className="list-unstyled service-list">
                        <li><i className="fa fa-check" aria-hidden="true"></i> Web development with MetoerJS/ReactJS or other frameworks</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Back-end development with Java/Python</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Data engineering on Hadoop with Spark.</li>
                    </ul>
                    <p>Drop me a line at <a href="mailto:hanyu2@asu.edu">hanyu2@asu.edu</a> or call me at 480 452 9484</p>
                    <ul className="social list-inline">
                        <li><a href="https://www.linkedin.com/in/hanyu2"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/hanyu2"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
      </div>
    );
  }
};
export default Body;
