import React, {useEffect, useState} from "react";
import MyNavbar from "../componets/myNavbar";
import {Button, Col, Container, Form, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import SelectCourse from "../componets/componentsGeneric/selectCourse";
import SelectUsers from "../componets/componentsGeneric/selectUsers";


const prefixLink ="/admin";
const linkHome = prefixLink+'/home';

function AddUserToCourse(props){
    const navigate = useNavigate();
    const [disabledSubmit,setDisabledSubmit] = useState(true);
    const [userData,setUserData] = useState("");
    const [courseData,setCourseData] = useState("");

    useEffect(()=>{
        if((userData.trim !== "") && (courseData.trim !== "")){
            setDisabledSubmit(false);
        }
        else{
            setDisabledSubmit(true);
        }
    },[userData,courseData]);

    const submitAddUserToCourse = () =>{


    }
    const saveUserData = (e) =>{
        setUserData(e);
    }
    const saveCourseData = (e) =>{
        setCourseData(e);
    }

    //test
    useEffect(()=>{console.log(courseData)},[courseData]);

    return(
        <>
            <Form>
                <Modal
                    {...props}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Aggiungi un Utente ad un Corso
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <h5 style={{margin:"5% 0%"}}>Seleziona Utenti:</h5>
                        <SelectUsers/>
                        <h5 style={{margin:"5% 0%"}}>Seleziona Corso:</h5>
                        <SelectCourse/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" disabled={disabledSubmit} onClick={props.onHide}>
                            Aggungi utente
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    );

}

export default AddUserToCourse;
