import React from 'react'
import  './styles/Presentation.css'
import gitIcon from '../img/git.png';
import linkIcon from '../img/link.png';

const Presentaton = () => {
  return (
    <div className='presentation'>
    <div className='presentation-text'>
        <h1>Hello, I'm <span>Samuel Zoe-Daniel</span></h1>
        <h2>UI/UX Designer and fronted and interface developper</h2>
        <p>I
        'm a UI and UX Designer with figma and Adobe XD as well as a frontend developer with knowledge in React,
        Javascript, html and css, I also master mobile Application UI development with SwiftUI as well as React Native. 
        I'm also proficient with Wix and WordPress. </p>

        <button className='contact'>Let's Talk</button>
        <ul className="social">
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/samuel-kasongo-183470266/"><img src={linkIcon} alt="" /></a>
          </li>
          <li className="github">
            <a href="https://github.com/SamZoeDan?tab=overview&from=2024-07-01&to=2024-07-30"><img src={gitIcon} alt="" /></a>
          </li>
        </ul>
    </div>
    <div className='presentaion-image'>
        <img src="https://media.licdn.com/dms/image/D4D03AQHLbTv57O1aXg/profile-displayphoto-shrink_800_800/0/1676428925884?e=1727913600&v=beta&t=b0QszNEnkcQukgP2moKe3WSnY8_d6l4__BqCeQQMcBk" alt='Samuel'/>
    </div>

    </div>
  )
}

export default Presentaton