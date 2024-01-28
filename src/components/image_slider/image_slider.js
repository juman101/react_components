import React from 'react'
import "./styles.css"
import { BsArrowRightCircleFill,BsArrowLeftCircleFill } from "react-icons/bs";

import { useState,useEffect } from 'react';

const IS = () => {

   const[images , setimages]=useState([]);
   const[currentSlide,setcurrslide]=useState(0);

   const url ="https://picsum.photos/v2/list?limit=5";
   const handlePrevious=()=>
   {
    const len =images.length-1;
    if(currentSlide==0)
    setcurrslide(len);
else setcurrslide(currentSlide-1);
       
   }

   const handleNext=()=>
   {
    const len =images.length-1;
    if(currentSlide==len)
    setcurrslide(0);
else setcurrslide(currentSlide+1);
   }
   
    const getimages =async ()=>
    {
       

        try{
             const res =await fetch(url);
             const data =await res.json();
             setimages(data);
             console.log(data);
        }
        catch(err){
            console.log(err);
        }

    }

    useEffect(()=>
    {
              getimages();
    },[])

   

  return (
    <div>
        <h1>
                  IMAGE_SLIDER
        </h1>
        <div className="container">
      <BsArrowLeftCircleFill
         onClick={handlePrevious}
        className="arrow arrow-left"
      />
 {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
         onClick={handleNext}
        className="arrow arrow-right"
      />
       <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : " inactive-indicator current-indicator"
                }
                onClick={() => setcurrslide(index)}
              ></button>
            ))
          : null}
      </span>
        
        </div>     
       
    </div>
  )
}

export default IS
