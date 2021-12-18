import React, {useState} from "react";
import {Accordion, Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import SelectProvince from "./selectProvince";
import CodiceFiscale from "calcolo-codice-fiscale";

function TabparentData(props){
    const [parentName, setParentName] = useState("");
    const [parentSurname, setParentSurname] = useState("");
    const [parentGender, setParentGender] = useState("A");
    const [parentDateOfBirth, setParentDateOfBirth] = useState("");
    const [parentBirthplace, setParentBirthplace] = useState("");
    const [parentBirthplaceProvince, setParentBirthplaceProvince] = useState("");
    const [parentFiscalCode, setParentFiscalCode] = useState("");

    const saveParentName = (e) =>{
        setParentName(e.target.value);
        props.refreshTutorData("parentName",e.target.value);
    }
    const saveParentSurname = (e) =>{
        setParentSurname(e.target.value);
        props.refreshTutorData("parentSurname",e.target.value);

    }
    const saveParentGender = (e) =>{
        setParentGender(e.target.value);
        props.refreshTutorData("parentGender",e.target.value);
    }
    const saveParentDateOfBirth = (e) =>{
        const dateParentUser = e.target.value;
        const dateToday = new Date();
        const todayDay = dateToday.getDate();
        const todayMonth = dateToday.getMonth()+1;
        const todayYear = dateToday.getFullYear();
        const today = todayYear + "-" + todayMonth + "-" + todayDay;
        const year18old = todayYear-18;
        const date18yearsOld = year18old + "-" + todayMonth + "-" + todayDay;

        if(dateParentUser > today){
            alert("Veramente il Tutore è nato nel futuro? ")
        }
        else{
            if(dateParentUser > date18yearsOld){
                alert("Il Tutore deve essere maggiorenne.")
            }
            else{
                setParentDateOfBirth(e.target.value);
                props.refreshTutorData("parentDateOfBirth",e.target.value);
            }
        }
    }
    const saveParentBirthplace = (e) =>{
        setParentBirthplace(e.target.value);
        props.refreshTutorData("parentBirthplace",e.target.value);
    }
    const saveParentBirthplaceProvince = (e) =>{
        setParentBirthplaceProvince(e.target.value);
        props.refreshTutorData("parentBirthplaceProvince",e.target.value);
    }
    const saveParentFiscalCode = (e) => {
        setParentFiscalCode(e.target.value);
        props.refreshTutorData("parentFiscalCode",parentFiscalCode);

    }
    const saveParentTelephoneNumber = (e) =>{
        props.refreshTutorData("parentTelephoneNumber",e.target.value);
    }
    const saveParentEmail = (e) =>{
        props.refreshTutorData("parentEmail",e.target.value);
    }

    const saveParentCityOfResidence = (e) =>{
        props.refreshTutorData("parentCityOfResidence",e.target.value);
    }
    const saveParentStreetResidence = (e) =>{
        props.refreshTutorData("parentStreetResidence",e.target.value);
    }
    const saveParentNumberResidence = (e) =>{
        props.refreshTutorData("parentNumberResidence",e.target.value);
    }
    const saveParentCapResidence = (e) =>{
        props.refreshTutorData("parentCapResidence",e.target.value);
    }

    const saveParentTypeDocument = (e) =>{
        props.refreshTutorData("parentTypeDocument",e.target.value);
    }
    const saveParentNumberDocument = (e) =>{
        props.refreshTutorData("parentNumberDocument",e.target.value);
    }
    const saveParentReleaseDateDocument = (e) =>{
        props.refreshTutorData("parentReleaseDateDocument",e.target.value);
    }
    const saveParentReleasedDocument = (e) => {
        props.refreshTutorData("parentReleasedDocument",e.target.value);
    }
    const saveParentImageDocument = (e) =>{
        props.refreshTutorData("parentImageDocument",e.target.value);
    }


    const calculateParentFiscalCode = () =>{
        if(parentName.trim()!== "" && parentSurname.trim()!== "" && parentDateOfBirth.trim()!== "" && parentGender!=="A" && parentBirthplace.trim()!=="" && parentBirthplaceProvince.trim()!==""){
            var data = parentDateOfBirth.split('-');
            try {
                var cf = CodiceFiscale.compute(parentName,parentSurname,parentGender,data[2],data[1],data[0],parentBirthplace,parentBirthplaceProvince);
                setParentFiscalCode(cf);
                props.refreshTutorData("parentFiscalCode",cf);
            }catch (e) {
                alert("Alcuni dati per calcolare il codice fiscale non sono inseriti correttamente!");
            }
        }
        else {
            alert("Alcuni dati per calcolare il codice fiscale non sono inseriti correttamente!");
        }

    }

    return(
        <Container>
            <Row className="mb-3">
                <h3>Generalità Tutore:</h3>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="user-name-parent">
                    <FloatingLabel className="mb-3" label="Nome Tutore">
                        <Form.Control type="text" required placeholder="Nome Tutore" onBlur={saveParentName} />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} controlId="user-surname-parent">
                    <FloatingLabel className="mb-3" label="Cognome Tutore">
                        <Form.Control type="text" required placeholder="Cognome Tutore" onBlur={saveParentSurname}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="user-email-parent">
                    <FloatingLabel className="mb-3" label="Email">
                        <Form.Control type="email"  placeholder="Email" onBlur={saveParentEmail} />
                    </FloatingLabel>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="user-gender-parent" >
                    <Form.Label>Genere</Form.Label>
                    <div style={{display:"flex"}}>
                        <Form.Check type="radio" label="Uomo" controlId="user-male-parent" name="user-genger-parent" value="M" style={{ marginRight:"10px"}} onChange={saveParentGender}/>
                        <Form.Check type="radio" label="Donna" controlId="user-female-parent" name="user-genger-parent" value="F" style={{ marginRight:"10px"}} onChange={saveParentGender}/>
                        <Form.Check type="radio" label="Altro"  controlId="user-other-parent" name="user-genger-parent" value="A" style={{ marginRight:"10px"}} onChange={saveParentGender}/>
                    </div>
                </Form.Group>
                <Form.Group as={Col} controlId="user-telephone-number-parent">
                    <FloatingLabel className="mb-3" label="Numero di Telefono">
                        <Form.Control type="text" required placeholder="Numero di Telefono" onBlur={saveParentTelephoneNumber}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}  controlId="user-date-of-birth-parent" >
                    <FloatingLabel className="mb-3" label="Data di Nascita">
                        <Form.Control type="date" onBlur={saveParentDateOfBirth}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="user-birthplace-parent">
                    <FloatingLabel className="mb-3" label="Città di Nascita">
                        <Form.Control type="text" placeholder="Città di Nascita" onBlur={saveParentBirthplace}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <SelectProvince seveProvince={saveParentBirthplaceProvince}/>
                <Form.Group as={Col} md="4" controlId="user-fiscal-code-parent">
                    <FloatingLabel className="mb-3" label="Codice Fiscale">
                        <Form.Control type="text" value={parentFiscalCode} onChange={saveParentFiscalCode} placeholder="Codice Fiscale"/>
                    </FloatingLabel>
                </Form.Group>
                <Button style={{marginBottom:"2%"}} size="sm" variant="secondary" className="col-md-2" onClick={calculateParentFiscalCode}>Calcola</Button>
            </Row>

            <Row className="mb-3">
                <h3>Residente in:</h3>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="user-city-of-residence-parent">
                    <FloatingLabel className="mb-3" label="Città di residenza">
                        <Form.Control type="text"  placeholder="Città di residenza" onBlur={saveParentCityOfResidence}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="user-street-residence-parent">
                    <FloatingLabel className="mb-3" label="Via">
                        <Form.Control type="text"  placeholder="Via" onBlur={saveParentStreetResidence}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="user-number-residence-parent">
                    <FloatingLabel className="mb-3" label="Numero">
                        <Form.Control type="text"  placeholder="Numero" onBlur={saveParentNumberResidence}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="user-cap-residence-parent">
                    <FloatingLabel className="mb-3" label="CAP">
                        <Form.Control type="text"  placeholder="CAP" onBlur={saveParentCapResidence}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <h3>Documento Tutore:</h3>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="5" controlId="user-type-document-parent">
                    <FloatingLabel  label="Seleziona il Tipo di Documento">
                        <Form.Select aria-label="Tipo di Documento" onChange={saveParentTypeDocument} >
                            <option value="">Non Specificato</option>
                            <option value="carta d'identità">Carta d'identità</option>
                            <option value="patente">Patente</option>
                            <option value="passaporto">Passaporto</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="user-number-document-parent">
                    <FloatingLabel className="mb-3" label="Numero">
                        <Form.Control type="text"  placeholder="Numero" onBlur={saveParentNumberDocument}/>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="user-release-date-document-parent">
                    <FloatingLabel className="mb-3" label="Data di Rilascio">
                        <Form.Control type="date"  placeholder="Data di Rilascio" onChange={saveParentReleaseDateDocument}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}  controlId="user-released-document-parent">
                    <FloatingLabel className="mb-3" label="Rilasciato da">
                        <Form.Control type="text"  placeholder="Rilasciato da" onBlur={saveParentReleasedDocument}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col}  controlId="user-image-document-parent">
                    <Form.Control type="file"  placeholder="Carica Documento" onChange={saveParentImageDocument}/>
                </Form.Group>
            </Row>
        </Container>
    );
}

export default TabparentData;