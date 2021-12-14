import React from "react";
import {Container, ListGroup} from "react-bootstrap";
import profile_user_icon from "../../icon/profile-user.png";

const linkNewUser = '/nuovo-utente';
const linkNewTrainingCard = '/nuova-scheda';
const linkNewSubscriptions = '/nuovo-abbonamento';
const linkNewCourse = '/nuova-corso';
const linkNewExercise = '/nuovo-esercizio';
const linkAddUserToCourse = '/aggiungi-un-utente-al-corso';

function QuickLinks(){
    return (
        <Container>
            <ListGroup horizontal className='quick-links'>
                <ListGroup.Item variant='secondary' action href={linkNewUser} className='quick-link'>
                    <img src={profile_user_icon} style={{width:'50px',height:'50px'}}/>
                    <p style={{marginTop:'10%'}}>Nuovo Utente</p>
                </ListGroup.Item>
                <ListGroup.Item  variant='secondary' action href={linkNewTrainingCard} className='quick-link'>
                    Nuova Scheda
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action href={linkNewSubscriptions} className='quick-link'>
                    Nuovo Abbonamento
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

