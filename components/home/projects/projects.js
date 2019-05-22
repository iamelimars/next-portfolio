import React, { useContext } from 'react';
import './projects.scss';
import {Container} from 'react-bootstrap';
import ProjectContainer from './projectContainer';
import { PrismicContext } from '../../PrismicContext';


const Projects = () => {
    const data = useContext(PrismicContext)

    console.log(data.projects.results);
    const projects = data.projects.results
    return (
        <Container>
            <div className="projects-section">
                <div className="projects-title">
                    <h2>PROJECTS</h2>
                </div>
                <div className="projects">
                 {projects.map((project, index) => {
                    console.log(project);
                    if (index % 2) {
                        return <ProjectContainer alt="right" project={project} />
                    } else {
                        return <ProjectContainer alt="left" project={project} />
                    }
                    
                })}
                </div>
            </div>
        </Container>
    )
}

export default Projects