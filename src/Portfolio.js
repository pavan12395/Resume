import {portfolio} from './Data'
import {FiExternalLink} from 'react-icons/fi';
export default function Portfolio()
{
    return(
        <>
        <h1 className="header">Portfolio</h1>
        {
         portfolio.map((obj)=>
         {
             return(
             <div id="portfolio-container">
              <h3>{obj.title}</h3>
              <a href={obj.link} target="_blank"><FiExternalLink/></a>
             </div>
             );
         })
        } 
        </>
    )
}