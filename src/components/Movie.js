import React from "react";
// import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import "./Movie.css";



function Movie({id,year,title,summary,poster,genres}){
    // return <h4>{title}</h4>;
    return( 
    <div className="movie">
    <Link to={{
        pathname: `/movie/${id}`,
        state:{
            year,
            title,
            summary,
            poster,
            genres
        }
    }}>
    
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data"> 
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__generes">
            {genres.map((genre, index) =>
            <li key={index} className="generes__genre">
                {genre}
            </li>
        )}
        </ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
    </Link>
    </div>
    )
}

// class Movie extends Component{
//     // return <h4>{title}</h4>;
//     render(){
//         return( 
//             <div class="movie">
//                 <img src={this.props.poster} alt={this.props.title} title={this.props.title}/>
//                 <div class="movie__data"> 
//                     <h3 class="movie__title">{this.props.title}</h3>
//                     <h3 class="movie__year">{this.props.year}</h3>
//                     <p class="movie__summary">{this.props.summary}</p>
//                 </div>
//             </div>
//             )
//         }
// }


Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;