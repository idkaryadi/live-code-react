import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
// import Romance from "../pages/Sport"
// import Action from "../pages/Economy"
// import Fiction from "../pages/Entertaiment"
// import Comedy from "../pages/Technology"
import Movies from "../pages/Movies"
import Profile from "../pages/Profile"
import NotMatch from "../pages/NoMatch"

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/signin" component={SignIn} />
            <Route exact path ="/romance" component={Movies} />
            <Route exact path ="/action" component={Movies} />
            <Route exact path ="/fiction" component={Movies} />
            <Route exact path ="/comedy" component={Movies} />
            <Route exact path ="/profile" component={Profile} />
            {/* <Route exact path ="/kesehatan" component={Health} /> */}
            <Route component={NotMatch} />
        </Switch>
    );
};

export default MainRoute;