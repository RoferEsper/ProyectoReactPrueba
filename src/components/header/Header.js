import './Header.css';
import useHome from '../../utils/useHome'



import { Button, Container, Form, Nav, Navbar, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';




function Header() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [form, setForm] = useState({});


    const { OnChangeInput, SearchMovies } = useHome();



    // TRAER DATOS DEL Form, IMPUTS
    function OnChangeInputsForm(e) {

        const { name, value } = e.target
        const changes = { ...form, [name]: value };
        setForm(changes);


    }
    // GUARDAMOS EL FORMULARIO EN EL LOCALSTORAGE

    function SaveLocalStorage() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let response = [...users, form]
        localStorage.setItem("users", JSON.stringify(response));
        console.log(response)

    }





    return (
        <div >
            <Navbar className='headerBody'  expand="lg">
                <Container fluid >
                    <Navbar.Brand href="#">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Nav.Link href="#action1">Inicio</Nav.Link>





                            {/* MODAL DE CREAR CUENTA */}

                            <Button variant="light" onClick={handleShow}>
                                Crear Cuenta
                            </Button>{' '}

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton >
                                    <Modal.Title > REGISTRATE 😃 </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    {/* FORMULARIO  */}
                                    <Form>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Email </Form.Label>
                                            <Form.Control name='email' onChange={OnChangeInputsForm} type="email" placeholder="Email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>Nombre</Form.Label>
                                            <Form.Control name='name' onChange={OnChangeInputsForm} type="text" placeholder="Nombre completo" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>Apellido</Form.Label>
                                            <Form.Control name='Lastname' onChange={OnChangeInputsForm} type="text" placeholder="Apellido" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>Fecha de Nacimiento</Form.Label>
                                            <Form.Control name='date' onChange={OnChangeInputsForm} type="date" />
                                        </Form.Group>


                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>

                                    <Button className='btn btn-success w-100' onClick={SaveLocalStorage}>
                                        Guardar
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* TERMINA MODAL */}


                        </Nav>

                        <Form className="d-flex">
                            <input
                                type="text"

                                onChange={OnChangeInput}
                                placeholder="Buscar Pelicula🎬"
                                className="me-2 form-control" aria-label="Search" />

                            <Button variant="outline-primary" onClick={SearchMovies} >Buscar</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
}
export default Header;