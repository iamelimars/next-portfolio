import React, { useContext, Suspense } from 'react';
import './projects.scss';
import {Container} from 'react-bootstrap';
import ProjectContainer from './projectContainer';
import { PrismicContext } from '../../PrismicContext';
// import { PropagateLoader } from 'react-spinners';



const Projects = ({projects}) => {
    const data = useContext(PrismicContext)

    // console.log(data.projects.results);
    // const projects = data.projects.results
    if (!projects) {
        return (
                <div>
                    <style jsx>{`
                        .loading-container {
                            height: 400px;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    `}</style>
                    <div className="loading-container">
                        {/* <PropagateLoader color={'#8A99C0'}/> */}
                    </div>
                </div>
            )
    }
    return (
        <>
            <div className="projects-section">
                <div className="projects-title">
                    <h2>PROJECTS</h2>
                </div>
                <div className="projects">
                 {projects.map((project, index) => {
                    // console.log(project);
                    if (index % 2) {
                        return <ProjectContainer key={index} alt="right" project={project} />
                    } else {
                        return <ProjectContainer key={index} alt="left" project={project} />
                    }
                })}
                </div>
            </div>
        </>
    )
}

export default Projects