import React, { useState } from "react";
import { Alert, Button, Col, Form, Nav, Row, Tab,} from "react-bootstrap";
import MyNavbar from "../componets/myNavbar";
import '../css/newUserPage.css';
import TabUserData from "../componets/componentsNewUser/tabUserData";
import TabPliconometricData from "../componets/componentsNewUser/tabPlicometricData";
import TabTutorData from "../componets/componentsNewUser/tabTutorData";




const submitInsertNewUser= () =>{
    console.log("submit");
    <Alert  variant={'success'}>
        Utente Registrato con successo!
    </Alert>
}


function NewUserPage(){
    const [isAdult, setIsAdult] = useState(true);

    const [newUser, setNewUser] = useState({
        'name':'',
        'surname':'',
        'email':'',
        'gender':'',
        'telephoneNumber':'',

        'password':'',
        'dateOfBirth':'',
        'birthplace':'',
        'birthplaceProvince':'',
        'cfValue':'',

        'residence':{
            'cityOfResidence':'',
            'streetResidence':'',
            'numberResidence':'',
            'capResidence':'',
        },

        'document':{
            'typeDocument':'',
            'numberDocument':'',
            'releasedDocument':'',
            'releaseDateDocument':'',
            'imageDocument':'',
        }
    });

    const refreshUser = () =>{

    }


    return(
        <>
            <MyNavbar/>
            <div>
                <h1 className='title'>Inserimento Nuovo Utente</h1>
                <Form onSubmit={submitInsertNewUser}>
                    <div className='tab-container'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                            <Row>
                                <Col sm={2}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Dati Utente</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Dati Pliconometrici</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third" disabled={isAdult}>Dati Tutore</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={10}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <TabUserData isAdult={setIsAdult}/>
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

                        <div style={{float:'right', marginTop: '2%'}}>
                            <Button variant="primary" type="submit" >
                                Aggiungi Nuovo Utente
                            </Button>
                        </div>
                    </div>
                </Form>

            </div>
        </>
    );
}

export default NewUserPage;