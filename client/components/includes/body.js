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

        <section id="portfolio-section" className="portfolio-section section">
           <h2 className="section-title">Portfolio</h2>
           <ul id="filters" className="filters clearfix">
               <li className="type active" data-filter="*">All</li>
               <li className="type" data-filter=".backend">Back-end</li>
               <li className="type" data-filter=".frontend">Front-end</li>
           </ul>
           <div className="items-wrapper isotope row" styles="position: relative; height: 624px;">
               <div className="item frontend col-md-3 col-xs-6 " styles="position: absolute; left: 0px; top: 0px;">
                   <div className="item-inner">
                       <figure className="figure">
                           <img className="img-responsive" src="./images/portfolio-1.jpg" alt=""/>
                       </figure>
                       <div className="content text-left">
                           <h3 className="sub-title"><a href="/#">Project Lorem Ipsum</a></h3>
                           <div className="meta">AngularJS</div>
                           <div className="action"><a href="/#">View on Github</a></div>
                       </div>
                       <a className="link-mask" href="/#"></a>
                   </div>
               </div>
               <div className="item backend col-md-3 col-xs-6 " styles="position: absolute; left: 270px; top: 0px;">
                   <div className="item-inner">
                       <figure className="figure">
                           <img className="img-responsive" src="./images/portfolio-2.jpg" alt=""/>
                       </figure>
                       <div className="content text-left">
                           <h3 className="sub-title"><a href="/#">Project Lorem Ipsum</a></h3>
                           <div className="meta">Django</div>
                           <div className="action"><a href="/#">View on Github</a></div>
                       </div>
                       <a className="link-mask" href="/#"></a>
                   </div>
               </div>
               <div className="item backend frontend col-md-3 col-xs-6 " styles="position: absolute; left: 540px; top: 0px;">
                   <div className="item-inner">
                       <figure className="figure">
                           <img className="img-responsive" src="./images/portfolio-3.jpg" alt=""/>
                       </figure>
                       <div className="content text-left">
                           <h3 className="sub-title"><a href="/#">Project Lorem Ipsum</a></h3>
                           <div className="meta">Django/JavaScript</div>
                           <div className="action"><a href="/#">View on Github</a></div>
                       </div>
                       <a className="link-mask" href="/#"></a>
                   </div>
               </div>
               <div className="item frontend col-md-3 col-xs-6 " styles="position: absolute; left: 810px; top: 0px;">
                   <div className="item-inner">
                       <figure className="figure">
                           <img className="img-responsive" src="./images/portfolio-4.jpg" alt=""/>
                       </figure>
                       <div className="content text-left">
                           <h3 className="sub-title"><a href="/#">Project Lorem Ipsum</a></h3>
                           <div className="meta">ReactJS</div>
                           <div className="action"><a href="/#">View on Github</a></div>
                       </div>
                       <a className="link-mask" href="/#"></a>
                   </div>
               </div>
               <div className="item backend col-md-3 col-xs-6 " styles="position: absolute; left: 0px; top: 312px;">
                   <div className="item-inner">
                       <figure className="figure">
                           <img className="img-responsive" src="./images/portfolio-5.jpg" alt=""/>
                       </figure>
                       <div className="content text-left">
                           <h3 className="sub-title"><a href="/#">Project Lorem Ipsum</a></h3>
                           <div className="meta">Python</div>
                           <div className="action"><a href="/#">View on Github</a></div>
                       </div>
                       <a className="link-mask" href="/#"></a>
                   </div>
               </div>
               <div className="item backend col-md-3 col-xs-6 " styles="position: absolute; left: 270px; top: 312px;">
                   <div className="item-inner">
                       <figure className="figure">
                           <img className="img-responsive" src="./images/portfolio-6.jpg" alt=""/>
                       </figure>
                       <div className="content text-left">
                           <h3 className="sub-title"><a href="/#">Project Lorem Ipsum</a></h3>
                           <div className="meta">JavaScript</div>
                           <div className="action"><a href="/#">View on Github</a></div>
                       </div>
                       <a className="link-mask" href="/#"></a>
                   </div>
               </div>

               <div className="item frontend col-md-3 col-xs-6 " >
                   <div className="item-inner">
                       <figure className="figure">
                           <img className="img-responsive" src="./images/portfolio-7.jpg" alt=""/>
                       </figure>
                       <div className="content text-left">
                           <h3 className="sub-title"><a href="/#">Project Lorem Ipsum</a></h3>
                           <div className="meta">HTML/AngularJS</div>
                           <div className="action"><a href="/#">View on Github</a></div>
                       </div>
                       <a className="link-mask" href="/#"></a>
                   </div>
               </div>

               <div className="item frontend backend col-md-3 col-xs-6 ">
                   <div className="item-inner">
                       <figure className="figure">
                           <img className="img-responsive" src="./images/portfolio-8.jpg" alt=""/>
                       </figure>
                       <div className="content text-left">
                           <h3 className="sub-title"><a href="/#">Project Lorem Ipsum</a></h3>
                           <div className="meta">Python/AngularJS</div>
                           <div className="action"><a href="/#">View on Github</a></div>
                       </div>
                       <a className="link-mask" href="/#"></a>
                   </div>
               </div>

           </div>

       </section>

        <section id="testimonials-section" className="testimonials-section section">
            <h2 className="section-title">Testimonials</h2>

            <div id="testimonials-carousel" className="testimonials-carousel carousel slide" data-interval="8000">

                <ol className="carousel-indicators">
                    <li data-target="#testimonials-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#testimonials-carousel" data-slide-to="1"></li>
                    <li data-target="#testimonials-carousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <blockquote className="quote">
                            <i className="fa fa-quote-left"></i>
                            <p>James is an excellent software engineer and he is passionate about what he does. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse porttitor metus eros.</p>
                        </blockquote>
                        <div className="source">
                            <div className="name">Rob Olson</div>
                            <div className="position">Product Manager, Apple</div>
                        </div>

                    </div>
                    <div className="item">
                        <blockquote className="quote">
                            <p><i className="fa fa-quote-left"></i>
                            Sed massa leo, aliquet non velit eu, volutpat vulputate odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse porttitor metus eros, ut fringilla nulla auctor a.</p>

                        </blockquote>
                        <div className="source">
                            <div className="name">Christina Jensen</div>
                            <div className="position">Senior Developer, Twitter</div>
                        </div>

                    </div>
                    <div className="item">
                        <blockquote className="quote">
                            <p><i className="fa fa-quote-left"></i>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</p>
                        </blockquote>
                        <div className="source">
                            <div className="name">Austin Ward</div>
                            <div className="position">CEO, Startup Hub</div>
                        </div>
                    </div>

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
                        <li><i className="fa fa-check" aria-hidden="true"></i> App development with MetoerJS/ReactJS</li>
                        <li><i className="fa fa-check" aria-hidden="true"></i> Back-end development with Java/Python</li>
                    </ul>
                    <p>Drop me a line at <a href="mailto:hanyu2@asu.edu">hanyu2@asu.edu</a> or call me at 480 452 9484</p>
                    <ul className="social list-inline">
                        <li><a href="/#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="/#"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
      </div>
    );
  }
};
export default Body;
