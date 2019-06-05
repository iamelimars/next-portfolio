import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

const navbar = ({color}) => {
    return (
        <div>
            <style jsx>{`
                .navbar,
                .navbar-default {
                    background-image: linear-gradient(to bottom,#2c4053 0,#2c4053 100%) !important; /* override background image gradient w/ flat color */
                }
                #white-nav {
                    background: red;
                    height: 50px;
                }
            `}</style>
            <Navbar style={{background: color}} collapseOnSelect expand="lg"  variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ELI.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" />
                        <Nav>
                            <Link  href="/blog">
                                <a className="nav-link">Blog</a>
                            </Link>
                            <Link  href="/resume">
                                <a className="nav-link">Resume</a>
                            </Link>
                            <Link  href="/contact">
                                <a className="nav-link">Contact</a>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default navbar