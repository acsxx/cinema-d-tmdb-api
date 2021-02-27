import React, { Component } from "react";
import { Link } from "react-router-dom"

class searchBar extends Component {

  handleFormSubmit = (event) => {
    event.preventDefault()
  }
  
  render() {
    return (
      <nav className="navbar bg-dark mb-5 mt-3 rounded">
      <span>
      
          <a className="navbar-brand" href="/">
          <i className="fas fa-home text-success mr-2 fa-lg"></i>
            CINEMA-ᗡ
          </a>
        </span>
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control mr-sm-2 bg-dark"
            type="search"
            placeholder="Search a movie"
            aria-label="Search"
            onChange={this.props.searchMovieProp}
            value={this.props.searchText}
          />        
          <i className="fas fa-search text-success"></i>  
        </form>
        <span>
          <Link
              className="btn btn-outline-success my-2 my-sm-0 mr-2"
              type="submit"
              to="/add"
            >
              Add Film <i className="fas fa-plus text-success"></i>
            </Link>     
          </span>
      </nav>
    );
  }
}

export default searchBar;
