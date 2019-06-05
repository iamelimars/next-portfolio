import React from 'react';
import './skills.scss';
import {Container} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


const Skills = () => (
    <>
        <div className="skills-section">
            <div className="skills-wrapper">
                <Container>
                    <div className="skills-container">
                        <div className="languages-container">
                            <h1>LANGUAGES</h1>
                            <Fade top cascade delay={400}>
                                <ul>
                                    <li>Javascript (ES6)</li>
                                    <li>PHP</li>
                                    <li>Swift</li>
                                    <li>Objective C</li>
                                    <li>HTML5</li>
                                    <li>CSS3 (SCSS)</li>
                                    <li>SQL</li>
                                    <li>GraphQL</li>
                                </ul>
                            </Fade>
                        </div>
                        <div className="frameworks-container">
                            <h1>FRAMEWORKS & LIBS</h1>
                            <Fade top cascade delay={600}>
                                <ul>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Laravel</li>
                                    <li>Next.js, Gatsby.js</li>
                                    <li>jQuery</li>
                                    <li>Wordpress</li>
                                    <li>Prismic</li>
                                    <li>Node.js (In Process)</li>
                                    <li>Axios</li>
                                </ul>
                            </Fade>
                        </div>
                        <div className="additional-container">
                            <h1>ADDITIONAL</h1>
                            <Fade top cascade delay={800}>
                                <ul>
                                    <li>Git (Github)</li>
                                    <li>Photoshop, Sketch</li>
                                    <li>MySQL</li>
                                    <li>REST Api's</li>
                                    <li>Chart.js</li>
                                    <li>Performance Optimisation</li>
                                    <li>Webpack, NPM, Yarn, Babel</li>
                                    <li>Command Line</li>
                                    <li>Socket.io</li>
                                    <li>Anime.js, Bootstrap, etc..</li>
                                </ul>
                            </Fade>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    </>
)

export default Skills