import React, { useState } from "react";
import {Container, Form, Row, Col, FloatingLabel, Button, Alert} from "react-bootstrap";
import '../../css/newUserPage.css';
import SelectProvince from "./selectProvince";
import CodiceFiscale from "calcolo-codice-fiscale";




function TabUserData(){

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [gender, setGender] = useState("A");
    const [email, setEmail] = useState("A");
    const [password, setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [birthplace, setBirthplace] = useState("");
    const [birthplaceProvince, setBirthplaceProvince] = useState("");
    const [cfValue, setCfValue] = useState("");


    const [checkPassword, setCheckPassword] = useState(false);




    const saveName = (e) =>{
        setName(e.target.value);
    }
    const saveSurname = (e) =>{
        setSurname(e.target.value);
    }
    const saveDateOfBirth = (e) =>{
        setDateOfBirth(e.target.value);
    }
    const saveGender = (e) =>{
        setGender(e.target.value);
    }
    const saveBirthplace = (e) =>{
        setBirthplace(e.target.value);
    }
    const saveBirthplaceProvince = (e) =>{
        setBirthplaceProvince(e.target.value);
    }
    const saveFiscalCode = (e) => {
        setCfValue(e.target.value);
    }

    const calculateFiscalCode = () =>{
        if(name.trim()!== "" && surname.trim()!== "" && dateOfBirth.trim()!== "" && gender!=="A" && birthplace.trim()!=="" && birthplaceProvince.trim()!==""){
            var data = dateOfBirth.split('-');
            try {
                var cf = CodiceFiscale.compute(name,surname,gender,data[2],data[1],data[0],birthplace,birthplaceProvince);
                setCfValue(cf);
            }catch (e) {
                alert("Alcuni dati per calcolare il codice fiscale non sono inseriti correttamente!");
            }
        }
        else {
            alert("Alcuni dati per calcolare il codice fiscale non sono inseriti correttamente!");
        }

    }

    const savePassword = (e) =>{
        setPassword(e.target.value);
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
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="user-gender" >
                    <Form.Label>Genere</Form.Label>
                    <div style={{display:"flex"}}>
                        <Form.Check type="radio" label="Uomo" controlId="user-male" name="user-male" value="M" style={{ marginRight:"10px"}} onChange={saveGender}/>
                        <Form.Check type="radio" label="Donna" controlId="user-female" name="user-female" value="F" style={{ marginRight:"10px"}} onChange={saveGender}/>
                        <Form.Check type="radio" label="Altro"  controlId="user-other" name="user-other" value="A" style={{ marginRight:"10px"}} onChange={saveGender}/>
                    </div>

                </Form.Group>
                <Form.Group as={Col} controlId="user-email">
                    <FloatingLabel className="mb-3" label="Email">
                        <Form.Control type="email" required placeholder="Email"/>
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
                <Form.Group as={Col} md="5" controlId="user-fiscal-code">
                    <FloatingLabel className="mb-3" label="Codice Fiscale">
                        <Form.Control type="text" value={cfValue} onChange={saveFiscalCode} placeholder="Codice Fiscale"/>
                    </FloatingLabel>
                </Form.Group>
                <Button style={{marginBottom:"2%"}} size="sm" variant="secondary" className="col-md-2" onClick={calculateFiscalCode}>Calcola</Button>
            </Row>


        </Container>
    );
}

export default TabUserData;

/*
*
* */