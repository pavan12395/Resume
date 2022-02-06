import React from 'react'
import {skills} from './Data'
import Stars from './Stars';
export default function Skills()
{
     return(
         <>
         <h1 className="header">Skills</h1>
         <div id="skills-container">
         {
              skills.map((obj)=>
              {
                  return(
                  <div id="skill-container">
                      <h3 id="skill" title="hello world">{obj.name}</h3>
                      <Stars level={obj.level}/>
                  </div>)
              })
         }
         </div>
         </>
     )
};