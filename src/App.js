import React, { Component } from 'react';
import './CSS/App.css';
import { connect } from 'react-redux';
import Router from './Router/router';

let App = (props) => 
  <Router />

let ConnectedApp = connect(state => state)(App)

export default ConnectedApp;
