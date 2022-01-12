import React, {useEffect, useState} from "react";
import MyNavbar from "../componets/myNavbar";
import {Button, Container, Form, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import SelectUser from "../componets/componentsGeneric/selectUser";

const prefixLink ="/admin";
const linkHome = prefixLink+'/home';

function AddUserToCourse(props){
    const navigate = useNavigate();
    const [disabledSubmit,setDisabledSubmit] = useState(true);
    const [userData,setUserData] = useState();
    const [courseData,setCourseData] = useState();

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

    //test
    useEffect(()=>{console.log(userData)},[userData]);

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
                    <Modal.Body>
                        <SelectUser saveUserData={saveUserData}/>

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

/*
* <MyNavbar/>
            <div>
                <h1 className='title' style={{marginBottom:"5%"}}></h1>
                <Form onSubmit={submitAddUserToCourse}>
                    <Container>

                    </Container>
                </Form>
            </div>
*
* */