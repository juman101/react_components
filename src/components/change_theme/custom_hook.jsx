import React, { useEffect, useState } from 'react'

const Theme_Changer = (key,defaultval) => {

const [value,setval]=useState(()=>
{
    let currentval;

    try{
        currentval=JSON.parse(localStorage.getItem(key)||String(defaultval));

    }
    catch(error)
    {
        console.log(error);
        currentval = defaultval;
    }

    return currentval;
})

useEffect(()=>
{
    localStorage.setItem(key,JSON.stringify(value));

},[key,value])

return[value,setval];
 
}

export default Theme_Changer
