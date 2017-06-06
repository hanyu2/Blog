import React, {Component} from 'react';
import ReactDom from 'react-dom';

class NewTag extends Component{
  render(){
    return(
      <div>
        <div className="form-inline margin-around">
          <input type="text" className="form-control mx-sm-3"/>
          <button  className="btn btn-primary margin-around">Add Tag</button>
        </div>
      </div>
    );
  };
}

export default NewTag;
