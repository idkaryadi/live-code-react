import React, { Component } from "react"
// import axios from "axios";
import { withRouter } from "react-router-dom";

class NoMatch extends Component {
    location = window.location.pathname
    // tak tahu apa tulisannya
    render() {
        console.log();
        return (
            <section className="content signin text-center">
                <h1 style={{ marginBottom: "2%", paddingTop:"80px"}}>
                Error 404 <br/>
                pathname "{this.location}" not Found</h1>
            </section>
        );
    }
}

export default withRouter(NoMatch);