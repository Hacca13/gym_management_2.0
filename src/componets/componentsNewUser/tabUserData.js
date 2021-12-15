import React, { useState } from "react";
import {Accordion, Container, Form, Row, Col, FloatingLabel} from "react-bootstrap";
import '../../css/newUserPage.css';
import SelectProvince from "./selectProvince";




function TabUserData(){
    const [password, setPassword] = useState();
    const [checkPassword, setCheckPassword] = useState(false);

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
                        <Form.Control type="text" placeholder="Nome" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="user-surname">
                    <FloatingLabel className="mb-3" label="Cognome">
                        <Form.Control type="text" placeholder="Cognome"/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="user-gender" >
                    <Form.Label>Genere</Form.Label>
                    <div style={{display:"flex"}}>
                        <Form.Check type="radio" label="Uomo" controlId="user-male" name="user-gender" value="M" style={{ marginRight:"10px"}} />
                        <Form.Check type="radio" label="Donna" controlId="user-female" name="user-gender" value="F" style={{ marginRight:"10px"}}/>
                        <Form.Check type="radio" label="Altro" controlId="user-other" name="user-gender" value="A" style={{ marginRight:"10px"}}/>
                    </div>

                </Form.Group>
                <Form.Group as={Col} controlId="user-email">
                    <FloatingLabel className="mb-3" label="Email">
                        <Form.Control type="email" placeholder="Email"/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="user-password">
                    <FloatingLabel className="mb-3" label="Password">
                        <Form.Control type="password" placeholder="Password" isInvalid={checkPassword} onBlur={savePassword}/>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="user-checkPassword">
                    <FloatingLabel className="mb-3" label="Conferma Password">
                        <Form.Control type="password" placeholder="Conferma Password" onBlur={checkPasswordFunction}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>

            <SelectProvince/>

        </Container>
    );
}

export default TabUserData;

/*
*
* */