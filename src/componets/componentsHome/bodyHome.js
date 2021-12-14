import React from "react";
import {Button, ButtonGroup, Card, CardGroup, Col, Container, ListGroup, Row} from "react-bootstrap";
import '../../css/bodyHome.css';
import profile_user_icon from '../../icon/profile-user.png';
import QuickLinks from "./quickLinks";



function BodyHome(){
    return (
        <>
            <Container>
                <QuickLinks/>


                <h1>Body Home</h1>
            </Container>
        </>
    );
}

export default BodyHome;

