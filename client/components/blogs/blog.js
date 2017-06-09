import React, {Component} from 'react';
import ReactDom from 'react-dom';
import BlogHeader from './blogHeader.js';
import BlogList from './blogList.js';
import BlogSideBar from './blogSideBar.js';

class Blog extends Component{
  render(){
    return(
      <div className="webapp-content">
        <div className="community">
          <BlogHeader />
            <div className="community__main">
              <div className="community__main__collection">
                <div className="community__container with-sidebar">
                  <BlogList />
                  <BlogSideBar />
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  };
}

export default Blog;
