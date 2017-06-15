import React, {Component} from 'react';
import Editor from './editor.js';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

var hidden = {
	display: 'none'
};

class BlogComment extends Component{
  constructor(props){
    super(props);
    this.state={
      comment:'',
      user:''
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

  componentDidMount(){
    $(".dropdown-toggle").dropdown();
    $(".note-editing-area").click(function(){
      console.log(Meteor.user());
      if(Meteor.user() === null){
        alert("Please login to post");
      }
    });
  }



  login(){
    Meteor.loginWithGoogle({
      requestPermissions: ['email']
    }, function(error) {
      if (error) {
        console.log(error); //If there is any error, will get error here
      }else{
        console.log(Meteor.user());// If there is successful login, you will get login details here
        this.setState({
          user: Meteor.user().profile.name
        })
      }
    }.bind(this));
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

  render(){
    return(
      <div className="container">
        {this.getEditor()}
        <button type="button" className="btn btn-primary button-right" onClick={this.login.bind(this)}>Login</button>
        <button type="button" className="btn btn-primary button-right" style={hidden} onClick={this.submitComment.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default BlogComment;
