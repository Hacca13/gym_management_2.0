import React, {useState} from "react";

function FormCourseSubscription(){

    const [courseList,setCourseList] = useState([
        {
            "idCourseDatabase":"991",
            "nameCourse":"Calcio"
        },
        {
            "idCourseDatabase":"992",
            "nameCourse":"Basket"
        },
        {
            "idCourseDatabase":"993",
            "nameCourse":"Tennis"
        }
    ]);

    return(
        <h1>form 3</h1>
    );
}

export default FormCourseSubscription;