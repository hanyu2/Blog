import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Footer extends Component{
  render(){
    return(
      <footer className="footer text-center">
          <div className="powered-by">Powered by</div>
            <div className="logos">
              <div className="meteor-logo">
                <img height="20px" src="/images/meteor-logo.svg"/>&nbsp;&nbsp;
              </div>
              <div className="react-logo">
                <img className="pic-down" height="20px" src="/images/react-logo.svg"/>
                <text className="react-text">
                  &nbsp;React
                </text>
              </div>
            </div>
          <div className="container">
              <small className="copyright">Template Copyright @ <a href="http://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>
          </div>
      </footer>
    );
  }
};
export default Footer;
