import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const routes = (
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector(".container"));
});
