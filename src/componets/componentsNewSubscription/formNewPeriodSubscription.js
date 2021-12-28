import React, {useEffect, useState} from "react";
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

function FormPeriodSubscription(props){

    const [startDateValue, setStartDateValue] = useState(props.periodSubscription.startDate);
    const [endDateValue, setEndDateValue] = useState(props.periodSubscription.endDate);
    const [numberOfMonths,setNumberOfMonths] = useState(0);
    const [checkEndDateValue,setCheckEndDateValue] = useState(false);

    useEffect(()=>{
        if(startDateValue!==""&& endDateValue !==""){
            if(startDateValue>endDateValue){
                setCheckEndDateValue(true);
                setStartDateValue("");
                props.refreshPeriodSubscription("startDate","");
                alert("La data di inizio deve essere precedente alla data di fine.");
            }
            else {
                setCheckEndDateValue(false);
            }
        }
    },[startDateValue,endDateValue]);

    const calculateEndDate = (e) => {
        if(startDateValue!==""){
            var dateForElaboration = new Date(startDateValue);
            var temp = parseInt(dateForElaboration.getMonth())+parseInt(e);
            dateForElaboration.setMonth(temp);
            var dateFinal = dateForElaboration.toISOString().substr(0,10);
            setEndDateValue(dateFinal);
            props.refreshPeriodSubscription("endDate",dateFinal);
        }
    }


    return(
        <>
            <Row className="mb-3" style={{marginTop:"4%"}}>
                <h3>Dati Abbonamento:</h3>
            </Row>
            <Col md={8} style={{margin:"3% auto"}}>
                <Row >
                    <Col md={3} style={{marginRight:"5%"}}>
                        <Form.Group as={Col} controlId="subscription-start-data">
                            <FloatingLabel className="mb-3"  label="Data Inizio">
                                <Form.Control type="date" value={startDateValue} placeholder="Data Inizio" onChange={(e) => {
                                    props.refreshPeriodSubscription("startDate",e.target.value);
                                    setStartDateValue(e.target.value);
                                }}/>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col md={3} style={{marginRight:"5%"}}>
                        <Form.Group as={Col} controlId="subscription-end-data">
                            <FloatingLabel className="mb-3" label="Data Fine">
                                <Form.Control type="date" placeholder="Data Fine" value={endDateValue} isInvalid={checkEndDateValue} onChange={(e) => {
                                    props.refreshPeriodSubscription("endDate",e.target.value);
                                    setEndDateValue(e.target.value);
                                }}/>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col >
                        <FloatingLabel className="mb-3" label="Numero di mesi">
                            <Form.Control type="number" value={numberOfMonths} placeholder="Numero di mesi" onChange={(e)=>{
                                if(e.target.value>=0){
                                    setNumberOfMonths(e.target.value);
                                    calculateEndDate(e.target.value);
                                }
                            }}/>
                        </FloatingLabel>
                    </Col>
                </Row>
            </Col>
        </>
    );
}

export default FormPeriodSubscription;