import React, { Component } from 'react';
import axios from 'axios';
// import ContentNews from './../component/ContentNews'
import { Redirect } from "react-router-dom"
import { actions } from './../Store'
import { connect } from 'unistore/react'
import { withRouter } from "react-router-dom";
import MovieDetails from '../component/MovieDetails';

class App extends Component {
    componentDidMount = () => {
        // this.props.getCategory()
        this.props.getMovies()
    }

    render() {
        console.log("heremovies")
            if (this.props.is_login === false){
              return <Redirect to={{pathname:"/signin"}}/>
          } else {
        return (
            <div className="App">
                {this.props.listMovies.map((item, key) => {
                    return <MovieDetails key={key} title={item.Title} year={item.Year}
                    poster={item.Poster} penjelasan={item.Synopsis} kategori={item.Category}/>;
                })}
            </div>
        );
    }
}
}
// }
// export default App;
export default connect(
    'listMovies, is_login', actions
)(withRouter(App))