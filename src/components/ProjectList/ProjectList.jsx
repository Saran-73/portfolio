import React from 'react'
import "./ProjectList.css"
import Projects from '../Projects/projects'
import {projects} from "../../data.js"

const ProjectList = () => {
   const createCard= projects.map(x=>{
        return <Projects key={x.id} img={x.img}
                     sitelink={x.sitelink}
                     codelink={x.codelink}
                     name={x.name}
                     description={x.description} />
    }) 
  return (
    <div className='pl'>
           <h1 className="pl-title">PROJECTS</h1>
          
       <div className='pl-list'>
           {createCard}
       </div>
    </div>
  )
}

export default ProjectList
