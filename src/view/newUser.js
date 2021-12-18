import React, {useEffect, useState} from "react";
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
        'idUserDatabase':'',
        'name':'',
        'surname':'',
        'email':'',
        'gender':'',
        'telephoneNumber':'',

        'password':'',
        'dateOfBirth':'',
        'birthplace':'',
        'birthplaceProvince':'',
        'fiscalCode':'',
        'status':false,
        'medicalCertificate':'',
        'publicSocial':false,
        'isAdult':true,
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
            'imageDocument':''
        }
    });
    const [tutorData, setTutorData] = useState({
        'parentName':'',
        'parentSurname':'',
        'parentEmail':'',
        'parentGender':'',
        'parentTelephoneNumber':'',


        'parentDateOfBirth':'',
        'parentBirthplace':'',
        'parentBirthplaceProvince':'',
        'parentFiscalCode':'',

        'parentResidence':{
            'parentCityOfResidence':'',
            'parentStreetResidence':'',
            'parentNumberResidence':'',
            'parentCapResidence':'',
        },

        'parentDocument':{
            'parentTypeDocument':'',
            'parentNumberDocument':'',
            'parentReleasedDocument':'',
            'parentReleaseDateDocument':'',
            'parentImageDocument':'',
        }
    });
    const [plicometricData,setPlicometricData] = useState();

    const refreshUser = (dataToBeModified,dataValue) =>{

        const  constNewUser = newUser;

        if(dataToBeModified === 'name'){
            constNewUser.name = dataValue;
        }
        if(dataToBeModified === 'surname'){
            constNewUser.surname = dataValue;
        }
        if(dataToBeModified === 'email'){
            constNewUser.email = dataValue;
        }
        if(dataToBeModified === 'gender'){
            constNewUser.gender = dataValue;
        }
        if(dataToBeModified === 'telephoneNumber'){
            constNewUser.telephoneNumber = dataValue;
        }
        if(dataToBeModified === 'password'){
            constNewUser.password = dataValue;
        }
        if(dataToBeModified === 'dateOfBirth'){
            constNewUser.dateOfBirth = dataValue;
        }
        if(dataToBeModified === 'birthplace'){
            constNewUser.birthplace = dataValue;
        }
        if(dataToBeModified === 'birthplaceProvince'){
            constNewUser.birthplaceProvince = dataValue;
        }
        if(dataToBeModified === 'fiscalCode'){
            constNewUser.fiscalCode = dataValue;
        }
        if(dataToBeModified === 'medicalCertificate'){
            constNewUser.medicalCertificate = dataValue;
        }
        if(dataToBeModified === 'publicSocial'){
            constNewUser.publicSocial = dataValue;
        }
        if(dataToBeModified === 'isAdult'){
            constNewUser.isAdult = dataValue;
            setIsAdult(dataValue);
        }

        if(dataToBeModified === 'cityOfResidence'){
            constNewUser.residence.cityOfResidence = dataValue;
        }
        if(dataToBeModified === 'streetResidence'){
            constNewUser.residence.streetResidence = dataValue;
        }
        if(dataToBeModified === 'numberResidence'){
            constNewUser.residence.numberResidence = dataValue;
        }
        if(dataToBeModified === 'capResidence'){
            constNewUser.residence.capResidence = dataValue;
        }

        if(dataToBeModified === 'typeDocument'){
            constNewUser.document.typeDocument = dataValue;
        }
        if(dataToBeModified === 'numberDocument'){
            constNewUser.document.numberDocument = dataValue;
        }
        if(dataToBeModified === 'releasedDocument'){
            constNewUser.document.releasedDocument = dataValue;
        }
        if(dataToBeModified === 'releaseDateDocument'){
            constNewUser.document.releaseDateDocument = dataValue;
        }
        if(dataToBeModified === 'imageDocument'){
            constNewUser.document.imageDocument = dataValue;
        }
        console.log(constNewUser.publicSocial);
        setNewUser(constNewUser);
    }
    const refreshTutorData = (dataToBeModified,dataValue) =>{

        const  constTutorData = tutorData;

        if(dataToBeModified === 'parentName'){
            constTutorData.parentName = dataValue;
        }
        if(dataToBeModified === 'parentSurname'){
            constTutorData.parentSurname = dataValue;
        }
        if(dataToBeModified === 'parentEmail'){
            constTutorData.parentEmail = dataValue;
        }
        if(dataToBeModified === 'parentGender'){
            constTutorData.parentGender = dataValue;
        }
        if(dataToBeModified === 'parentTelephoneNumber'){
            constTutorData.parentTelephoneNumber = dataValue;
        }
        if(dataToBeModified === 'parentDateOfBirth'){
            constTutorData.parentDateOfBirth = dataValue;
        }
        if(dataToBeModified === 'parentBirthplace'){
            constTutorData.parentBirthplace = dataValue;
        }
        if(dataToBeModified === 'parentBirthplaceProvince'){
            constTutorData.parentBirthplaceProvince = dataValue;
        }
        if(dataToBeModified === 'parentFiscalCode'){
            constTutorData.parentFiscalCode = dataValue;
        }

        if(dataToBeModified === 'parentCityOfResidence'){
            constTutorData.parentResidence.parentCityOfResidence = dataValue;
        }
        if(dataToBeModified === 'parentStreetResidence'){
            constTutorData.parentResidence.parentStreetResidence = dataValue;
        }
        if(dataToBeModified === 'parentNumberResidence'){
            constTutorData.parentResidence.parentNumberResidence = dataValue;
        }
        if(dataToBeModified === 'parentCapResidence'){
            constTutorData.parentResidence.parentCapResidence = dataValue;
        }

        if(dataToBeModified === 'parentTypeDocument'){
            constTutorData.parentDocument.parentTypeDocument = dataValue;
        }
        if(dataToBeModified === 'parentNumberDocument'){
            constTutorData.parentDocument.parentNumberDocument = dataValue;
        }
        if(dataToBeModified === 'parentReleasedDocument'){
            constTutorData.parentDocument.parentReleasedDocument = dataValue;
        }
        if(dataToBeModified === 'parentReleaseDateDocument'){
            constTutorData.parentDocument.parentReleaseDateDocument = dataValue;
        }
        if(dataToBeModified === 'parentImageDocument'){
            constTutorData.parentDocument.parentImageDocument = dataValue;
        }

        setTutorData(constTutorData);
    }
    const refreshPlicometricData = (dataToBeModified,dataValue) => {

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
                                            <TabUserData refreshUser={refreshUser}/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <TabPliconometricData refreshPlicometricData={refreshPlicometricData}/>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <TabTutorData refreshTutorData={refreshTutorData}/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                        <div style={{float:'right', marginTop: '2%', marginBottom:"3%"}}>
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