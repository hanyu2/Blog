import React, {Component} from 'react';

class FontAwesome extends Component{
  render(){
    if(this.props.name === 'Google'){
      return <i className="fa fa-google" aria-hidden="true"></i>
    }
  }
}

export default FontAwesome;
