import React from "react";
import {Accordion, Container,Form, Row,Col} from "react-bootstrap";
import '../../css/newUserPage.css';
import SelectProvince from "./selectProvince";

function TabUserData(){
    return(
        <Container>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" />
                </Form.Group>

                <Form.Group as={Col} controlId="formSurname">
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control type="text" placeholder="Cognome" />
                </Form.Group>
            </Row>

            <SelectProvince/>
        </Container>
    );
}

export default TabUserData;