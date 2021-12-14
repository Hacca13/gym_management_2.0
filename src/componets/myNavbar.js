import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";


function MyNavbar() {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="/home">

                    Fit & Fight
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Fit & Fight</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/gestione-utenti">Gestione Utenti</Nav.Link>
                            <Nav.Link href="/gestione-schede">Gestione Schede</Nav.Link>
                            <Nav.Link href="/gestione-abbonamenti">Gestione Abbonamenti</Nav.Link>
                            <Nav.Link href="/gestione-prenotazioni">Gestione Prenotazioni</Nav.Link>
                            <Nav.Link href="/gestione-esercizi">Gestione Esercizi</Nav.Link>

                        </Nav>
                        <br/>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Ricerca"
                                className="me-2"
                                aria-label="Ricerca"
                            />
                            <Button variant="outline-success">Cerca</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;