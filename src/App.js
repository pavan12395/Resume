import React from 'react'
import './App.css';
import {email,number} from './Data';
import Education from './Education';
import ProjectList from './ProjectList';
import Portfolio from './Portfolio';
import Skills from './Skills'
export default function App()
{ 
   return(
      <>
       <div id="header-container">
         <a href="https://www.linkedin.com/in/pavan-kumar-kongara/" id="header" target="_blank"><h1>Pavan Kumar Kongara</h1></a>
         <div>
           <p>{email}</p>
           <p>{number}</p>
         </div>
       </div>
       <hr color='#0077b5'></hr>
       <Education/>
       <ProjectList/>
       <Portfolio/>
       <Skills/>
      </>
   )
}
