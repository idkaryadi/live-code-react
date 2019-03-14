import React, { Component } from "react"
// import axios from "axios";
import { withRouter } from "react-router-dom";
import {actions} from './../Store'
import {connect} from 'unistore/react'

class SignIn extends Component {
    doLogin = () => {
        this.props.postLogin().then(
            () => {
                this.props.history.replace('/profile')
            }
        )
    }
    render() {
        // console.log("state", this.state);
        return (
            <section className="content signin text-center">
                <form onSubmit={e => e.preventDefault()}>
                    <h1 style={{ marginBottom: "2%", paddingTop:"80px"}}>Sign In</h1>
                    <div style={{ marginBottom: "2%" }}>
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                        <br/> <br/>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={e => this.props.setField(e)} //changeInput
                        />
                    </div>
                    <button style={{ marginRight: "2%" }} onClick={() => this.doLogin()}>SignIn</button>
                    <button type="reset">Reset</button>
                </form>
            </section>
        );
    }
}

// export default withRouter(SignIn);
export default connect(
    'username, password', actions
    )(withRouter(SignIn))