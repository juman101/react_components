import React from 'react'
import { useState,useEffect } from 'react'
import "./styles.css"
const LM = () => {

   const[counter, setcounter]=useState(20);
    const[data,setdata]=useState([]);
    const[disableButton ,setdisableButton ]=useState(false);
    const handleclick=() =>
    {
        setcounter(counter+10);
        if(counter==100)
        {
            setdisableButton(true);
        }
       // console.log(counter);
    }

    const f =async ()=>
    {

        const res =await fetch(`https://dummyjson.com/products?limit=${counter}&skip=${counter==20?0:(counter-10)}`);
        const curr =await res.json();
        setdata([...data,...curr.products]);
    }

   useEffect(()=>
   {
         f();
         console.log(data);
             
   },[counter])

    
      return (
        <>
        <h1>
            List of Items 
        </h1>
        <div className="load-more-container">
          <div className="product-container">
            {data && data.length
              ? data.map((item) => (
                  <div className="product" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                ))
              : null}
          </div>
          <div className="button-container">
            <button disabled={disableButton}  onClick={handleclick}>
              Load More Products
            </button>
            
                  {disableButton ? <p>You have reached to 100 products</p> : null}
            
            
          </div>
        </div>
        </>
      );
}

export default LM