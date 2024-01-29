import React from 'react'
import Theme_Changer from './custom_hook'
import './styles.css'
const Change_Theme = () => {

const[theme,setheme]=Theme_Changer('theme','dark');

const handleclick=()=>
{
    setheme(theme==='dark'?'light':'dark');
}




  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className='container'>
            <p>Hello There ! Welcome to theme changer</p>
          
                 <button onClick={handleclick}>Change Theme</button>
        </div>
      
    </div>
  )
}

export default Change_Theme
