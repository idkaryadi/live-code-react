import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{ margin: "20px" }}>
                    <div>
                        <div className="col-md-1"></div>
                        <div className="col-md-3">
                            <img src={this.props.poster} style={{ width: "90%", height: "350px", border: "solid 1px #C0C0C0", borderRadius: "5px" }} />
                        </div>
                        <div className="col-md-7 content text-left" style={{ width: "90%", height: "350px", border: "solid 1px #C0C0C0", borderRadius: "5px" }}>
                            <h4>{this.props.title}</h4><br />
                            {this.props.year}<br />
                            <span style={{ fontSize: "18px" }}>{this.props.penjelasan}</span>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;