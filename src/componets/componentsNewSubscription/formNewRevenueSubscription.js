import React, {useEffect, useState} from "react";
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

function FormRevenueSubscription(props){
    const [numberOfEntries,setNumberOfEntries] = useState(props.revenueSubscription.numberOfEntries);
    const [numberOfEntriesMade,setNumberOfEntriesMade] = useState(props.revenueSubscription.numberOfEntriesMade);
    const [checkNumberEntries,setCheckNumberEntries] = useState(false);
    const [checkNumberEntriesMade,setCheckNumberEntriesMade] = useState(false);


    useEffect(() => {
        if(numberOfEntriesMade>numberOfEntries){
            setCheckNumberEntriesMade(true);
        }
        else{
            setCheckNumberEntriesMade(false);
        }

    }, [numberOfEntries,numberOfEntriesMade]);

    return(
        <>
            <Row className="mb-3" style={{marginTop:"4%"}}>
                <h3>Dati Abbonamento:</h3>
            </Row>

            <Col md={8} style={{margin:"3% auto"}}>
                <Row>
                    <Form.Group as={Col} md={5} controlId="subscription-number-of-entries" style={{marginLeft:"3%"}}>
                        <FloatingLabel className="mb-3" label="Numero di entrate totali">
                            <Form.Control type="number" value={numberOfEntries} isInvalid={checkNumberEntries} placeholder="Numero di entrate totali" onChange={(e)=>{
                                if(e.target.value>=0) {
                                    setNumberOfEntries(e.target.value);
                                    props.refreshRevenueSubscription('numberOfEntries',e.target.value);
                                }
                            }}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} md={5} controlId="subscription-number-of-entries-made" style={{marginLeft:"3%"}}>
                        <FloatingLabel className="mb-3" label="Numero di entrate effettuate">
                            <Form.Control type="number" value={numberOfEntriesMade} isInvalid={checkNumberEntriesMade} placeholder="Numero di entrate effettuate" onChange={(e)=>{
                               if(e.target.value>=0){
                                   if(e.target.value<=numberOfEntries){
                                       setNumberOfEntriesMade(e.target.value);
                                       props.refreshRevenueSubscription('numberOfEntriesMade',e.target.value);
                                   }

                               }

                            }}/>
                        </FloatingLabel>
                    </Form.Group>
                </Row>

            </Col>

        </>
    );
}

export default FormRevenueSubscription;