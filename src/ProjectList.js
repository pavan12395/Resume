import React from 'react'
import Project from './Project'
import {projects} from './Data';
export default function ProjectList()
{
    return(
        <>
        <h1 className="header">Projects</h1>
        {
         projects.map((obj)=>
         {
            return(
                <Project name={obj.title} description={obj.description} link={obj.link}/>
            )
         })
       }      
        </>
    )
}