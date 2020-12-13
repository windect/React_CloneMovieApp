import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css"

class MovieApp extends React.Component{
    state = {
        isLoading : true,
        movies : []
    }
    getMovie=async ()=>{
        const{
            data:{
                data:{movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json")
        // console.log(movies.data.data.movies);

        // const movies=await axios.get("https://yts-proxy.now.sh/list_movies.json")
        // console.log(movies);
        this.setState({movies:movies, isLoading:false});// 10/30  {movie:movies}->{movie}
    }
    componentDidMount(){
        this.getMovie(); 
        // setTimeout(()=>{
        //     this.setState({isLoading:false});
        // }, 6000);
        // const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
    }
    render(){
        const {isLoading, movies} = this.state;
        return(
        <section className="container">
            
            {isLoading ? ( 
            <div className = "loader">
            <span className="loader__text">"Loading.."</span> 
            </div>
            ): (
            <div className="movies">
                {movies.map(movie=>(
                <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary}
                poster = {movie.medium_cover_image}     
                genres={movie.genres}
                />
            ))}
            </div>
            
            )}
        </section>
        );
    }
}

export default MovieApp;