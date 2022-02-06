import {useState} from 'react'
import ProjectCard from './Cards/ProjectCard';
import {BsCaretDownFill} from 'react-icons/bs';
import {BsCaretUpFill} from 'react-icons/bs';
import {FiExternalLink} from 'react-icons/fi';

export default function Project({name,description,link})
{
    const [open,setOpen] = useState(false);
    const clickHandler=(e)=>
    {
        e.preventDefault();
        setOpen(!open);
    }
    return(
        <div class="project-cardcontainer">
         <ProjectCard>
             <h3>{name}</h3>
             {open ?<BsCaretUpFill onClick={clickHandler}/> : <BsCaretDownFill onClick={clickHandler}/>}
         </ProjectCard>
         {
                open &&
                <div class="project-info">
                  <p>
                   <b>Description : </b>
                   {description}
                  </p>
                  <a href={link} target="_blank"><FiExternalLink/></a>
                </div>
        }
        </div>
    ) 
}