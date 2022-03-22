import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../views/Homepage";
import ResearcherView from "../views/ResearcherView";

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/researcher" component={ResearcherView} />
                </Switch>
            </Router>
        </>
    );
};

export default Routes;
