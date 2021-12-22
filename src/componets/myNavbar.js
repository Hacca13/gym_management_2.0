import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";

const prefixLink ="/admin";
const linkUserManagement = prefixLink+'/gestione-utenti';
const linkTrainingCardManagement = prefixLink+'/gestione-schede';
const linkSubscriptionsManagement = prefixLink+'/gestione-abbonamenti';
const linkCourseManagement = prefixLink+'/gestione-corsi';
const linkExerciseManagement = prefixLink+'/gestione-esercizi';
const linkBookingManagement = prefixLink+'/gestione-prenotazioni';

function MyNavbar() {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="/admin/home">

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
                            <Nav.Link href={linkUserManagement}>Gestione Utenti</Nav.Link>
                            <Nav.Link href={linkTrainingCardManagement}>Gestione Schede</Nav.Link>
                            <Nav.Link href={linkSubscriptionsManagement}>Gestione Abbonamenti</Nav.Link>
                            <Nav.Link href={linkCourseManagement}>Gestione Corsi</Nav.Link>
                            <Nav.Link href={linkBookingManagement}>Gestione Prenotazioni</Nav.Link>
                            <Nav.Link href={linkExerciseManagement}>Gestione Esercizi</Nav.Link>

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