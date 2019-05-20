import React, {Component} from 'react'
import Navbar from '../components/common/navbar/navbar'
import Header from '../components/home/header/header'
import PageHead from '../components/common/pageHead/pageHead'
import DesktopContainer from '../components/common/desktopContainer/desktopContainer'

class Home extends Component {
    render() {
        return (
            <div>
                <style global jsx>{`
                    body {
                        margin: 0;
                    }
                `}</style>
                <PageHead title="Home | Eli J Marshall" />
                <Navbar color="rgba(1,1,1,0)" />
                <Header />
                Welcome to Next.js!
            </div>
        )
    }
    
}

export default Home;