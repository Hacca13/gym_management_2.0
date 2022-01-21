// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import React, {useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

const linkSearchCourses = "https://jsonplaceholder.typicode.com/users";

function TestSelectCourse() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [courseListOption, setCourseListOption] = React.useState([
        {
            idCourseDatabase: "",
            nameCourse: "",
        }
    ]);
    const loading = open && options.length === 0;


    const onChangeHandle = async value => {
// this default api does not support searching but if you use google maps or some other use the value and post to get back you reslut and then set it using setOptions
        console.log(value);

        const response = await fetch(linkSearchCourses).then((response) => {
            return response.json()
        }).then((res) => {
            var tempList=[];

            for (var i = 0; i < res.length; i++) {
                var tempItem = {
                    idCourseDatabase: "",
                    nameCourse: "",
                };
                tempItem.nameCourse = res[i].username;
                tempItem.idCourseDatabase = res[i].id;
                tempList.push(tempItem);
            }

            setCourseListOption(tempList);

        });
    };

    useEffect(()=>{ console.log(courseListOption)},[courseListOption]);

    React.useEffect(() => {
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
                options={courseListOption}
                getOptionLabel={(option) => option.nameCourse}
                getOptionSelected={(option, value) => option.idCourseDatabase === value.idCourseDatabase}
                onChange={(event, value) => {
                    console.log(value);

                }} // prints the selected value
                renderInput={params => (
                    <TextField
                        {...params}
                        placeholder="Nome Del Corso"
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

export default TestSelectCourse;

/*
*<Autocomplete
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.employee_name === value.employee_name}
            getOptionLabel={option => option.employee_name}
            options={options}
            loading={loading}
            renderInput={params => (
                <TextField
                    {...params}
                    placeholder="Asynchronous"
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
*
* */