import React from 'react';
import MenuList from './menu_list';
import "./styles.css"
import {FaMinus, FaPlus} from 'react-icons/fa'
import { useState,useEffect } from 'react';
const MenuItem = ({ Item }) => {

    const[openmenu,setopenmenu]=useState({});

    const handleopen =(curr)=>
    {
        setopenmenu({...openmenu,[curr]:!openmenu[curr]});

    }
  return (
    <li>
     
     <div className="menu-item">
        <p>{Item.label}</p>
        {Item && Item.children && Item.children.length ? (
          <span onClick={()=>handleopen(Item.label)}>
            {
                openmenu[Item.label]?<FaMinus color="black" size={25} /> : <FaPlus color="black" size={25} />
            }
          </span>
        ) : null}
      </div>
      {Item && Item.children && Item.children.length&&openmenu[Item.label] ? (
        <MenuList list={Item.children} /> 
      ) : null}
    </li>
  );
}

export default MenuItem;
