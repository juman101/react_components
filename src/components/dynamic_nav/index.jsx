import React from 'react'
import menus from './data'
import "./styles.css"
import MenuList from './menu_list'
const DN = () => {
  return (
    <div className='tree-view-container'>
     <MenuList list={menus}/>
    </div>
  )
}

export default DN
