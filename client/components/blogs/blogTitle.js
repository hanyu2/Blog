import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BlogHeader from './blogHeader.js';

class BlogTitle extends Component{
  render(){
    return(
        <div className="form-group">
          <label>Ttile:</label>
          <input type="text" className="form-control" id="usr"/>
        </div>
    )
  }
}

export default BlogTitle;
