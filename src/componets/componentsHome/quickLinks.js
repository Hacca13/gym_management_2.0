import React from "react";
import {Container, ListGroup} from "react-bootstrap";
import profile_user_icon from "../../icon/profile-user.png";
import AddUserToCourse from "../../view/addUserToCourse";

const prefixLink ="/admin";
const linkNewUser = prefixLink+'/nuovo-utente';
const linkNewTrainingCard = prefixLink+'/nuova-scheda';
const linkNewSubscriptions = prefixLink+'/nuovo-abbonamento';
const linkNewCourse = prefixLink+'/nuovo-corso';
const linkNewExercise = prefixLink+'/nuovo-esercizio';
const linkAddUserToCourse = prefixLink+'/aggiungi-un-utente-al-corso';

function QuickLinks(){
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Container>
            <ListGroup horizontal className='quick-links'>
                <ListGroup.Item variant='secondary' action href={linkNewUser} className='quick-link'>
                    <img src={profile_user_icon} style={{width:'50px',height:'50px'}}/>
                    <p style={{marginTop:'10%'}}>Nuovo Utente</p>
                </ListGroup.Item>
                <ListGroup.Item  variant='secondary' action href={linkNewTrainingCard} className='quick-link'>

                    <p style={{marginTop:'10%'}}>Nuova Scheda</p>
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action href={linkNewSubscriptions} className='quick-link'>
                    <img src={profile_user_icon} style={{width:'50px',height:'50px'}}/>
                    <p style={{marginTop:'10%'}}>Nuovo Abbonamento</p>
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action href={linkNewCourse} className='quick-link'>
                    <img src={profile_user_icon} style={{width:'50px',height:'50px'}}/>
                    <p style={{marginTop:'10%'}}>Nuovo Corso</p>
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action href={linkNewExercise} className='quick-link'>
                    <img src={profile_user_icon} style={{width:'50px',height:'50px'}}/>
                    <p style={{marginTop:'10%'}}>Nuovo Esercizio</p>
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action  onClick={() => setModalShow(true)} className='quick-link'>
                    Aggiungi un utente ad un Corso
                </ListGroup.Item>
            </ListGroup>
            <AddUserToCourse
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>

    );
}

export default QuickLinks;

