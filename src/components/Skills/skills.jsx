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
      <h1 className='a-header'>SKILLS</h1>
      <div className="a-skill-card">
        <div><img src={html} alt="html logo" className="a-html" />HTML </div>
        <div><img src={css} alt="" className="a-css" />CSS</div>
        <div> <img src={javascript} alt="" className="a-javascript" />Javascript</div>
        <div> <img src={react} alt="" className="a-react" />React</div>
        <div><img src={git} alt="" className="a-git" />Git</div>
      </div>
    </div>
  )
}

export default Skills
