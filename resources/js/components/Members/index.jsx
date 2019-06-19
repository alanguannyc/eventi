
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import {default as LoginComponent} from './Views/Login';
import {default as RegisterComponent} from './Views/Register';
import {default as AccountComponent } from './Views/Account';
import {default as EventsComponent } from './Views/Events';
import {default as ViewEvent } from './Views/Event';
const Login =() => {
  return (
  <ThemeProvider theme={theme}>

            <LoginComponent />
            
  </ThemeProvider>)
}

const Register =() => {
  return (
  <ThemeProvider theme={theme}>
  <RegisterComponent />
  </ThemeProvider>)
}

const Account =() => {
  return (
  <ThemeProvider theme={theme}>
  <AccountComponent />
  </ThemeProvider>)
}

const Events =() => {
  return (
  <ThemeProvider theme={theme}>
  <EventsComponent />
  </ThemeProvider>)
}
const Event =() => {
  return (
  <ThemeProvider theme={theme}>
  <ViewEvent />
  </ThemeProvider>)
}



if (document.getElementById('login')) {
  ReactDOM.render(<Login />, document.getElementById('login'));
}

if (document.getElementById('register')) {
  ReactDOM.render(<Register />, document.getElementById('register'));
}

if (document.getElementById('account')) {
  ReactDOM.render(<Account />, document.getElementById('account'));
}

if (document.getElementById('events')) {
  ReactDOM.render(<Events />, document.getElementById('events'));
}

if (document.getElementById('event')) {
  ReactDOM.render(<Event />, document.getElementById('event'));
}