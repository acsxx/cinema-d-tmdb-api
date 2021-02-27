import React from "react";

const movieList = (props) =>{

  const truncateOverview = () =>{}
  return (
      <div className="row">
        {props.movies.map((movie,i) => (
          <div className="col-lg-4" key={i}>
            <div className="card mb-4 shadow-sm">
              <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="img" />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-md btn-outline-danger"
                    onClick ={ () => {
                      props.deleteMovieProp(movie)
                    }}
                  >
                    Delete
                  </button>
                  <h2>
                    <span className="badge badge-success">{movie.vote_average}</span>
                  </h2>
                </div>
              </div>
            </div> 
          </div>
        ))}
      </div>
  );
  
}
export default movieList;
