import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <p className="text-muted">Powered by Meteor.js and React.js.</p>
      </footer>
    );
  }
};
export default Footer;
