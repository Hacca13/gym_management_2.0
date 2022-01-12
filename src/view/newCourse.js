import React, {useCallback, useEffect, useState} from "react";
import MyNavbar from "../componets/myNavbar";
import {Button, Card, CardGroup, CloseButton, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import WeeklyFrequencyCard from "../componets/componentsNewCourse/weeklyFrequencyCard";

const prefixLink ="/admin";
const linkCourseManagement = prefixLink+'/gestione-corsi';

function NewCoursePage(){
    const [newCourse,setNewCourse] = useState();
    const navigate = useNavigate();

    const [nameCourse,setNameCourse] = useState("");
    const [nameInstructor,setNameInstructor] = useState("");
    const [startDateValue,setStartDateValue] = useState("");
    const [endDateValue,setEndDateValue] = useState("");

    const [counterID,setCounterID] = useState(0);
    const [checkEndDateValue,setCheckEndDateValue] = useState(false);
    const [disabledSubmit, setDisabledSubmit] = useState(true);
    const [cardList,setCardList] = useState([]);

    const saveNameCourse = (e) =>{
        setNameCourse(e.target.value);
    }
    const saveInstructorNameCourse = (e) =>{
        setNameInstructor(e.target.value);
    }
    const saveStartDateValue = (e) =>{
        setStartDateValue(e.target.value);
    }
    const saveEndDateValue = (e) =>{
        setEndDateValue(e.target.value);
    }



    const saveStartTime = (e,idx) =>{
        const tempListCard = [...cardList];
        tempListCard[idx].startTime = e;
        setCardList(tempListCard);
    }
    const saveEndTime = (e,idx) =>{
        const tempListCard = [...cardList];
        tempListCard[idx].endTime = e;
        setCardList(tempListCard);
    }

    const saveDayOfWeek = (e,idx) =>{
        const tempListCard = [...cardList];
        tempListCard[idx].dayOfWeek = e;
        setCardList(tempListCard);
    }




    const addCardIntolist = () => {
        var tempListCard = [...cardList];
        var lastStartTime = "";
        var lastEndTime = "";

        if(cardList.length !== 0){
            var lengthArr = cardList.length-1;
            lastStartTime = tempListCard[lengthArr].startTime;
            lastEndTime = tempListCard[lengthArr].endTime;
        }

        tempListCard.push(
           {"idCard":counterID,"dayOfWeek":"", "startTime":lastStartTime, "endTime":lastEndTime}
        );
        setCounterID(counterID+1);
        setCardList(tempListCard);

    }
    useEffect(()=>{
        console.log(cardList);
    },[cardList]);


    const removeCardIntoList = (idx) => {
        const tempListCard = [...cardList];
        tempListCard.splice(idx,1);
        console.log(tempListCard);

        setCardList(tempListCard);
    }



    /*Check Date*/
    useEffect(()=>{
        if((startDateValue !== "") && (endDateValue !== "")){
            if(startDateValue>endDateValue){
                setCheckEndDateValue(true);
                setEndDateValue("");
                alert("La data di inizio deve essere precedente alla data di fine.");
            }
            else{
                setCheckEndDateValue(false);
            }
        }
    },[startDateValue,endDateValue]);

    useEffect(()=>{
        if((startDateValue !== "") && (endDateValue !== "") && (nameCourse !== "")){

            setDisabledSubmit(false);
        }
        else{
            setDisabledSubmit(true);
        }

    },[nameCourse,startDateValue,endDateValue]);

    const submitInsertNewCourse = () =>{
        navigate(linkCourseManagement);
    }




    return (
        <>
            <MyNavbar/>
            <div>
                <h1 className='title' style={{marginBottom:"3%"}}>Inserimento Nuovo Corso</h1>
                <Form onSubmit={submitInsertNewCourse}>
                    <Container>
                        <Row>
                            <Col>
                                <Form.Group as={Col} controlId="course-name">
                                    <FloatingLabel className="mb-3" label="Nome del Corso">
                                        <Form.Control type="text" value={nameCourse} placeholder="Nome del Corso" onChange={saveNameCourse}/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="course-name-instructor">
                                    <FloatingLabel className="mb-3" label="Nome dell'istruttore">
                                        <Form.Control type="text" value={nameInstructor} placeholder="Nome dell'istruttore" onChange={saveInstructorNameCourse}/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group as={Col} controlId="course-start-data">
                                    <FloatingLabel className="mb-3"  label="Data Inizio">
                                        <Form.Control type="date" value={startDateValue} placeholder="Data Inizio" onChange={(e) => {
                                            saveStartDateValue(e);
                                        }}/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group as={Col} controlId="course-end-data">
                                    <FloatingLabel className="mb-3" label="Data Fine">
                                        <Form.Control type="date" placeholder="Data Fine" value={endDateValue} isInvalid={checkEndDateValue} onChange={(e) => {
                                            if(e.target.value>=startDateValue){
                                                saveEndDateValue(e);
                                            }else{
                                                alert("La data di inizio deve essere precedente alla data di fine.");
                                            }

                                        }}/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <h3 style={{margin:"2% 1%"}}>Frequenza settimanale:</h3>
                            </Col>

                        </Row>


                        <Row  xs={1} md={2} >
                            {Array.from(cardList).map((card, idx) => (
                                <Col md={3} id={"course-card-"+idx}>
                                    <WeeklyFrequencyCard key={card.idCard} removeCardIntoList={removeCardIntoList} saveEndTime={saveEndTime} saveStartTime={saveStartTime} saveDayOfWeek={saveDayOfWeek} dayOfWeek={card.dayOfWeek} startTime={card.startTime} endTime={card.endTime} idxOfCard={idx}/>
                                </Col>
                            ))}



                            <Col md={3}>
                                <Card  style={{margin:"3%"}} id={"course-add-card"}>
                                    <Card.Body>
                                            <center >
                                                <Button variant="primary" onClick={addCardIntolist}>Aggiungi Giorno</Button>
                                            </center>
                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>




                        <div style={{float:'right', marginTop: '2%', marginBottom:"3%"}}>
                            <Button variant="primary" type="submit" disabled={disabledSubmit}>
                                Aggiungi Corso
                            </Button>
                        </div>


                    </Container>
                </Form>
            </div>

        </>
    );
}

export default NewCoursePage;



