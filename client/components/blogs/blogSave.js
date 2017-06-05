import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Save extends Component{
  postBlog(event){
    event.preventDefault();
    alert("save");
  }

  render(){
    return(
      <div>
        <button type="button" className="btn btn-success" onClick={this.postBlog.bind(this)}>Post</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-info">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-danger">Drop</button>
      </div>
    )
  }
}

export default Save;
