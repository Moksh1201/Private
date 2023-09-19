import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bar from './Topnav'
import Image from './headerimg'
import Articles from './Articletemplate'
import Tutorials from './Tutorialstemplate';
import Foot from './lastnav';
import Email from './Email';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Bar/>
    <Image/>
    <Articles/>
    <br></br>
    
    <Tutorials/>
    <br></br>
    <br></br>
    <Email/>
    <br></br>
    <Foot/>
    
  </div>
  
);
