import React from 'react'
import "./project.css"

const Projects = ({img,name,sitelink,codelink,description}) => {
    
  return (
    <div className='p'> 
      <div className="p-left">
          <img src={`./assets/${img}`} alt={`the image of${name}`} className="p-img" />
      </div>
      <div className="p-right">
           <h2 className="p-right-title">{name}</h2>
           <p className='p-desc'>{description}</p>
           <div className='p-btn'>
           <a href={codelink} target="_blank" rel='noreferrer'><button className='btn'>Github</button></a>
           <a href={sitelink} target="_blank" rel='noreferrer'><button  className='btn'>View</button></a>
           </div> 
           </div>
    </div>
  )
}

export default Projects
