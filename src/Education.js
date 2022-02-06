import React from 'react'
import EduCard from './Cards/EduCard';
import {education} from './Data.js';

export default function Education()
{
    return(
        <>
        <h1 className="header">Education</h1>
        <div id="educard-container">
            {
                education.map(
                     (obj) =>
                        {
                            return(
                                <EduCard>
                                    <h2>{obj.title}</h2>
                                    <h3>{obj.institute}</h3>
                                    {"board" in obj ? <p>{obj.board}</p> : null}
                                    <p>{obj.years}</p>
                                    <p>{obj.CGPA}/10</p>
                                </EduCard>
                            )  
                        })
                
            }
        </div>
        </>
    )
}