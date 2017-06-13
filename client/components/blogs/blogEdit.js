import React, {Component} from 'react';
import BlogHeader from './blogHeader.js';
import {Blogs} from '../../../imports/collections/blogs.js';
import { createContainer } from 'meteor/react-meteor-data';
import {withRouter} from 'react-router';
import BlogTagList from './blogTagList.js';
import Editor from './editor.js';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles

// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/modal';
import 'bootstrap/js/dropdown';
import 'bootstrap/js/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

class BlogEdit extends Component{
	constructor(props){
		super(props);
	}

	getEditor(){
		return(
			<Editor blog={this.props.blog}/>
		)
	}

  render(){
		if(!this.props.ready){
			return(<BlogHeader />);
		}
    return(
			<div>
				<BlogHeader />
				{this.getEditor()}
			</div>
    )
  };
}

export default createContainer((props) => {
  handle = Meteor.subscribe('blogs')
  return {blog: Blogs.find({_id : props.location.pathname.split("/")[2]}).fetch(), ready: handle.ready()};
}, BlogEdit);
