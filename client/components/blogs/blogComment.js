import React, {Component} from 'react';
import Editor from './editor.js';
import {Modal, Button} from 'react-bootstrap';
import {withRouter} from 'react-router';

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

var width = {
  width : '100px'
};

class BlogComment extends Component{
  constructor(props){
    super(props);
    this.state={
      comment:'',
      user:'',
      showModal: false
    }
  }

  getContent(content){
    this.setState({
      comment:content
    })
  }

  submitComment(){
    if(this.state.comment.length === 0){
      alert("Please enter comment content.");

    }else{
      Meteor.call('blog_comments.insert', this.state.comment, this.props.blog._id);
      document.querySelector(".note-editable.panel-body").innerHTML="";
    }
  }

  close(){
    console.log("close");
    this.setState({ showModal: false });
  }

  componentDidMount(){
    $(".dropdown-toggle").dropdown();
    $(".note-editing-area").click(function(){
      if(Meteor.user() === null){
        this.setState({ showModal: true });
      }
    }.bind(this));
  }


  login(){
    Meteor.loginWithGoogle({
      requestPermissions: ['email']
    }, function(error) {
      if (error) {
        alert(error); //If there is any error, will get error here
      }else{
        console.log(Meteor.user());// If there is successful login, you will get login details here
        this.close();
        const url = `/blog/${this.props.blog._id}`;
        this.props.history.push(url);
        this.setState({
          user: Meteor.user().profile.name
        })
      }
    }.bind(this));
  }

  hideSubmitButton(){
    if(Meteor.user() === null){
      return '';
    }else{
      return(
        <button type="button" name="submit" className="btn btn-primary button-right" onClick={this.submitComment.bind(this)}>Submit</button>
      )
    }
  }

  getEditor(){
    return(
      <div className="editor-margin">
        <ReactSummernote
          value=""
          options={{
            lang: 'eu-EU',
            height: 100,
            dialogsInBody: true,
            toolbar: [
              ['style',['style']],
              ['insert',['picture','link']],
            ]
          }}
          onChange={this.getContent.bind(this)}
        />
       </div>
    )
  }

  logout(){
    Meteor.logout();
    Meteor._localStorage.removeItem('Meteor.loginToken');
    Meteor._localStorage.removeItem('Meteor.loginTokenExpires');
    Meteor._localStorage.removeItem('Meteor.userId');
    Meteor.users.remove({});
    this.setState({
      user:''
    })
    console.log("logged out");
    console.log(Meteor.user());
  }

  render(){
    return(
      <div className="container">
        {this.getEditor()}
        <button type="button" className="btn btn-primary button-right" onClick={this.logout.bind(this)}>Logout</button>
        {this.hideSubmitButton()}
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
            <h4>Please login</h4>
          </Modal.Body>
          <Modal.Footer>
            <div className="center">
              <button type="button" className="btn btn-danger" style={width} onClick={this.login.bind(this)}><i className="fa fa-google" aria-hidden="true"></i></button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default withRouter(BlogComment);
