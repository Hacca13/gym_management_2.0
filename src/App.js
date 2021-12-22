import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./view/home";
import MyLoader from "./componets/myLoader";
import PageNotFound from "./view/404";
import NewUserPage from "./view/newUser";

const prefixLink ="/admin";
const linkHome = prefixLink+'/home';
const linkNewUser = prefixLink+'/nuovo-utente';
const linkNewTrainingCard = prefixLink+'/nuova-scheda';
const linkNewSubscriptions = prefixLink+'/nuovo-abbonamento';
const linkNewCourse = prefixLink+'/nuova-corso';
const linkNewExercise = prefixLink+'/nuovo-esercizio';
const linkAddUserToCourse = prefixLink+'/aggiungi-un-utente-al-corso';

function App() {
    return (
        <Router>
            <Suspense fallback={<MyLoader/>}>
                <Routes>
                    <Route exact path={prefixLink} element={<Home/>}/>
                    <Route exact path={linkHome} element={<Home/>}/>
                    <Route exact path={linkNewUser} element={<NewUserPage/>}/>
                    <Route path="*" element={<PageNotFound/>}/>


                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
