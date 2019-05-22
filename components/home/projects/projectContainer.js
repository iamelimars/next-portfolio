import React from 'react'
import './projectContainer.scss'

const ProjectContainer = ({alt, project}) => {
    
    if (alt === "left") {
        return <Left direction={alt} project={project} />
    } else {
        return <Right direction={alt} project={project} />
    }

}

const Left = ({direction, project}) => (
    <div className={direction}>
        <div className="project-img">
            <img src={project.data.image.url} alt=""/>
        </div>
        <div className="project-text">
            <h2>{project.data.title[0].text}</h2>
            <p>{project.data.body[0].text}</p>
            <a href={project.data.link.url} target="_blank">DISCOVER</a>
        </div>
    </div>
)

const Right = ({direction, project}) => (
    <div className={direction}>
        <div className="project-text">
            <h2>{project.data.title[0].text}</h2>
            <p>{project.data.body[0].text}</p>
            <a href={project.data.link.url} target="_blank">DISCOVER</a>
        </div>
        <div className="project-img">
            <img src={project.data.image.url} alt=""/>
        </div>
        
    </div>
)


export default ProjectContainer