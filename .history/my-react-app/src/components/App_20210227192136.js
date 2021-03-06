import React, { Component } from "react";
import MovieList from "./movieList";
import Navbar from "./navbar";
import "bootswatch/dist/darkly/bootstrap.min.css";
import axios from "axios"
import AddMovie from "./addMovie";
import { BrowserRouter as Switch, Route, Link} from "react-router-dom";
import { withRouter } from 'react-router';

class App extends Component {
  state = {
    movies: [],
    searchText: ""
  };

  // AXIOS
  async componentDidMount(){
    const response = await axios.get("https://api.themoviedb.org/3/list/7079122?api_key=f63cb56110c81b6fc25e676821a229a4&language=en-US")
    console.log(response)
    this.setState({movies: response.data.items})
  }

  //axios delete
  deleteMovie = async (movie) => {
    axios.post(`https://api.themoviedb.org/3/list/7079122/remove_item?media_id=${movie.id}&session_id=aa1288f3674896f6ab691e60eaeafa897158ef6f&api_key=f63cb56110c81b6fc25e676821a229a4`)
    const newMovieList = this.state.movies.filter((m) => m.id != movie.id);
    this.setState( state => ({
      movies: newMovieList,
    }))
  }

  //search with event target
  searchMovie = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  //add Movie
  addMovie = async (movie) =>{
    await axios.post(`http://localhost:3003/movies/`, movie)
    this.setState( state =>({
      movies: state.movies.concat([movie])
    }))
  }

  render() {

     let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1
      }
    ) 

    return (

          <div className="container">
          <Navbar searchMovieProp={this.searchMovie}/>
            <Route exact path="/" render={() =>(
              <React.Fragment>
              
              <MovieList
                movies={filteredMovies}
                deleteMovieProp={this.deleteMovie}
              />
              </React.Fragment>
              )}/>

            <Route exact path="/add" render ={(history) => (
              <React.Fragment>
                <AddMovie
                  onAddMovie = {(movie) => {
                    this.addMovie(movie);
                    this.props.history.push("/");
                  }}
                />
              </React.Fragment>
            )}>
              
            </Route>

          </div>
    );
  }
}

export default withRouter(App);
