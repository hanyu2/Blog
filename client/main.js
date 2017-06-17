import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Router from './router.js';
import BlogReducer from './reducers/blogReducer.js';

let store = createStore(BlogReducer)

Meteor.startup(() => {
  ReactDOM.render(<Router store={store}/>, document.querySelector(".render-target"));
  console.log(location.host);
  process.env.ROOT_URL = 'http://blog.han-yu.me:3000';
  if (location.host.indexOf('blog.han-yu.me') !== 0) {
      location = 'http://blog.han-yu.me'
  }
});
