import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./view/home";
import MyLoader from "./componets/myLoader";
import PageNotFound from "./view/404";
import NewUserPage from "./view/newUser";
import NewSubscriptionsPage from "./view/newSubscriptions";
import NewCoursePage from "./view/newCourse";
import NewExercisePage from "./view/newExercise";
import ModificationExercisePage from "./view/modificationExercise";
import AddUserToCourse from "./view/addUserToCourse";

const prefixLink ="/admin";
const linkHome = prefixLink+'/home';
const linkNewUser = prefixLink+'/nuovo-utente';
const linkNewTrainingCard = prefixLink+'/nuova-scheda';
const linkNewSubscriptions = prefixLink+'/nuovo-abbonamento';
const linkNewCourse = prefixLink+'/nuovo-corso';
const linkNewExercise = prefixLink+'/nuovo-esercizio';
const linkAddUserToCourse = prefixLink+'/aggiungi-un-utente-al-corso';
const linkModificationExercise = prefixLink+'/modifica-esercizio/:idExercise';

function App() {


    return (
        <Router>
            <Suspense fallback={<MyLoader/>}>
                <Routes>
                    <Route exact path={prefixLink} element={<Home/>}/>
                    <Route exact path={linkHome} element={<Home/>}/>
                    <Route exact path={linkNewUser} element={<NewUserPage/>}/>

                    <Route exact path={linkNewSubscriptions} element={<NewSubscriptionsPage/>}/>
                    <Route exact path={linkNewCourse} element={<NewCoursePage/>}/>
                    <Route exact path={linkNewExercise} element={<NewExercisePage nameExercise={""} imageExercise={""} secondaryMusclesSelected={[]} primaryMusclesSelected={[]} isTheExerciseTime={false} linkExercise={""} descriptionExercise={""}/>}/>
                    <Route exact path={linkAddUserToCourse} element={<AddUserToCourse />} />


                    <Route path="*" element={<PageNotFound/>}/>


                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
