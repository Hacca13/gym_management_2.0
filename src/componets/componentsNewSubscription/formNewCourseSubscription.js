import React, {useEffect, useState} from "react";
import {Col, FloatingLabel, Form, ListGroup, Row} from "react-bootstrap";
import SelectCourse from "../componentsGeneric/selectCourse";
import SelectCourses from "../componentsGeneric/selectCourses";

function FormCourseSubscription(props){

    const [startDateValue, setStartDateValue] = useState(props.courseSubscription.startDate);
    const [endDateValue, setEndDateValue] = useState(props.courseSubscription.endDate);
    const [corseData,setCorseData] = useState("");

    const [checkEndDateValue,setCheckEndDateValue] = useState(false);

    const [courseList,setCourseList] = useState([

    ]);
    const searchCourseForSubscription = () => {

    }
    const resetListCourse = () => {
        setCourseList([]);
    }


    useEffect(()=>{
        if(startDateValue!==""&& endDateValue !==""){
            if(startDateValue>endDateValue){
                setCheckEndDateValue(true);
                setStartDateValue("");
                props.refreshCourseSubscription("startDate","");
                alert("La data di inizio deve essere precedente alla data di fine.");
            }
            else {
                setCheckEndDateValue(false);
            }
        }
    },[startDateValue,endDateValue]);

    return(
        <>
            <Row className="mb-3" style={{marginTop:"4%"}}>
                <h3>Dati Abbonamento:</h3>
            </Row>
            <Col md={8} style={{margin:"3% auto"}}>
                <Row>

                    <SelectCourses/>
                </Row>
                <Row style={{marginTop: "2%"}}>
                    <Col style={{marginRight:"5%"}}>
                        <Form.Group as={Col} controlId="subscription-course-start-data">
                            <FloatingLabel className="mb-3"  label="Data Inizio">
                                <Form.Control type="date" value={startDateValue} placeholder="Data Inizio" onChange={(e) => {
                                    props.refreshCourseSubscription("startDate",e.target.value);
                                    setStartDateValue(e.target.value);
                                }}/>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="subscription-course-end-data">
                            <FloatingLabel className="mb-3" label="Data Fine">
                                <Form.Control type="date" placeholder="Data Fine" isInvalid={checkEndDateValue} value={endDateValue} onChange={(e) => {
                                    props.refreshCourseSubscription("endDate",e.target.value);
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

export default FormCourseSubscription;