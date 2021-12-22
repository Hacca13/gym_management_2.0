import React, {useEffect, useState} from "react";
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";


function TabPlicometricData(props){

    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [imc,setImc] = useState("");
    const [hypertrophy, setHypertrophy] = useState(false);
    const [slimming, setSlimming] = useState(false);
    const [toning, setToning] = useState(false);
    const [athleticTraining, setAthleticTraining] = useState(false);
    const [rehabilitation, setRehabilitation] = useState(false);
    const [combatSports, setCombatSports] = useState(false);

    const saveWeight = (e) =>{
        if(e.target.value >-1){

            if(e.target.value === 0){
                setWeight("");
            }
            else{
                setWeight(e.target.value);
                props.refreshPlicometricData("weight",e.target.value);
                if(height !== ""){
                    const tempImc = calculateImc(e.target.value,height);
                    setImc(tempImc);
                    props.refreshPlicometricData("imc",tempImc);
                }
            }
        }
        else{
            alert("Il valore non può andare sotto lo zero.");
        }
    }
    const saveHeight = (e) =>{
        if(e.target.value >-1){

            if(e.target.value === 0){
                setHeight("");
            }
            else{
                setHeight(e.target.value);
                props.refreshPlicometricData("height",e.target.value);
                if(weight !== ""){
                    const tempImc = calculateImc(weight,e.target.value);
                    setImc(tempImc);
                    props.refreshPlicometricData("imc",tempImc);
                }
            }
        }
        else{
            alert("Il valore non può andare sotto lo zero.");
        }
    }
    const saveHypertrophy = () =>{
        setHypertrophy(!hypertrophy);
    }
    useEffect(() => {
        props.refreshPlicometricData("hypertrophy",hypertrophy);
    }, [hypertrophy]);
    const saveSlimming = () =>{
        setSlimming(!slimming);
    }
    useEffect(() => {
        props.refreshPlicometricData("slimming",slimming);
    }, [slimming]);
    const saveToning = () =>{
        setToning(!toning);
    }
    useEffect(() => {
        props.refreshPlicometricData("toning",toning);
    }, [toning]);
    const saveAthleticTraining = () =>{
        setAthleticTraining(!athleticTraining);
    }
    useEffect(() => {
        props.refreshPlicometricData("athleticTraining",athleticTraining);
    }, [athleticTraining]);
    const saveRehabilitation = () =>{
        setRehabilitation(!rehabilitation);
    }
    useEffect(() => {
        props.refreshPlicometricData("rehabilitation",rehabilitation);
    }, [rehabilitation]);
    const saveCombatSports = (e) =>{
        setCombatSports(!combatSports);
    }
    useEffect(() => {
        props.refreshPlicometricData("combatSports",combatSports);
    }, [combatSports]);

    const saveOtherGoals = (e) => {
        props.refreshPlicometricData("otherGoals",e.target.value);
    }
    const savePreviousSport = (e) => {
        props.refreshPlicometricData("previousSport",e.target.value);
    }
    const savePreviousSportTime = (e) => {
        props.refreshPlicometricData("previousSportTime",e.target.value);
    }
    const saveInactiveTime = (e) => {
        props.refreshPlicometricData("inactiveTime",e.target.value);
    }
    const savePlicometricData = (e) => {
        props.refreshPlicometricData("plicometricData",e.target.value);
    }
    const saveImportantInformation = (e) => {
        props.refreshPlicometricData("importantInformation",e.target.value);
    }

    const calculateImc = (weightData, heightData) =>{
        const heightMeter = heightData/100;
        const result = weightData/(heightMeter*heightMeter);
        return result.toFixed(2);
    }

    return(
        <Container>
            <Row className="mb-3">
                <h3>Dati Pliconometrici:</h3>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="user-plicometric-weight">
                    <FloatingLabel className="mb-3" label="Peso (kg)">
                        <Form.Control type="number"  placeholder="Peso (kg)" onChange={saveWeight}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="user-plicometric-height">
                    <FloatingLabel className="mb-3" label="Altezza (cm)">
                        <Form.Control type="number" placeholder="Altezza (cm)" onChange={saveHeight}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} controlId="user-plicometric-imc">
                    <FloatingLabel className="mb-3" label="IMC">
                        <Form.Control type="number" value={imc} disabled placeholder="IMC" />
                    </FloatingLabel>
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <h3>Obiettivi:</h3>
            </Row>
            <Row className="mb-3">
                <Row>
                    <Form.Group as={Col}  style={{paddingTop:'2%',marginLeft:'5%'}}>
                        <Form.Check  type="switch" id="user-plicometric-hypertrophy" label="Ipertrofia" onChange={saveHypertrophy}/>
                    </Form.Group>
                    <Form.Group as={Col}  style={{paddingTop:'2%',marginLeft:'5%'}}>
                        <Form.Check  type="switch" id="user-plicometric-slimming" label="Dimagrimento" onChange={saveSlimming}/>
                    </Form.Group>
                    <Form.Group as={Col}  style={{paddingTop:'2%',marginLeft:'5%'}}>
                        <Form.Check  type="switch" id="user-plicometric-toning" label="Tonificazione" onChange={saveToning}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}  style={{paddingTop:'2%',marginLeft:'5%'}}>
                    <Form.Check  type="switch" id="user-plicometric-athletic-training" label="Allenamento Atletico" onChange={saveAthleticTraining}/>
                </Form.Group>
                    <Form.Group as={Col}  style={{paddingTop:'2%',marginLeft:'5%'}}>
                        <Form.Check  type="switch" id="user-plicometric-rehabilitation" label="Riabilitazione" onChange={saveRehabilitation}/>
                    </Form.Group>
                    <Form.Group as={Col}  style={{paddingTop:'2%',marginLeft:'5%'}}>
                        <Form.Check  type="switch" id="user-plicometric-combat-sports" label="Sport di Combattimento" onChange={saveCombatSports}/>
                    </Form.Group>
                </Row>
            </Row>
            <Row className="mb-3" style={{marginTop:"2%"}}>
                <Form.Group as={Col}  controlId="user-plicometric-other-goals">
                    <FloatingLabel className="mb-3" label="Altri Obiettivi">
                        <Form.Control type="text" placeholder="Altri Obiettivi" onBlur={saveOtherGoals}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <h3>Sport praticati precedentemente:</h3>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="8" controlId="user-plicometric-previous-sport">
                    <FloatingLabel className="mb-3" label="Sport praticati precedentemente">
                        <Form.Control type="text" placeholder="Sport praticati precedentemente" onBlur={savePreviousSport}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="user-plicometric-previous-sport-time">
                    <FloatingLabel className="mb-3" label="Per quanto tempo">
                        <Form.Control type="text" placeholder="Per quanto tempo" onBlur={savePreviousSportTime} />
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="user-plicometric-inactive-time">
                    <FloatingLabel className="mb-3" label="Da quanto tempo è inattivo">
                        <Form.Control type="text" placeholder="Da quanto tempo è inattivo" onBlur={saveInactiveTime}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md="8" controlId="user-plicometric-plicometric-data">
                    <FloatingLabel className="mb-3" label="Dati Pliconometrici">
                        <Form.Control type="text" placeholder="Dati Pliconometrici" onBlur={savePlicometricData}/>
                    </FloatingLabel>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="user-plicometric-important-information">
                    <Form.Label>Informazioni importanti</Form.Label>
                    <Form.Control as="textarea" rows={2}  onBlur={saveImportantInformation}/>
                </Form.Group>
            </Row>
        </Container>
    );
}

export default TabPlicometricData;
