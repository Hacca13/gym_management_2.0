import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

const linkSearchCourses = "https://jsonplaceholder.typicode.com/users";

function SelectUsers() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [usersListOption, setUsersListOption] = React.useState([
        {
            idUserDatabase: "",
            nameAndSurnameUser: "",
        }
    ]);
    //const loading = open && options.length === 0;
    const [loading,setLoading] = useState(open && options.length === 0);
    const [usersListSelected, setUsersListSelected] = React.useState([]);

    const onChangeHandle = async value => {
// this default api does not support searching but if you use google maps or some other use the value and post to get back you reslut and then set it using setOptions
        console.log(value);

        const response = await fetch(linkSearchCourses).then((response) => {
            return response.json()
        }).then((res) => {
            var tempList=[];

            for (var i = 0; i < res.length; i++) {
                var tempItem = {
                    idUserDatabase: "",
                    nameAndSurnameUser: "",
                };
                tempItem.nameAndSurnameUser = res[i].username;
                tempItem.idUserDatabase = res[i].id;
                tempList.push(tempItem);
            }

            setUsersListOption(tempList);
            setLoading(false);
        });
    };



    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);


    return (
        <>
            <Autocomplete
                multiple
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                loading={loading}
                onFocus={onChangeHandle}
                options={usersListOption}
                getOptionLabel={(option) => option.nameAndSurnameUser}
                getOptionSelected={(option, value) => option.idUserDatabase === value.idUserDatabase}
                onChange={(event, value) => {
                    setUsersListSelected(value);
                }} // prints the selected value
                renderInput={params => (
                    <TextField
                        {...params}
                        placeholder="Nome o Cognome Utente"
                        variant="outlined"
                        onChange={ev => {
                            // dont fire API if the user delete or not entered anything
                            if (ev.target.value !== "" || ev.target.value !== null) {
                                onChangeHandle(ev.target.value);
                            }
                        }}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? (
                                        <CircularProgress color="inherit" size={20} />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            )
                        }}
                    />
                )}
            />
        </>
    );
}

export default SelectUsers;


/*
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
            for (var i = 0; i < res.data.length; i++) {
                usersList.push(res.data[i].employee_name);
            }
            setUserList(usersList)
        })
    }

    return(
        <>
            <Col style={{margin:"5% 2%"}}>
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
            </Col>

        </>
    );
}

export default SelectUser;
* */