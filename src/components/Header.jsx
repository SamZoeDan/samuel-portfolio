import React, { useState } from 'react'
import  './styles/Header.css'



const Header = () => {
    const [select, setSelect] = useState(1);
    const handleClickMenu = (index) => {
        setSelect(index);
    }
  return (
    <header className='Header'>
        <h1 className='title'>Portfolio</h1>
    <nav>
        <ul>
            <li onClick={()=>{handleClickMenu(1)}} className={select == 1 ? "active": ""}>Home</li>
            <li onClick={()=>{handleClickMenu(2)}} className={select == 2? "active": ""}>Project</li>
            <li onClick={()=>{handleClickMenu(3)}} className={select == 3 ? "active": ""}>Resume</li>
        </ul>
    </nav>
    
    <button className='cvboutton'> Download My Resume</button>

    </header>
    
  )
}

export default Header