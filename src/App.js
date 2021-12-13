import React, { Suspense } from "react";


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./view/home";
import MyLoader from "./componets/myLoader";

function App() {
    return (
        <Router>
            <Suspense fallback={<MyLoader/>}>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/home" element={<Home/>}/>

                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
