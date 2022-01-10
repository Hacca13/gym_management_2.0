import React from "react";
import {Container, ListGroup} from "react-bootstrap";
import profile_user_icon from "../../icon/profile-user.png";

const prefixLink ="/admin";
const linkNewUser = prefixLink+'/nuovo-utente';
const linkNewTrainingCard = prefixLink+'/nuova-scheda';
const linkNewSubscriptions = prefixLink+'/nuovo-abbonamento';
const linkNewCourse = prefixLink+'/nuovo-corso';
const linkNewExercise = prefixLink+'/nuovo-esercizio';
const linkAddUserToCourse = prefixLink+'/aggiungi-un-utente-al-corso';

function QuickLinks(){
    return (
        <Container>
            <ListGroup horizontal className='quick-links'>
                <ListGroup.Item variant='secondary' action href={linkNewUser} className='quick-link'>
                    <img src={profile_user_icon} style={{width:'50px',height:'50px'}}/>
                    <p style={{marginTop:'10%'}}>Nuovo Utente</p>
                </ListGroup.Item>
                <ListGroup.Item  variant='secondary' action href={linkNewTrainingCard} className='quick-link'>
                    <img src={profile_user_icon} style={{width:'50px',height:'50px'}}/>
                    <p style={{marginTop:'10%'}}>Nuova Scheda</p>
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action href={linkNewSubscriptions} className='quick-link'>
                    <img src={profile_user_icon} style={{width:'50px',height:'50px'}}/>
                    <p style={{marginTop:'10%'}}>Nuovo Abbonamento</p>
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action href={linkNewCourse} className='quick-link'>
                    Nuovo Corso
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action href={linkNewExercise} className='quick-link'>
                    Nuovo Esercizio
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action href={linkAddUserToCourse} className='quick-link'>
                    Aggiungi un utente ad un Corso
                </ListGroup.Item>
            </ListGroup>
        </Container>

    );
}

export default QuickLinks;

