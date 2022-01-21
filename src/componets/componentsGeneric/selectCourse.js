import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

const linkSearchCourses = "https://jsonplaceholder.typicode.com/users";

function SelectCourse() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [coursesListOption, setCoursesListOption] = React.useState([
        {
            idCourseDatabase: "",
            nameCourse: "",
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
                    idCourseDatabase: "",
                    nameCourse: "",
                };
                tempItem.nameCourse = res[i].username;
                tempItem.idCourseDatabase = res[i].id;
                tempList.push(tempItem);
            }

            setCoursesListOption(tempList);
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
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                loading={loading}

                onFocus={onChangeHandle}
                options={coursesListOption}
                getOptionLabel={(option) => option.nameCourse}
                getOptionSelected={(option, value) => option.idCourseDatabase === value.idCourseDatabase}
                onChange={(event, value) => {
                    setCourseSelected(value);
                }} // prints the selected value
                renderInput={params => (
                    <TextField
                        {...params}
                        placeholder="Nome Corso"
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

export default SelectCourse;


