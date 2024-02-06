import React, { useEffect } from 'react'

import { useState } from 'react'
const UseFetch = (url,options={}) => {

    const[data,setData]=useState(null);
    const[pending,setPending]=useState(false);
    const[error,setError]=useState(false);

    
    const fun =async ()=>
    {
        setPending(true);
        try{
               const curr =await fetch(url,{...options});
               if(curr.ok)
               {
                 const res =await curr.json();
                setData(res);
                setPending(false);
                setError(false);

               }
               else throw new Error(curr.json.message)
        }
        catch(err)
        {
            setError(err);
            setPending(false);

        }

    }

    useEffect(()=>
    {
             fun();
    },[url])


 return {data,error,pending};
}

export default UseFetch
