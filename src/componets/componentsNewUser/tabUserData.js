import React, {useEffect, useState} from "react";
import {Container, Form, Row, Col, FloatingLabel, Button, Alert} from "react-bootstrap";
import '../../css/newUserPage.css';
import SelectProvince from "./selectProvince";
import CodiceFiscale from "calcolo-codice-fiscale";




function TabUserData(props){

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("A");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [birthplace, setBirthplace] = useState("");
    const [birthplaceProvince, setBirthplaceProvince] = useState("");
    const [fiscalCode, setFiscalCode] = useState("");

    const [publicSocial, setPublicSocial] = useState(false);


    const [checkPassword, setCheckPassword] = useState(false);

    const saveName = (e) =>{
        setName(e.target.value);
        props.refreshUser("name",e.target.value);
    }
    const saveSurname = (e) =>{
        setSurname(e.target.value);
        props.refreshUser("surname",e.target.value);

    }
    const saveEmail = (e) =>{
        props.refreshUser("email",e.target.value);
    }
    const saveGender = (e) =>{
        setGender(e.target.value);
        props.refreshUser("gender",e.target.value);
    }
    const saveTelephoneNumber = (e) =>{
        props.refreshUser("telephoneNumber",e.target.value);
    }
    const savePassword = (e) =>{
        setPassword(e.target.value);
        props.refreshUser("password",e.target.value);
    }
    const saveDateOfBirth = (e) =>{
        const dateUser = e.target.value;
        const dateToday = new Date();
        const todayDay = dateToday.getDate();
        const todayMonth = dateToday.getMonth()+1;
        const todayYear = dateToday.getFullYear();
        const today = todayYear + "-" + todayMonth + "-" + todayDay;
        const year18old = todayYear-18;
        const date18yearsOld = year18old + "-" + todayMonth + "-" + todayDay;

        if(dateUser > today){
            alert("Veramente l'utente è nato nel futuro? ")
        }
        else{
            setDateOfBirth(e.target.value);
            props.refreshUser("dateOfBirth",e.target.value);
            if(dateUser > date18yearsOld){
                props.refreshUser("isAdult",false);
            }
            else{
                props.refreshUser("isAdult",true);
            }
        }
    }
    const saveBirthplace = (e) =>{
        setBirthplace(e.target.value);
        props.refreshUser("birthplace",e.target.value);
    }
    const saveBirthplaceProvince = (e) =>{
        setBirthplaceProvince(e.target.value);
        props.refreshUser("birthplaceProvince",e.target.value);
    }
    const saveFiscalCode = (e) => {
        setFiscalCode(e.target.value);
        props.refreshUser("fiscalCode",e.target.value);
    }

    const saveCityOfResidence = (e) =>{
        props.refreshUser("cityOfResidence",e.target.value);
    }
    const saveStreetResidence = (e) =>{
        props.refreshUser("streetResidence",e.target.value);
    }
    const saveNumberResidence = (e) =>{
        props.refreshUser("numberResidence",e.target.value);
    }
    const saveCapResidence = (e) =>{
        props.refreshUser("capResidence",e.target.value);
    }

    const saveTypeDocument = (e) =>{
        props.refreshUser("typeDocument",e.target.value);
    }
    const saveNumberDocument = (e) =>{
        props.refreshUser("numberDocument",e.target.value);
    }
    const saveReleaseDateDocument = (e) =>{
        props.refreshUser("releaseDateDocument",e.target.value);
    }
    const saveReleasedDocument = (e) => {
        props.refreshUser("releasedDocument",e.target.value);
    }
    const saveImageDocument = (e) =>{
        props.refreshUser("imageDocument",e.target.value);
    }

    const saveMedicalCertificate = (e) =>{
        props.refreshUser("medicalCertificate",e.target.value);
    }
    const savePublicSocial = (e) =>{
       setPublicSocial(!publicSocial);
    }
    useEffect(() => {
        props.refreshUser("publicSocial",publicSocial);
    }, [publicSocial]);

    const calculateFiscalCode = () =>{
        if(name.trim()!== "" && surname.trim()!== "" && dateOfBirth.trim()!== "" && gender!=="A" && birthplace.trim()!=="" && birthplaceProvince.trim()!==""){
            var data = dateOfBirth.split('-');
            try {
                var cf = CodiceFiscale.compute(name,surname,gender,data[2],data[1],data[0],birthplace,birthplaceProvince);
                setFiscalCode(cf);
                props.refreshUser("fiscalCode",fiscalCode);
            }catch (e) {
                alert("Alcuni dati per calcolare il codice fiscale non sono inseriti correttamente!");
            }
        }
        else {
            alert("Alcuni dati per calcolare il codice fiscale non sono inseriti correttamente!");
        }

    }

    const checkPasswordFunction = (e) => {
        const tempPassword = e.target.value;
        if(tempPassword !== password){
            setCheckPassword(true);
        }
        else {
            setCheckPassword(false);
        }
    }

    return(
        <Container>
            <Row className="mb-3">
                <h3>Generalità:</h3>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="user-name">
                    <FloatingLabel className="mb-3" label="Nome">
                        <Form.Control type="text" required placeholder="Nome" onBlur={saveName} />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="user-surname">
                    <FloatingLabel className="mb-3" label="Cognome">
                        <Form.Control type="text" required placeholder="Cognome" onBlur={saveSurname}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="user-email">
                    <FloatingLabel className="mb-3" label="Email">
                        <Form.Control type="email" required placeholder="Email" onBlur={saveEmail}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="user-gender" >
                    <Form.Label>Genere</Form.Label>
                    <div style={{display:"flex"}}>
                        <Form.Check type="radio" label="Uomo" controlId="user-male" name="user-genger" value="M" style={{ marginRight:"10px"}} onChange={saveGender}/>
                        <Form.Check type="radio" label="Donna" controlId="user-female" name="user-genger" value="F" style={{ marginRight:"10px"}} onChange={saveGender}/>
                        <Form.Check type="radio" label="Altro"  controlId="user-other" name="user-genger" value="A" style={{ marginRight:"10px"}} onChange={saveGender}/>
                    </div>
                </Form.Group>
                <Form.Group as={Col} controlId="user-telephone-number">
                    <FloatingLabel className="mb-3" label="Numero di Telefono">
                        <Form.Control type="text" required placeholder="Numero di Telefono" onBlur={saveTelephoneNumber}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="user-password">
                    <FloatingLabel className="mb-3" label="Password">
                        <Form.Control type="password" required placeholder="Password" isInvalid={checkPassword} onBlur={savePassword}/>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="user-checkPassword">
                    <FloatingLabel className="mb-3" label="Conferma Password">
                        <Form.Control type="password" required placeholder="Conferma Password" onBlur={checkPasswordFunction}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}  controlId="user-date-of-birth" >
                    <FloatingLabel className="mb-3" label="Data di Nascita">
                        <Form.Control type="date" onBlur={saveDateOfBirth}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="user-birthplace">
                    <FloatingLabel className="mb-3" label="Città di Nascita">
                        <Form.Control type="text" placeholder="Città di Nascita" onBlur={saveBirthplace}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <SelectProvince seveProvince={saveBirthplaceProvince}/>
                <Form.Group as={Col} md="4" controlId="user-fiscal-code">
                    <FloatingLabel className="mb-3" label="Codice Fiscale">
                        <Form.Control type="text" value={fiscalCode} onChange={saveFiscalCode} placeholder="Codice Fiscale"/>
                    </FloatingLabel>
                </Form.Group>
                <Button style={{marginBottom:"2%"}} size="sm" variant="secondary" className="col-md-2" onClick={calculateFiscalCode}>Calcola</Button>
            </Row>

            <Row className="mb-3" >
                <Form.Group as={Col} md="5" controlId="user-date-medical-certificate">
                    <FloatingLabel className="mb-3" label="Data di Rilascio Certificato Medico">
                        <Form.Control type="date"  placeholder="Data di Rilascio Certificato Medico" onChange={saveMedicalCertificate}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="5" style={{paddingTop:'2%',marginLeft:'5%'}}>
                    <Form.Check  type="switch" id="user-public-social" label="Permesso alla pubblicazione sui social" onChange={savePublicSocial}/>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <h3>Residente in:</h3>
            </Row>
            <Row className="mb-3">

                <Form.Group as={Col} md="4" controlId="user-city-of-residence">
                    <FloatingLabel className="mb-3" label="Città di residenza">
                        <Form.Control type="text"  placeholder="Città di residenza" onBlur={saveCityOfResidence}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="user-street-residence">
                    <FloatingLabel className="mb-3" label="Via">
                        <Form.Control type="text"  placeholder="Via" onBlur={saveStreetResidence}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="user-number-residence">
                    <FloatingLabel className="mb-3" label="Numero">
                        <Form.Control type="text"  placeholder="Numero" onBlur={saveNumberResidence}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="user-cap-residence">
                    <FloatingLabel className="mb-3" label="CAP">
                        <Form.Control type="text"  placeholder="CAP" onBlur={saveCapResidence}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <h3>Documento:</h3>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="5" controlId="user-type-document">
                    <FloatingLabel  label="Seleziona il Tipo di Documento">
                        <Form.Select aria-label="Tipo di Documento" onChange={saveTypeDocument}>
                            <option value="">Non Specificato</option>
                            <option value="carta d'identità">Carta d'identità</option>
                            <option value="patente">Patente</option>
                            <option value="passaporto">Passaporto</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="user-number-document">
                    <FloatingLabel className="mb-3" label="Numero">
                        <Form.Control type="text"  placeholder="Numero" onBlur={saveNumberDocument}/>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="user-release-date-document">
                    <FloatingLabel className="mb-3" label="Data di Rilascio">
                        <Form.Control type="date"  placeholder="Data di Rilascio" onChange={saveReleaseDateDocument}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}  controlId="user-released-document">
                    <FloatingLabel className="mb-3" label="Rilasciato da">
                        <Form.Control type="text"  placeholder="Rilasciato da" onBlur={saveReleasedDocument}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col}  controlId="user-image-document">
                    <Form.Control type="file"  placeholder="Carica Documento" onChange={saveImageDocument}/>
                </Form.Group>
            </Row>



        </Container>
    );
}

export default TabUserData;

/*
*
* */