import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';

Meteor.startup(() => {
  ReactDOM.render(
    <App/>, document.querySelector(".container")
	);
});
