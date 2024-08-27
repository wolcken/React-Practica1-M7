import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {

    const form = useSelector(state => state.form);

    return (
        <>
            <Navbar key={'md'} expand={'md'} className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to={'/'}>
                        <div style={{display: 'flex'}}>
                            <img src={logo} className="logo-header" alt="logo-header" style={{ width: '30px' }} />
                            {
                                (
                                    form.formData.email === '' ?
                                        null
                                        :
                                        <span style={{color: '#f9f9f9', fontSize: '14px'}}>
                                            {
                                                form.formData.username + ' : ' + form.formData.email
                                            }
                                        </span>
                                )
                            }
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-md'} />
                    <Navbar.Offcanvas
                        id={'offcanvasNavbar-expand-md'}
                        aria-labelledby={'offcanvasNavbarLabel-expand-md'}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-md'}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                                <Nav.Link as={Link} to={'/default'}>Default</Nav.Link>
                                <Nav.Link as={Link} to={'/products'}>Products</Nav.Link>
                                <Nav.Link as={Link} to={'/form'}>Form</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Header