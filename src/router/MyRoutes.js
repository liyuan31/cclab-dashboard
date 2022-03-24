import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../views/Homepage";
import OnboardView from "../views/OnboardView";
import ResearcherView from "../views/ResearcherView";

const MyRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route path="/onboard" element={<OnboardView />} />
                    <Route path="/researcher" element={<ResearcherView />} />
                </Routes>
            </Router>
        </>
    );
};

export default MyRoutes;
