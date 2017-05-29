import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Footer extends Component{
  render(){
    return(
      <footer className="footer text-center">
          <div className="container">
              <small className="copyright">Template Copyright @ <a href="http://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>
          </div>
      </footer>
    );
  }
};
export default Footer;
