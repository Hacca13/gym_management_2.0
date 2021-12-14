import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./view/home";
import MyLoader from "./componets/myLoader";
import PageNotFound from "./view/404";
import NewUserPage from "./view/newUser";

const linkHome = '/home';
const linkNewUser = '/nuovo-utente';
const linkNewTrainingCard = '/nuova-scheda';
const linkNewSubscriptions = '/nuovo-abbonamento';
const linkNewCourse = '/nuova-corso';
const linkNewExercise = '/nuovo-esercizio';
const linkAddUserToCourse = '/aggiungi-un-utente-al-corso';

function App() {
    return (
        <Router>
            <Suspense fallback={<MyLoader/>}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path={linkHome} element={<Home/>}/>
                    <Route exact path={linkNewUser} element={<NewUserPage/>}/>
                    <Route path="*" element={<PageNotFound/>}/>à


                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
