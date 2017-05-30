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



        <section id="projects-section" className="projects-section section">
            <h2 className="section-title">Projects</h2>
              <div className="timeline">
                  <div className="item">
                      <div className="study-place">
                          <h1 className="place">Class project</h1>
                          <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Arizona State University</div>
                      </div>
                      <div className="job-meta">
                          <div className="title">Data mining project</div>
                          <div className="time">Spring 2017</div>
                      </div>
                      <div className="project-desc">
                            <ul>
                                <li>Used Matlab to implement some data mining algorithms and test on data samples.</li>
                                <li>Implemented K-nearest neighbor  alorithm and SSE to train the data and made predications.</li>
                                <li>Implemented K-means and tested SSE with different K values to get better centroid numbers.</li>
                                <li>Implemented active learning with LR classifier and applied ensemble methods to make better prediction from several algorithms.</li>
                            </ul>
                      </div>
                  </div>

                  <div className="item">
                      <div className="project-place">
                          <h3 className="place">Individual project</h3>
                          <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Arizona State University</div>
                      </div>
                      <div className="job-meta">
                          <div className="title">Movie Analysis on Zeppelin</div>
                          <div className="time">Spring 2017</div>
                      </div>
                      <div className="project-desc">
                            <ul>
                                <li>Used Apache Zeppelin on Hortonworks and analized movielens datasets on HDFS.</li>
                                <li>Wrote Scala scripts to format data and converted data to Spark DataFrame.</li>
                                <li>Queried on Spark DataFrames and exposed results as a SQL table, did queries on SQL table via Spark SQL.</li>
                            </ul>
                      </div>
                  </div>

                  <div className="item">
                      <div className="project-place">
                          <h3 className="place">Class project</h3>
                          <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Arizona State University</div>
                      </div>
                      <div className="job-meta">
                          <div className="title">Movie Rating with </div>
                          <div className="title">Collaborative Filtering</div>
                          <div className="time">Fall 2016</div>
                      </div>
                      <div className="project-desc">
                            <ul>
                                <li>Used Spark MLLib ALS recommender system on movielens 10M stable benchmark rating dataset.</li>
                                <li>Launched a Hadoop cluster with Spark using Amazon's Elastic MapReduce service.</li>
                                <li>Wrote scripts to produce similar movies from 1 million ratings.</li>
                            </ul>
                      </div>
                  </div>

                  <div className="item">
                      <div className="project-place">
                          <h3 className="place">Team project</h3>
                          <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Tempe, AZ, USA</div>
                      </div>
                      <div className="job-meta">
                          <div className="title">Mini AppStore with Meteor.js</div>
                          <div className="time">Summer 2016</div>
                      </div>
                      <div className="project-desc">
                            <ul>
                                <li>Built a Python crawler that crawled 1K+ app information from Huawei app store and stored in MongoDB.</li>
                                <li>Designed and implemented an App Store with Agile development and RESTful API.</li>
                                <li>Used Meteor.js methods to make shorter response and reduce network latency.</li>
                                <li>Integrated different React components to make website more scalable and manageable. </li>
                                <li>Deplyed at Heroku and mLab. Demo at:<a href="http://appstore-meteor.herokuapp.com/">BitTiger AppStore</a></li>
                            </ul>
                      </div>
                  </div>

                  <div className="item">
                      <div className="project-place">
                          <h3 className="place">Class project</h3>
                          <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Tempe, AZ, USA</div>
                      </div>
                      <div className="job-meta">
                          <div className="title">Android App</div>
                          <div className="time">Spring 2016</div>
                      </div>
                      <div className="project-desc">
                            <ul>
                                <li>Developed an Android App based on user’s location to post status and information.</li>
                                <li>Contributed to the full mobile application development lifecycle from planning, requirement gathering, development and testing.</li>
                                <li>Integrated Google play services and Google Maps API</li>
                                <li>Integrated different React components to make website more scalable and manageable. </li>
                                <li>Designed location strategy between GPS and Network to save more energy</li>
                                <li>Video demo at:<a href="https://www.youtube.com/watch?v=Y3tJOB4-XMc&t=7s">Whatsup</a></li>
                            </ul>
                      </div>
                  </div>

                  <div className="item">
                      <div className="project-place">
                          <h3 className="place">Internship project</h3>
                          <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Shandong Synthesis Electronic Technology Co., Ltd, Jinan, Shandong, China</div>
                      </div>
                      <div className="job-meta">
                          <div className="title">Web Email Service</div>
                          <div className="time">Summer 2013</div>
                      </div>
                      <div className="project-desc">
                            <ul>
                                <li>Led a team of 4 members to develop mail module for OA system on Spring MVC.</li>
                                <li>Used imap protocol to support interactions with multiple mail servers.</li>
                                <li>Redesigned receiving mail process to fix bugs in synchronization between client and mail server</li>
                                <li>Video demo at:<a href="https://www.youtube.com/watch?v=q_57AgaqJsA">Email Service</a></li>
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

        <section id="awards-section" className="award-section section">
          <h2 className="section-title">Awards</h2>
          <i className="fa fa-trophy" aria-hidden="true"></i>&nbsp;&nbsp;1st place at Coding Challenge hosted by SODA, ASU
          <div className="time-awards"><i className="fa fa-clock-o" aria-hidden="true"></i> Spring 2016</div>
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
