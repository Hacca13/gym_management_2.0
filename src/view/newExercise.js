import React, {useEffect, useState} from "react";
import MyNavbar from "../componets/myNavbar";
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {MultiSelect} from "react-multi-select-component";

const prefixLink ="/admin";
const linkExerciseManagement = prefixLink+'/gestione-esercizi';

var muscleOptions = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
];
var muscleSecondOptions = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
];



function NewExercisePage(props){

    const navigate = useNavigate();
    const [disabledSubmit,setDisabledSubmit] = useState(true);
    const [nameExercise,setNameExercise] = useState(props.nameExercise);
    const [imageExercise,setImageExercise] = useState(props.imageExercise);
    const [isTheExerciseTime,setIsTheExerciseTime] = useState(props.isTheExerciseTime);
    const [linkExercise,setLinkExercise] = useState(props.linkExercise);

    const [oldImageExercise,setOldImageExercise] = useState(props.imageExercise);

    const [primaryMusclesSelected, setPrimaryMusclesSelected] = useState(props.primaryMusclesSelected);
    const [secondaryMusclesSelected, setSecondaryMusclesSelected] = useState(props.secondaryMusclesSelected);
    const [descriptionExercise,setDescriptionExercise] = useState(props.descriptionExercise);


    const saveNameExercise = (e) => {
        setNameExercise(e.target.value);
    }
    const saveLinkExercise = (e)=>{
        setLinkExercise(e.target.value);
    }
    const saveImageExercise = (e) =>{
        setImageExercise(e.target.value);
    }
    const saveIsTheExerciseTime = () => {
        setIsTheExerciseTime(!isTheExerciseTime);
    }
    const saveDescriptionExercise = (e) => {
        setDescriptionExercise(e.target.value);
    }


    useEffect(()=>{
        for(var j=0;j<muscleOptions.length;j++){
            muscleOptions[j].disabled = false;
        }
        for(var i=0;i<secondaryMusclesSelected.length;i++){
            for(var j=0;j<muscleOptions.length;j++){
                if(secondaryMusclesSelected[i].label === muscleOptions[j].label){
                    muscleOptions[j].disabled = true;
                }
            }
        }
    },[secondaryMusclesSelected]);

    useEffect(()=>{
        for(var j=0;j<muscleSecondOptions.length;j++){
            muscleSecondOptions[j].disabled = false;
        }
        for(var i=0;i<primaryMusclesSelected.length;i++){
            for(var j=0;j<muscleSecondOptions.length;j++){
                if(primaryMusclesSelected[i].label === muscleSecondOptions[j].label){
                    muscleSecondOptions[j].disabled = true;
                }
            }
        }
        console.log(primaryMusclesSelected)
    },[primaryMusclesSelected]);

    useEffect(()=>{
        if(nameExercise.trim() !== ""){
            setDisabledSubmit(false);
        }
        else{
            setDisabledSubmit(true);
        }
    },[nameExercise]);

    const submitInsertNewExercise = () => {
        if (oldImageExercise !== imageExercise) {
            // elimina la vecchia immagine
        }

        navigate(linkExerciseManagement);
    }

    return(
        <>
            <MyNavbar/>
            <div>
                <h1 className='title' style={{marginBottom:"5%"}}>Inserimento Nuovo Esercizio</h1>
                <Form onSubmit={submitInsertNewExercise}>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <Form.Group as={Col}  controlId="exercise-name">
                                    <FloatingLabel className="mb-3" label="Nome dell'esercizio">
                                        <Form.Control type="text" value={nameExercise} placeholder="Nome dell'esercizio" onChange={saveNameExercise}/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group as={Col}  controlId="exercise-link">
                                    <FloatingLabel className="mb-3" label="Link video esercizio">
                                        <Form.Control type="text" value={linkExercise} placeholder="Link video esercizio" onChange={saveLinkExercise}/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row>
                            <Col md={8}>
                                <Form.Group as={Col} controlId="exercise-image">
                                    <Form.Label>Carica un immagine dell'esercizio</Form.Label>
                                    <Form.Control type="file" value={imageExercise} placeholder="Carica un immagine dell'esercizio" onChange={saveImageExercise}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col}  style={{margin:"10% 2%"}}>
                                    <Form.Check  type="switch" value={isTheExerciseTime} id="exercise-is-it-on-time" label="L'esercizio è a tempo?" onChange={saveIsTheExerciseTime}/>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row style={{marginTop:"3%"}}>
                            <Form.Group as={Col} controlId="exercise-primary-muscles">
                                <h5>Muscoli primari coinvolti nell'esercizio:</h5>

                                <MultiSelect options={muscleOptions} value={primaryMusclesSelected}  labelledBy="Seleziona i gruppi muscolari" onChange={setPrimaryMusclesSelected}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="exercise-secondary-muscles">
                                <h5>Muscoli secondari coinvolti nell'esercizio:</h5>
                                <MultiSelect options={muscleSecondOptions} value={secondaryMusclesSelected} labelledBy="Seleziona i gruppi muscolari" onChange={setSecondaryMusclesSelected}/>
                            </Form.Group>
                        </Row>
                        <Row style={{marginTop:"2%"}}>
                            <Form.Group className="mb-3" controlId="exercise-description">
                                <h3>Descrizione dell'esercizio:</h3>
                                <Form.Control as="textarea" rows={3} value={descriptionExercise} onChange={saveDescriptionExercise}/>
                            </Form.Group>
                        </Row>




                        <div style={{float:'right', marginTop: '2%', marginBottom:"3%"}}>
                            <Button variant="primary" type="submit" disabled={disabledSubmit}>
                                Aggiungi Esercizio
                            </Button>
                        </div>
                    </Container>
                </Form>
            </div>
        </>
    );
}

export default NewExercisePage;