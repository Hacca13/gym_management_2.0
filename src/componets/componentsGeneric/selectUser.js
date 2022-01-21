import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

const linkSearchCourses = "https://jsonplaceholder.typicode.com/users";

function SelectUser() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [usersListOption, setUsersListOption] = React.useState([
        {
            idUserDatabase: "",
            nameAndSurnameUser: "",
        }
    ]);
    const [loading,setLoading] = useState(open && options.length === 0);
    const [courseSelected, setCourseSelected] = React.useState([]);

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

    useEffect(()=>{ console.log(courseSelected)},[courseSelected]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <>
            <Autocomplete
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
                    setCourseSelected(value);
                }} // prints the selected value
                renderInput={params => (
                    <TextField
                        {...params}
                        placeholder="Nome o Cognome"
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

export default SelectUser;

/*import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

const linkSearchCourses = "https://jsonplaceholder.typicode.com/users";

function SelectUser() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [usersListOption, setUsersListOption] = React.useState([
        {
            idUserDatabase: "",
            nameAndSurnameUser: "",
        }
    ]);
    const [loading,setLoading] = useState(open && options.length === 0);
    const [userSelected, setUserSelected] = React.useState([]);

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

    useEffect(()=>{ console.log(userSelected)},[userSelected]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <>
            <Autocomplete
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
                    setUserSelected(value);
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

export default SelectUser;

*/