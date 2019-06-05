import React from 'react'
import './contact.scss'
import Reveal from 'react-reveal/Reveal';

const Contact = () => (
    <div>
        <Reveal effect="growRight" >
        <>
            <div className="contact-wrapper">
                <h1>Send me an email if you want <br/> to get in contact.</h1>
                <a href="mailto:elishajmarshall@gmail.com">Elishajmarshall@gmail.com</a>
            </div> 
        </>
            
            
        </Reveal>
    </div>
)

export default Contact