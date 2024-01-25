import React from 'react'
import { useState,useEffect } from 'react';
const Random_color = () => {

    const[hex,sethex]=useState(true);
    const[rgb,setrgb]=useState("rgb(0,0,0)");
   
    const gencolor =()=>
    {
        
        if(!hex){
        const x = Math.floor(Math.random()*256);
        const y = Math.floor(Math.random()*256);
        const z = Math.floor(Math.random()*256);
       
       setrgb(`rgb(${x},${y},${z})`);
        }
        else
        {
            let arr =["1","2","3","4","5","6","A","B","C","D","E","F"];
            let s="#";
        
            for(let i =0;i<6;i++)
            {
        
               const j =Math.floor((Math.random()*100000)%12);
             s+=arr[j];
        
            }
        setrgb(s);

        }

    }

    const toggle1 =()=>
    {
        if(hex==true){
           
       sethex(false)
     
        }
    }
    const toggle2 =()=>
    {
        if(hex==false){
            
       sethex(true)
       

        }
    }
   
    useEffect(()=>
    {
        gencolor();

    },[hex])
    const bgColor = rgb;

  return (
    <>
    <div style={{width:"100vw",
    height: "100vh",
     backgroundColor: bgColor }}>
      <button onClick={toggle1}>RGB</button>
      <button onClick={toggle2}>HEX_COLOR</button>
      <button onClick={gencolor}>Generate_color</button>
    
    <h1>
        {
            hex==true ? 'HEX_COLOR' :'RGB_COLOR'

        }
    </h1>
    <h1>
       right now set  color is {rgb} 
    </h1>
    </div>


    </>
  )
}

export default Random_color
