import React from 'react'

import { useState,useEffect } from 'react'
import {FaStar} from 'react-icons/fa'
import  "./styles.css";
const Star_rating = ({starno=5}) => {

    
const[star,usestar]=useState(0);
const[hover,usehover]=useState(0);

useEffect(()=>
{



},[star]);

    const handleclick=(index)=>
    {
        usestar(index);
       
    }
    const handlemove =(index)=>
    {
        usehover(index);

    }

    const handleleave=()=>
    {

        usestar(star)

    }


  return (
    <div className='stars'>
{
        [...Array(starno)].map((_,index) =>
        {
            index+=1;
            return <FaStar

            className={(index<=star||index<=hover)? 'active':'inactive'}
            key ={index}
            onClick={()=>handleclick(index)}
            onMouseLeave={handleleave}
            onMouseMove={()=>handlemove(index)}
            >

            </FaStar>

        })
    }
    </div>
  )
}

export default Star_rating
