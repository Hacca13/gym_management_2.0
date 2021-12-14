import React from "react";
import {Accordion, Col, Form, Nav, Row, Tab,} from "react-bootstrap";
import MyNavbar from "../componets/myNavbar";
import '../css/newUserPage.css';
import TabUserData from "../componets/componentsNewUser/tabUserData";
import TabPliconometricData from "../componets/componentsNewUser/tabPlicometricData";
import TabTutorData from "../componets/componentsNewUser/tabTutorData";

function NewUserPage(){
    return(
        <>
            <MyNavbar/>
            <div>
                <h1 className='title'>Inserimento Nuovo Utente</h1>
                <Form>
                    <div className='tab-container'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Dati Utente</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Dati Pliconometrici</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Dati Tutore</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <TabUserData />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <TabPliconometricData />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <TabTutorData />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </Form>

            </div>
        </>
    );
}

export default NewUserPage;