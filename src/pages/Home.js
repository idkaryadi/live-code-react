import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Link } from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                {/*  paddingLeft:"5%", paddingRight:"5%", */}
                    <div style={{padding:"2% 0"}}>Romance</div><br/> 
                    <img src="./asset/img/romance.jpg" style={{width: "90%", height: "350px", border:"solid 1px #C0C0C0", borderRadius:"5px"}}/>
                    <Link to="/romance">
                    <button className="btn btn-primary" style={{margin:"20px 0"}}>See Movie</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <div style={{padding:"2% 0"}}>Action</div><br/>
                    <img src="./asset/img/action.jpg" style={{width: "90%", height: "350px", border:"solid 1px #C0C0C0", borderRadius:"5px"}}/>
                    <Link to="/action">
                    <button className="btn btn-primary" style={{margin:"20px 0"}}>See Movie</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <div style={{padding:"2% 0"}}>Fiction</div><br/>
                    <img src="./asset/img/fiction.jpg" style={{width: "90%", height: "350px", border:"solid 1px #C0C0C0", borderRadius:"5px"}}/>
                    <Link to="/fiction">
                    <button className="btn btn-primary" style={{margin:"20px 0"}}>See Movie</button>
                    </Link>
                </div>
                <div className="col-md-3">
                    <div style={{padding:"2% 0"}}>Comedy</div><br/>
                    <img src="./asset/img/comedy.jpg" style={{width: "90%", height: "350px", border:"solid 1px #C0C0C0", borderRadius:"5px"}}/>
                    <Link to="/comedy">
                    <button className="btn btn-primary" style={{margin:"20px 0"}}>See Movie</button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
