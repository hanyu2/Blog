import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, Push, Redirect} from 'react-router-dom';
import Blog from './components/blogs/blog.js';
import BlogDetail from './components/blogs/blogDetail.js';
import Login from'./components/authentication/login.js';
import Register from './components/authentication/register.js';
import BlogCreate from './components/blogs/blogCreate.js';
import BlogEdit from './components/blogs/blogEdit.js';
import { ClientStorage } from 'meteor/ostrio:cstorage';


const routes = (
  <BrowserRouter>
    <Switch>
     <Route path="/blog/:id" component={BlogDetail}/>
     <Route path="/blog" component={Blog}/>
     <Route path="/login" component={Login} />
     <Route path="/edit/:id" component={BlogEdit}/>
    //  <Route path="/register" component={Register}/>
     <Route path="/create" component={BlogCreate}/>
     <Route path="/" component={Blog}/>
   </Switch>
  </BrowserRouter>
);


Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector(".render-target"));
});
