import React from 'react'

export default function ProjectCard(props)
{
    return(
        <div id="project-card">
            {
                props.children
            }
        </div>
    );
}