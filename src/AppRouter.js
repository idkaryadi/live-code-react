import React, {Component} from "react";
import MainRoute from "./Routes/MainRoutes";
import {withRouter} from "react-router-dom";

// App styles
import "./App.css"
// Custom component
import Navigation from "./component/Navigation";

class AppAjax extends Component{
    postSignout = () =>{
        localStorage.setItem("is_login", false);
        // localStorage.removeItem("is_login");
        // localStorage.clear()
        this.props.history.push("/");
    };
    render (){
        return (
            <div className="App">
                {/* <Navigation postSignout={this.postSignout}/> */}
                <Navigation postSignout={this.postSignout}/>
                <MainRoute/>
            </div>
        )
    }
}

export default withRouter(AppAjax);