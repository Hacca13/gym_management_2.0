import React, {useState} from "react";
import {Col, FloatingLabel, Form} from "react-bootstrap";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";

const linkSearchUser = "http://dummy.restapiexample.com/api/v1/employees";

function SelectUser(props){
    const [usersList, setUserList] = useState([]);


    const getDataFromAPI = () => {


        fetch(linkSearchUser).then((response) => {
            return response.json()
        }).then((res) => {
            console.log(res.data)
            for (var i = 0; i < res.data.length; i++) {
                usersList.push(res.data[i].employee_name);
            }
            setUserList(usersList)
        })
    }

    return(
        <>
                <h5 style={{marginBottom:"5%"}}>Nome o Cognome dell'Utente:</h5>
                <Autocomplete
                    onChange={(event, newValue) => {
                        props.saveUserData(newValue);
                    }}
                    freeSolo
                    autoComplete
                    autoHighlight
                    options={usersList}
                    renderInput={(params) => (
                        <TextField {...params}
                                   onChange={getDataFromAPI}
                                   variant="outlined"
                                   placeholder="Nome o Cognome dell'Utente"

                        />
                    )}
                />
        </>
    );
}

export default SelectUser;
/*
*
*
* */