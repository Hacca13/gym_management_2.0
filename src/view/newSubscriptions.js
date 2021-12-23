import React, {useEffect, useState} from "react";
import MyNavbar from "../componets/myNavbar";
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    FloatingLabel,
    Form, InputGroup,
    ListGroup,
    Row, ToggleButton,
    ToggleButtonGroup
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormPeriodSubscription from "../componets/componentsNewSubscription/formNewPeriodSubscription";
import FormRevenueSubscription from "../componets/componentsNewSubscription/formNewRevenueSubscription";
import FormCourseSubscription from "../componets/componentsNewSubscription/formNewCourseSubscription";

const prefixLink ="/admin";
const linkSubscriptionsManagement = prefixLink+'/gestione-abbonamenti';

function NewSubscriptionsPage(){
    const navigate = useNavigate();
    const [disabledSubmit, setDisabledSubmit] = useState(true);
    const [newSubscription, setNewSubscription] = useState({
        "idSubscriptionsDatabase":"",
        "idUserDatabase":"",
        "isActive":true,
        "type":"period",
        "considerTheBalanceInTheStatistics": true,
        "totalAmount": 0,
        "amountReceived":0,
        "amountIsPaid":true,
    });
    const [userData, setUserData] = useState({
        "name": "",
        "surname": "",
        "idUserDatabase": "",
    });

    const [considerTheBalanceInTheStatistics, setConsiderTheBalanceInTheStatistics] = useState(true);

    const [periodSubscription,setPeriodSubscription] = useState({
        "startDate":"",
        "endDate":"",
    });
    const [courseSubscription,setCourseSubscription] = useState({
        "idCourseDatabase":"",
        "startDate":"",
        "endDate":"",
    });
    const [revenueSubscription,setRevenueSubscription] = useState({
        "numberOfEntries": 0,
        "numberOfEntriesMade": 0,
    });

    const [typeSubscription, setTypeSubscription] = useState("period");
    const [userList,setUserList] = useState([
        {
            "name": "Giovanni",
            "surname": "Belga",
            "idUserDatabase": "001",
        },
        {
            "name": "Vincenzo",
            "surname": "Portoricano",
            "idUserDatabase": "002"
        },
        {
            "name": "Paolo",
            "surname": "Commendatore",
            "idUserDatabase": "003"
        },
    ]);



    const searchUserForSubscription = async (e) =>{
        const userListSearch = [
            {
                "name": "Giorgio",
                "surname": "Baaa",
                "idUserDatabase": "001",
            },
            {
                "name": "Vincenssssszo",
                "surname": "Portossssssricano",
                "idUserDatabase": "002"
            },
            {
                "name": "Paosssssslo",
                "surname": "Comssssmendatore",
                "idUserDatabase": "003"
            },
        ]  ;

        setUserList(userListSearch)
    };
    const checkDisabledSubmit = () =>{
        const type = typeSubscription;
        var inputIsGood = true;
        if(newSubscription.idUserDatabase.trim() ===""){
            setDisabledSubmit(true);
            inputIsGood = false;
        }
        if((type === "period")){
            if(periodSubscription.startDate.trim() === ""){
                setDisabledSubmit(true);
                inputIsGood = false;
            }
            if(periodSubscription.endDate.trim() === ""){
                setDisabledSubmit(true);
                inputIsGood = false;
            }
        }
        if((type === "revenue")){
            if(revenueSubscription.numberOfEntries <1){
                setDisabledSubmit(true);
                inputIsGood = false;
            }
            if(revenueSubscription.numberOfEntries === ""){
                setDisabledSubmit(true);
                inputIsGood = false;
            }
        }
        if((type === "course")){
            if(courseSubscription.idCourseDatabase.trim() === ""){
                setDisabledSubmit(true);
                inputIsGood = false;
            }
            if(courseSubscription.startDate.trim() === ""){
                setDisabledSubmit(true);
                inputIsGood = false;
            }
            if(courseSubscription.endDate.trim() === ""){
                setDisabledSubmit(true);
                inputIsGood = false;
            }
        }
        if (inputIsGood){
            setDisabledSubmit(false);
        }
    }
    const resetListUser = () => {
        setUserList([]);
    };

    const saveConsiderTheBalanceInTheStatistics = (e) =>{
        setConsiderTheBalanceInTheStatistics(!considerTheBalanceInTheStatistics);
    }
    useEffect(() => {
        refreshSubscription("considerTheBalanceInTheStatistics",considerTheBalanceInTheStatistics);
    }, [considerTheBalanceInTheStatistics]);

    const refreshSubscription = (dataToBeModified,dataValue) => {
        const  constNewSubscription = newSubscription;

        if(dataToBeModified === 'idUserDatabase'){
            constNewSubscription.idUserDatabase = dataValue;
        }
        if(dataToBeModified === 'isActive'){
            constNewSubscription.isActive = dataValue;
        }
        if(dataToBeModified === 'type'){
            constNewSubscription.type = dataValue;
        }
        if(dataToBeModified === 'totalAmount'){
            constNewSubscription.totalAmount = dataValue;
        }
        if(dataToBeModified === 'amountReceived'){
            constNewSubscription.amountReceived = dataValue;
        }
        if(dataToBeModified === 'considerTheBalanceInTheStatistics'){
            constNewSubscription.considerTheBalanceInTheStatistics = dataValue;
        }

        if(constNewSubscription.totalAmount === constNewSubscription.amountReceived){
            constNewSubscription.amountIsPaid = true;
        }
        else{
            constNewSubscription.amountIsPaid = false;
        }

        setNewSubscription(constNewSubscription);
        checkDisabledSubmit();
        console.log(newSubscription);
    };
    const refreshPeriodSubscription = (dataToBeModified,dataValue) => {
        const constPeriodSubscription = periodSubscription;

        if(dataToBeModified === 'startDate'){
            constPeriodSubscription.startDate = dataValue;
        }
        if(dataToBeModified === 'endDate'){
            constPeriodSubscription.endDate = dataValue;
        }
        const dateToday = new Date();
        const todayDay = dateToday.getDate();
        const todayMonth = dateToday.getMonth()+1;
        const todayYear = dateToday.getFullYear();
        const today = todayYear + "-" + todayMonth + "-" + todayDay;

        if((constPeriodSubscription.startDate.trim() !=="") && (constPeriodSubscription.endDate.trim() !=="")){
            if(today<constPeriodSubscription.startDate){
                refreshSubscription("isActive",false);
            }
            else if(today>constPeriodSubscription.endDate){
                refreshSubscription("isActive",false);
            }
            else {
                refreshSubscription("isActive",true);
            }
        }

        setPeriodSubscription(constPeriodSubscription);
        checkDisabledSubmit();
    };
    const refreshCourseSubscription = (dataToBeModified,dataValue) => {
        const constCourseSubscription = courseSubscription;

        if(dataToBeModified === 'idCourseDatabase'){
            constCourseSubscription.idCourseDatabase = dataValue;
        }
        if(dataToBeModified === 'startDate'){
            constCourseSubscription.startDate = dataValue;
        }
        if(dataToBeModified === 'endDate'){
            constCourseSubscription.endDate = dataValue;
        }
        const dateToday = new Date();
        const todayDay = dateToday.getDate();
        const todayMonth = dateToday.getMonth()+1;
        const todayYear = dateToday.getFullYear();
        const today = todayYear + "-" + todayMonth + "-" + todayDay;

        if((constCourseSubscription.startDate.trim() !=="") && (constCourseSubscription.endDate.trim() !=="")){
            if(today<constCourseSubscription.startDate){
                refreshSubscription("isActive",false);
            }
            else if(today>constCourseSubscription.endDate){
                refreshSubscription("isActive",false);
            }
            else {
                refreshSubscription("isActive",true);
            }
        }

        setCourseSubscription(constCourseSubscription);
        checkDisabledSubmit();
    };
    const refreshRevenueSubscription = (dataToBeModified,dataValue) => {
        const constRevenueSubscription = revenueSubscription;

        if(dataToBeModified === 'numberOfEntries'){
            constRevenueSubscription.numberOfEntries = dataValue;
        }
        if(dataToBeModified === 'numberOfEntriesMade'){
            constRevenueSubscription.numberOfEntriesMade = dataValue;
        }
        if(constRevenueSubscription.numberOfEntries !== 0){
            if(constRevenueSubscription.numberOfEntries === constRevenueSubscription.numberOfEntriesMade){
                refreshSubscription("isActive",false);
            }
            else {
                refreshSubscription("isActive",true);
            }
        }

        setRevenueSubscription(constRevenueSubscription);
        checkDisabledSubmit();
    };
    useEffect(() => {
        checkDisabledSubmit();
    }, [typeSubscription]);

    const submitInsertNewSubscriptions= () =>{
        console.log("submit");
         navigate(linkSubscriptionsManagement);
    };

    return(
        <>
            <MyNavbar/>
            <div>
                <h1 className='title'>Inserimento Nuovo Abbonamento</h1>
                <Form onSubmit={submitInsertNewSubscriptions}>
                    <Container>
                        <Row className="mb-3" style={{marginTop:"4%"}}>
                            <Col>
                                <h3>Utente:</h3>
                            </Col>
                            <Col >
                                <h3 style={{marginLeft:"3%"}}>Tipo di Abbonamento:</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group as={Col} controlId="subscription-user">
                                    <FloatingLabel className="mb-3" label="Nome o Cognome utente">
                                        <Form.Control type="text" value={userData.name + " " + userData.surname} placeholder="Nome o Cognome utente" onChange={searchUserForSubscription}/>
                                    </FloatingLabel>
                                </Form.Group>

                            </Col>
                            <Col style={{marginLeft:"3%"}}>
                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                    <Col md={10} style={{margin:"2% auto", display:"flex"}}>
                                        <Col style={{marginRight:"7%"}}>
                                            <ToggleButton id="tbg-radio-1" value={1} onClick={(e)=>{
                                                refreshSubscription("type","period");
                                                setTypeSubscription("period");

                                            }}>
                                                Periodeico
                                            </ToggleButton>
                                        </Col>
                                        <Col style={{marginRight:"7%"}}>
                                            <ToggleButton id="tbg-radio-2" value={2} onClick={(e)=>{
                                                refreshSubscription("type","revenue");
                                                setTypeSubscription("revenue");
                                            }}>
                                                Entrate
                                            </ToggleButton>
                                        </Col>
                                        <Col >
                                            <ToggleButton id="tbg-radio-3" value={3} onClick={(e)=>{
                                                refreshSubscription("type","course");
                                                setTypeSubscription("course");

                                            }}>
                                                Corso
                                            </ToggleButton>
                                        </Col>
                                    </Col>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3" style={{marginLeft:"0.2%"}}>
                            <Col>
                                <ListGroup style={{marginTop:"-3px",marginLeft:"-2%"}}>
                                    {userList.map((user,index) => (
                                        <ListGroup.Item as="li" id={index} action onClick={()=>{
                                            refreshSubscription("idUserDatabase",user.idUserDatabase);
                                            const tempUser = {
                                                "name": user.name,
                                                "surname": user.surname,
                                                "idUserDatabase": user.idUserDatabase,
                                            };
                                            setUserData(tempUser);
                                            resetListUser();
                                        }} >{user.name}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Col>
                            <Col>
                                <Row>
                                    <h3 style={{marginLeft:"3%",marginBottom:"4%"}}>Saldo:</h3>
                                </Row>
                                <Row >

                                    <Form.Group as={Col} md={5} controlId="subscription-total-amount" style={{marginLeft:"3%"}}>
                                        <FloatingLabel className="mb-3" label="Importo Totale">
                                            <Form.Control type="number"  placeholder="Importo Totale" onBlur={(e)=>{
                                                refreshSubscription("totalAmount",e.target.value);
                                            }}/>
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group as={Col} md={5} controlId="subscription-amount-received" style={{marginLeft:"3%"}}>
                                        <FloatingLabel className="mb-3" label="Importo Ricevuto">
                                            <Form.Control type="number"  placeholder="Importo Ricevuto" onBlur={(e)=>{
                                                refreshSubscription("amountReceived",e.target.value);
                                            }}/>
                                        </FloatingLabel>
                                    </Form.Group>

                                </Row>
                                <Row>
                                    <Form.Group as={Col}  style={{paddingTop:'2%',marginLeft:'5%'}}>
                                        <Form.Check  type="switch" checked={considerTheBalanceInTheStatistics} id="subscription-consider-the-balance-in-the-statistics" label="Considerare l'importo nelle statistiche ?" onChange={saveConsiderTheBalanceInTheStatistics}/>
                                    </Form.Group>
                                </Row>
                            </Col>

                        </Row>

                        {typeSubscription === "period" ? (<FormPeriodSubscription periodSubscription={periodSubscription} refreshPeriodSubscription={refreshPeriodSubscription}/>):""}
                        {typeSubscription === "revenue" ? (<FormRevenueSubscription refreshRevenueSubscription={refreshRevenueSubscription}/>):""}
                        {typeSubscription === "course" ? (<FormCourseSubscription courseSubscription={courseSubscription} refreshCourseSubscription={refreshCourseSubscription}/>):""}

                        <div style={{float:'right', marginTop: '2%', marginBottom:"3%"}}>
                            <Button variant="primary" type="submit" disabled={disabledSubmit}>
                                Aggiungi Abbonamento
                            </Button>
                        </div>
                    </Container>
                </Form>
            </div>
        </>
    );
}

export default NewSubscriptionsPage;
