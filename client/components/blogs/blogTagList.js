import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import {BlogTags} from '../../../imports/collections/blog_tags.js';

class BlogTagList extends Component{

  constructor(props) {
    super(props);

    this.state={
      tag:'',
      myTags:[],
      tagBuffer:[]
    }
  }


  handleInputChange(event){
    const target = event.target;
    this.setState({
      [target.name]:target.value
    });
  }

  addTag(event){
    event.preventDefault();
    if(this.state.tag.length === 0){
      alert("Tag can not be empty");
    }else{
        if(this.state.tagBuffer.indexOf(this.state.tag)){
          this.state.tagBuffer.push(this.state.tag);
          this.setState({
            myTags: this.state.tagBuffer
          }, function(){
            this.props.callbackFromParent(this.state.myTags);
          });
          Meteor.call('blog_tags.insert', this.state.tag);
          $('#tag').val('');
        }
     }
  }

  getAllTags(){
    return(
      this.props.blog_tags.map(tag =>{
        return(
          <li key={tag._id}><a className="dropdown-item" name={tag.name} onClick={this.selectTag.bind(this)}>{tag.name}</a></li>
        )
      })
    )
  }

  selectTag(event){
    event.preventDefault();
    if(this.state.tagBuffer.indexOf(event.target.name)){
      this.state.tagBuffer.push(event.target.name)
      this.setState({
        myTags: this.state.tagBuffer
      }, function(){
        this.props.callbackFromParent(this.state.myTags);
      });
    }
  }

  getSelectedTags(){
    return(
      this.state.myTags.map(tag => {
        return(
            <button key={tag} type="button" className="btn btn-primary btn-sm">{tag}</button>
        )
      })
    )
  }

  render(){
    return(
      <div className="margin-around">
        <div>
          {this.getSelectedTags()}
        </div>
        <div className="dropdown  in-line">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {this.getAllTags()}
          </div>
        </div>
        <form onSubmit={this.addTag.bind(this)} className="in-line-left">
          <div className="form-inline">
            <input className="form-control" name="tag" id="tag" type="text" onChange={this.handleInputChange.bind(this)}/>
            <button type="submit" className="btn btn-primary left">Add Tag</button>
          </div>
        </form>
      </div>
    );
  };
}

export default createContainer((props) => {
  Meteor.subscribe('blog_tags')
  return {blog_tags: BlogTags.find({}).fetch()};
}, BlogTagList);
