import React from 'react';
import {Container} from 'react-bootstrap'
import './header.scss'
import Granim from 'granim';
import DesktopContainer from '../../common/desktopContainer/desktopContainer'

class Header extends React.Component {
    static async getInitialProps({ req }) {
        console.log('test');
        
      }
    componentDidMount() {

        const granim = new Granim({
            element: '#granim-canvas',
            direction: 'left-right',
            isPausedWhenNotInView: false,
            states : {
                "default-state": {
                    gradients: [
                        ['#ff9966', '#ff5e62'],
                        ['#00F260', '#0575E6'],
                        ['#e1eec3', '#f05053']
                    ]
                }
            }
        })
    }
    render() {
    return (
        <div className="header-container">
            <canvas id="granim-canvas" className="header-canvas">
            </canvas>
            
            <style jsx>{`
                .header {
                    background: #EEEFF1;
                    height: calc(100vh - 56px);
                }
            `}</style>
                <div className="leftContainer">
                    <h1>WEB DESIGN SOLUTIONS <br/> <b>THAT GET RESULTS</b></h1>
                </div>
                <div className="rightContainer">
                    <DesktopContainer img='/static/zalasupplyfull.png' />
                    <h4>ZALA SUPPLY</h4>
                    {/* <div className="logoContainer">
                        <img src="/static/zalasupply.png" alt="Zala Supply"/>
                        <img src="/static/zalasupply.png" alt="Zala Supply"/>
                        <img src="/static/zalasupply.png" alt="Zala Supply"/>
                        <img src="/static/zalasupply.png" alt="Zala Supply"/>
                    </div> */}
                </div>
            
                
        </div>
    )
    }
}

// Header.getInitialProps = async () => {

//     console.log('test');
    

    // const granim = new Granim({
    //     element: '#granim-canvas',
    //     direction: 'left-right',
    //     isPausedWhenNotInView: false,
    //     states : {
    //         "default-state": {
    //             gradients: [
    //                 ['#ff9966', '#ff5e62'],
    //                 ['#00F260', '#0575E6'],
    //                 ['#e1eec3', '#f05053']
    //             ]
    //         }
    //     }
    // })
// }

export default Header