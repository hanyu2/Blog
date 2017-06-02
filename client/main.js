import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Blog from './components/blogs/blog.js';
import BlogDetail from './components/blogs/blogDetail.js';

const routes = (
  <BrowserRouter>
    <Switch>
     <Route path="/blog/:id" component={BlogDetail}/>
     <Route path="/blog" component={Blog}/>
     <Route path="/" component={App}/>
   </Switch>
  </BrowserRouter>
);


Meteor.startup(() => {
  $.getScript('js/back-to-top.js');
  $.getScript('js/boostrap.min.js');
  $.getScript('js/imagesloaded.pkgd.min.js');
  $.getScript('js/isotope.pkgd.min.js');
  $.getScript('js/jquery-1.12.4.min.js');
  $.getScript('js/easypiechart.min.js');
  $.getScript('js/jquery.scrollTo.min.js');
  $.getScript('js/style-switcher.js');

  ReactDOM.render(routes, document.querySelector(".render-target"));
});
