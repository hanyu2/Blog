import React, {Component} from 'react';
import BlogHeader from './blogHeader.js';
import {Blogs} from '../../../imports/collections/blogs.js';
import { createContainer } from 'meteor/react-meteor-data';
import {withRouter} from 'react-router';
import BlogTagList from './blogTagList.js';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

var bold = {
	fontWeight:'bold'
};

class BlogEdit extends Component{
  constructor(props){
    super(props);
    this.state ={
      title :'',
      tag:[]
    }
  }

  onChange(){

  }

  getSavedTitle(){
    console.log( this.props.blog[0].title);
    return this.props.blog[0].title;
  }

  updateTitle(){

  }

  updateContent(){

  }

  getContent(){
    return this.props.blog[0].content;
  }

  onChildChanged(newTag) {
    this.setState({
        tags: newTag
    }, function() {

    })
  }

  getEditor(){
    return(
      <div>
        <ReactSummernote
          value={this.getContent()}
          options={{
            height: 350,
            dialogsInBody: true,
            toolbar: [
              ['save',['save']],
              ['style',['style']],
              ['font',['bold','italic','underline','clear']],
              ['fontname',['fontname']],
              ['color',['color']],
              ['para',['ul','ol','paragraph']],
              ['height',['height']],
              ['table',['table']],
              ['insert',['picture','video','media','link','hr']],
              ['view',['fullscreen','codeview']],
              ['help',['help']]
            ]
          }}
          onChange={this.getContent.bind(this)}
        />
      </div>
    )
  }

  getTitleEditor(){
    return(
      <div className="form-group">
        <label style={bold}>Title:</label>
        <input type="text" className="form-control " id="usr" defaultValue={this.getSavedTitle()} onChange={this.updateTitle.bind(this)}/>
      </div>
    )
  }

  render(){
    return(
      <div>
        <BlogHeader />
        <div>
          <div className="margin-around">
            {this.props.ready ?  this.getTitleEditor(): ''}
            {this.props.ready ?  this.getEditor(): ''}
          </div>
          <BlogTagList callbackFromParent={this.onChildChanged.bind(this)}/>
          <div>
  	        <button type="button" className="btn btn-success margin-around" >Post</button>
  	        <button type="button" className="btn btn-info margin-around" >Save</button>
  	        <button type="button" className="btn btn-danger margin-around" >Drop</button>
  	      </div>
        </div>
      </div>
    );
  };
}

export default createContainer((props) => {
  handle = Meteor.subscribe('blogs')
  return {blog: Blogs.find({_id : props.location.pathname.split("/")[2]}).fetch(), ready: handle.ready()};
}, BlogEdit);
