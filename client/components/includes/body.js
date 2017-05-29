import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Body extends Component{
  render(){
    return(
      <div className="wrapper container">
        <section id="experiences-section" className="experiences-section section">
            <h2 className="section-title">Work Experiences</h2>
            <div className="timeline">
                <div className="item">
                    <div className="work-place">
                        <h3 className="place">Google</h3>
                        <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>Mountain View</div>
                    </div>
                    <div className="job-meta">
                        <div className="title">Senior Software Engineer</div>
                        <div className="time">2016 - Present</div>
                    </div>
                    <div className="job-desc">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Donec pede justo ante</li>
                            <li>Maecenas tempus tellus eget </li>
                        </ul>
                    </div>
                </div>

                <div className="item">
                    <div className="work-place">
                        <h3 className="place">Apple</h3>
                        <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>New York</div>
                    </div>
                    <div className="job-meta">
                        <div className="title">Lead Software Engineer</div>
                        <div className="time">2015 - 2016</div>
                    </div>
                    <div className="job-desc">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                    </div>
                </div>

                <div className="item">
                    <div className="work-place">
                        <h3 className="place">Twitter</h3>
                        <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>London</div>
                    </div>
                    <div className="job-meta">
                        <div className="title">Software Engineer</div>
                        <div className="time">2013 - 2015</div>
                    </div>
                    <div className="job-desc">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                    </div>
                </div>

                <div className="item">
                    <div className="work-place">
                        <h3 className="place">Startup Hub</h3>
                        <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>London</div>
                    </div>
                    <div className="job-meta">
                        <div className="title">Founder &amp; Lead Developer</div>
                        <div className="time">2012 - 2013</div>
                    </div>
                    <div className="job-desc">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="education-section" className="education-section section">
            <h2 className="section-title">Education</h2>
            <div className="row">
                <div className="item col-xs-12 col-sm-4">
                    <div className="item-inner">
                        <h3 className="degree">MSc Computer Science</h3>
                        <div className="education-body">
                            University College of London
                        </div>
                        <div className="time">2011 - 2012</div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                        </div>
                    </div>
                </div>
                <div className="item col-xs-12 col-sm-4">
                    <div className="item-inner">
                        <h3 className="degree">MSc Applied Mathematics</h3>
                        <div className="education-body">
                            University of Bristol
                        </div>
                        <div className="time">2010 - 2011</div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                        </div>
                    </div>
                </div>
                <div className="item col-xs-12 col-sm-4">
                    <div className="item-inner">
                        <h3 className="degree">BSc Creative Technology</h3>
                        <div className="education-body">
                            University of Bristol
                        </div>
                        <div className="time">2007 - 2010</div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="skills-section" className="skills-section section text-center">
            <h2 className="section-title">Professional Skills</h2>
            <div className="top-skills">
                <h3 className="subtitle">Top Skills</h3>
                <div className="row">
                    <div className="item col-xs-12 col-sm-4">
                        <div className="item-inner">
                            <div className="chart-easy-pie text-center">
                                <div className="chart-theme-1 chart" data-percent="98"><span>98</span>%<canvas height="220" width="220"></canvas></div>
                            </div>
                            <h4 className="skill-name">Python &amp; Django</h4>
                            <div className="level">Expert, 8 years</div>
                            <div className="desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                            </div>
                        </div>
                    </div>
                    <div className="item col-xs-12 col-sm-4">
                        <div className="item-inner">
                            <div className="chart-easy-pie text-center">
                                <div className="chart-theme-1 chart" data-percent="90"><span>90</span>%<canvas height="220" width="220" ></canvas></div>
                            </div>
                            <h4 className="skill-name">JavaScript</h4>
                            <div className="level">Expert, 8 years</div>
                            <div className="desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                            </div>
                        </div>
                    </div>
                    <div className="item col-xs-12 col-sm-4">
                        <div className="item-inner">
                            <div className="chart-easy-pie text-center">
                                <div className="chart-theme-1 chart" data-percent="85"><span>85</span>%<canvas height="220" width="220" ></canvas></div>
                            </div>
                            <h4 className="skill-name">React &amp; Angular</h4>
                            <div className="level">Advanced, 4 years</div>
                            <div className="desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="other-skills">
                <h3 className="subtitle">Other Skills</h3>
                <div className="misc-skills">
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">SASS</span>
                    <span className="skill-tag">LESS</span>
                    <span className="skill-tag">Git</span>
                    <br/>
                    <span className="skill-tag">Ruby</span>
                    <span className="skill-tag">PHP</span>
                    <span className="skill-tag">Wireframe</span>
                    <span className="skill-tag">Spanish</span>
                    <span className="skill-tag">French</span>
                </div>
            </div>
        </section>

        <section id="contact-section" className="contact-section section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="intro">
                <img className="profile-image" src="./images/profile-image.png" alt=""/>
                <div className="dialog">
                    <p>I&#39;m currently taking on freelance work. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
                    <p><strong>I can help with the following:</strong></p>
                    <ul className="list-unstyled service-list">
                        <li><i className="fa fa-check" aria-hidden="true"></i> App development with ReactJS</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Front-end development with AngularJS</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Back-end development with Django/Python</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> UI development</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> UX prototyping</li>
                    </ul>
                    <p>Drop me a line at <a href="mailto:someone@example.com">james.doe@website.com</a> or call me at <a href="tel:01234567890">0123 456 7890</a></p>
                    <ul className="social list-inline">
                        <li><a href="http://themes.3rdwavemedia.com/sphere/1.1/#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="http://themes.3rdwavemedia.com/sphere/1.1/#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="http://themes.3rdwavemedia.com/sphere/1.1/#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="http://themes.3rdwavemedia.com/sphere/1.1/#"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
                        <li><a href="http://themes.3rdwavemedia.com/sphere/1.1/#"><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
      </div>
    );
  }
};
export default Body;
