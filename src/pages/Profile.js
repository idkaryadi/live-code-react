import React from "react";
import {Redirect} from "react-router-dom"
import { withRouter } from "react-router-dom";
import {actions} from './../Store'
import {connect} from 'unistore/react'

const Profile = props => {
    if (props.is_login === false){
        console.log(props.is_login)
        return <Redirect to={{pathname:"/signin"}}/>
    } else {
        return (
            <section className="content text-center">
                <h1 style={{textAlign:"center", paddingTop:"80px"}}>Profile</h1>
                Selamat datang Mr {props.username}<br/><br/>
                <img src={props.avatar} style={{height:"100px", margin:"10px"}}/>
                <p>
                    <label>Email: </label>{props.email}
                    {/* mail@mail.com */}
                <br/>
                    <label>Full Name: </label>{props.username} <br/>
                    {/* Mr Full Name */}
                </p>
            </section>
        );
    }
};

// export default Profile;
export default connect(
    'username, is_login, email, avatar', actions
    )(withRouter(Profile))