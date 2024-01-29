import React from 'react';
import MenuItem from './menu_item'; // Updated import to match the component name

const MenuList = ({ list }) => {
  return (
    <ul className='menu-list-container'>
      {
       list &&list.length > 0 ? (
         list.map((item, index) => (
            <MenuItem key={index} Item={item} /> // Added 'key' prop and return statement
          ))
        ) : null
      }
    </ul>
  );
}

export default MenuList;
