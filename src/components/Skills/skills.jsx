import React from 'react'
import "./skills.css"
import html from "../../image/HTML5_Badge_256.png"
import css from "../../image/css-logo.png"
import javascript from "../../image/JavaScript-logo.png"
import react from "../../image/react-logo.png"
import git from "../../image/Git-Icon.png"


const Skills = () => {
  return (
    <div className='a'>
      <h2 className='a-header'>SKILLS</h2>
      <div className="a-skill">
        <img src={html} alt="" className="a-html" />
        <img src={css} alt="" className="a-css" />
        <img src={javascript} alt="" className="a-javascript" />
        <img src={react} alt="" className="a-react" />
        <img src={git} alt="" className="a-git" />


      </div>
      {/* <div className="a-right"></div> */}
    </div>
  )
}

export default Skills
