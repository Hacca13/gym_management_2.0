import React, { useState} from "react";
import {Card, CloseButton, Col, FloatingLabel, Form} from "react-bootstrap";


function WeeklyFrequencyCard(props){
    const [dayOfWeek,setDayOfWeek] = useState(props.dayOfWeek);
    const [startTime,setStartTime] = useState(props.startTime);
    const [endTime,setEndTime] = useState(props.endTime);
    const [idxOfCard, setIdxOfCard] = useState(props.idxOfCard);

    return (

        <Card id={"course-card-"+idxOfCard+"-"+Date.now()} style={{marginTop:"3%"}} >
            <Card.Body>
                <div style={{marginTop:"3%",marginLeft:"3%"}}>
                    <CloseButton id={"subscription-delete-card-"+idxOfCard} onClick={()=>{
                        props.removeCardIntoList(idxOfCard)
                    }}/>
                </div>
                <Card.Text as={'span'}>

                    <Form.Group as={Col} id={"subscription-day-of-week-"+idxOfCard}>
                        <FloatingLabel  className="mb-3" label="Giorno">
                            <Form.Select aria-label="Giorno" value={dayOfWeek} onChange={(e)=>{
                                props.saveDayOfWeek(e.target.value,idxOfCard);
                                setDayOfWeek(e.target.value);
                            }}>
                                <option value="">Non Specificato</option>
                                <option value="0">Lunedì</option>
                                <option value="1">Martedì</option>
                                <option value="2">Mercoledì</option>
                                <option value="3">Giovedì</option>
                                <option value="4">Venerdì</option>
                                <option value="5">Sabato</option>
                                <option value="6">Domenica</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} id={"subscription-start-time-"+idxOfCard}>
                        <FloatingLabel className="mb-3" label="Ora inizio">
                            <Form.Control type="time" value={startTime} onChange={(e)=>{
                                props.saveStartTime(e.target.value,idxOfCard);
                                setStartTime(e.target.value);
                            }}/>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} id={"subscription-end-time-"+idxOfCard}>
                        <FloatingLabel className="mb-3" label="Data Fine">
                            <Form.Control type="time" value={endTime} onChange={(e)=>{
                                props.saveEndTime(e.target.value,idxOfCard);
                                setEndTime(e.target.value);
                            }}/>
                        </FloatingLabel>
                    </Form.Group>
                </Card.Text>
            </Card.Body>
        </Card>

    );
}

export default WeeklyFrequencyCard;
