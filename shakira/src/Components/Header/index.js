import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from 'react-router-dom'

const HeaderComponents = () => {

    const navData = [
        { name:'Home', link:'/'},
        { name:'Movies', link:'/movies'},
        { name:'Tv Series', link:'/series'},
        { name:'Contact Us', link:'/contact'},
        { name:'About', link:'/about'},






        { name:'Search', link:'/search'},
        { name: 'Sign Up', link:'/signup'},
        { name: 'Sign In', link:'/signin'}
    ]

    return(
        <>
           <header className='header'>
            <Navbar bg="dark" expand="lg">

            <Container>
                <Navbar.Brand>
                    Review Radar
                </Navbar.Brand>
                <Navbar.Toggle area-controls="navbarScroll" variant='light' style={{backgroundColor: 'white'}} />
                <Navbar.Collapse id="navbarScroll">

                    <Nav className='me-aut my-2 my-lg-0' 
                        style={{ maxHeight:'100px'}}
                        navbarScroll>

                            {
                                navData.map((item)=>{
                                    return(
                                        <Nav key={item.name}>
                                            <Link to={item.link}>
                                            {item.name}
                                            </Link>
                                        </Nav>
                                    )
                                    })  
                            }
                            
                        
                    </Nav>

                </Navbar.Collapse>


            </Container>

            </Navbar>
           </header>
        </>
    )
}
export default HeaderComponents;