import React from 'react'
import './projectContainer.scss'

const ProjectContainer = ({alt, project}) => {
    const {tags} = project;
    // console.log(tags);
    
    if (alt === "left") {
        return <Left direction={alt} tags={tags} project={project} />
    } else {
        return <Right direction={alt} tags={tags} project={project} />
    }

}

const Left = ({direction, project, tags}) => (
    <div className={direction}>
        <div className="project-img">
            <img src={project.data.image.url} alt=""/>
        </div>
        <div className="project-text">
            <h2>{project.data.title[0].text}</h2>
            <p>{project.data.body[0].text}</p>
            <ul>
                {tags.map((tag, index) => (
                    <li key={`${tag}-${project.uid}`}>{tag}</li>
                ))}
            </ul>
            <a href={project.data.link.url} target="_blank">DISCOVER</a>
        </div>
    </div>
)

const Right = ({direction, project, tags}) => (
    <div className={direction}>
        <div className="project-img">
            <img src={project.data.image.url} alt=""/>
        </div>
        <div className="project-text">
            <h2>{project.data.title[0].text}</h2>
            <p>{project.data.body[0].text}</p>
            <ul>
                {tags.map((tag, index) => (
                    <li key={`${tag}-${project.uid}`}>{tag}</li>
                ))}
            </ul>
            {tags.map((tags, index) => {
                <h3>{index}</h3>
            })}
            <a href={project.data.link.url} target="_blank">DISCOVER</a>
        </div>
        
        
    </div>
)


export default ProjectContainer