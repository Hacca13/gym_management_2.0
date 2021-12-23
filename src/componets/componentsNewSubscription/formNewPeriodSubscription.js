import React, {useState} from "react";
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

function FormPeriodSubscription(props){

    const [startDateValue, setStartDateValue] = useState(props.periodSubscription.startDate);
    const [endDateValue, setEndDateValue] = useState(props.periodSubscription.endDate);

    return(
        <>
            <Row className="mb-3" style={{marginTop:"4%"}}>
                    <h3>Dati Abbonamento:</h3>
            </Row>
            <Col md={8} style={{margin:"3% auto"}}>
                <Row >
                <Col style={{marginRight:"5%"}}>
                    <Form.Group as={Col} controlId="subscription-start-data">
                        <FloatingLabel className="mb-3"  label="Data Inizio">
                            <Form.Control type="date" value={startDateValue} placeholder="Data Inizio" onChange={(e) => {
                                props.refreshPeriodSubscription("startDate",e.target.value);
                                setStartDateValue(e.target.value);
                            }}/>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="subscription-end-data">
                        <FloatingLabel className="mb-3" label="Data Fine">
                            <Form.Control type="date" placeholder="Data Fine" value={endDateValue} onChange={(e) => {
                                props.refreshPeriodSubscription("endDate",e.target.value);
                                setEndDateValue(e.target.value);
                            }}/>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            </Col>
        </>
    );
}

export default FormPeriodSubscription;