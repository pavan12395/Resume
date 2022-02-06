import {AiFillStar} from 'react-icons/ai';
export default function Stars({level})
{
    if(level=="beginner")
    {
        return(
            <div className='star-container'>
             <AiFillStar className="star-full"/>
             <AiFillStar className='star-full'/>
             <AiFillStar className='star-empty'/>
             <AiFillStar className='star-empty'/>
             <AiFillStar className='star-empty'/>
            </div>
        );
    }
    else if(level=="intermidiate")
    {
        return(
            <div className='star-container'>
                <AiFillStar className='star-full'/>
                <AiFillStar className='star-full'/>
                <AiFillStar className='star-full'/>
                <AiFillStar className='star-full'/>
                <AiFillStar className='star-empty'/>
            </div>
        );
    }
    else
    {
        return(
            <div className='star-container'>
                <AiFillStar className='star-full'/>
                <AiFillStar className='star-full'/>
                <AiFillStar className='star-full'/>
                <AiFillStar className='star-full'/>
                <AiFillStar className='star-full'/>
            </div>
        )
    }
}