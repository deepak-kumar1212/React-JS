import React from 'react'
import ReactDom from 'react-dom'
//import FormatName from './app'; 
//import { user } from './app';
// import Gallery from './app1';
// import { Profile } from './app1';
//import Display from './app2';
//import View from './app3';
import View from './app4';
  const root=ReactDom.createRoot(
    document.getElementById('root'));

//root.render(FormatName(user));
//root.render(<><Gallery/>,<Profile/></>);
//root.render(<Display/>);
root.render(<View/>);