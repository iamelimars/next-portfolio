import React from 'react';
import './about.scss';
import {Container} from 'react-bootstrap'

const About = () => (
    <Container>
        <div className="about-section">
            <div className="about-text">
                <h2>ABOUT ME</h2>
                <p>I am in expert in front end development, with my most proficient language being JavaScript. I am also excellent in making single page apps with React, Redux, Gatsby & Next.js. My skills are not limited to front end development, I am also great in PHP Laravel.</p>
            </div>
            <div className="about-action">
                <a href="mailto:elishajmarshall@gmail.com">
                    <img src="/static/icon.svg" alt="Eli J Marshall"/>
                </a>
                <p>CONTACT ME</p>
            </div>
        </div>
    </Container>
)

export default About