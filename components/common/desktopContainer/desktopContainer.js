import React from 'react';
import './desktopContainer.scss';

const DesktopContainer = ({img}) => {
    return (
        <div className="desktop-wrapper">
            <div className="desktop-container">
                <div className="desktop-head">
                    <div className="ptn"></div>
                    <div className="ptn"></div>
                    <div className="ptn"></div>
                </div>
                <div className="desktop-screen">
                    <img src={img} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default DesktopContainer;