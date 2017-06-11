import React, {Component} from 'react';
import BlogHeader from './blogHeader.js';
import {Blogs} from '../../../imports/collections/blogs.js';
import { createContainer } from 'meteor/react-meteor-data';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-es-EU'; // you can import any other locale

var bold = {
	fontWeight:'bold'
};

class BlogEdit extends Component{
  constructor(props){
    super(props);
    this.state ={
      title :''
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

  getEditor(){
    return(
      <ReactSummernote
        value={this.getContent()}
        options={{
          lang: 'eu-EU',
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
        onChange={this.updateContent.bind(this)}
      />
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
        <div className="margin-around">
          {this.props.ready ?  this.getTitleEditor(): ''}
          {this.props.ready ?  this.getEditor(): ''}
        </div>
      </div>
    );
  };
}

export default createContainer((props) => {
  handle = Meteor.subscribe('blogs')
  return {blog: Blogs.find({_id : props.location.pathname.split("/")[2]}).fetch(), ready: handle.ready()};
}, BlogEdit);
