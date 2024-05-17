
 import React from 'react';
 import { useGlobalContext } from '../contest';
import { NavLink } from 'react-router-dom';
const Movies  = () => {
    const { movie , isLoading }= useGlobalContext();
    if(isLoading){
      return (
      <div className="">
      <div className="loading">Loading...</div>
      </div>
      );
    }
  return (
    
    <div className='movie-page'>
    <div className='container grid grid-4-col'>
    {movie.map((curMovie)=>{
    const {imdbID,Title,Poster} = curMovie;
    const moviename= Title.substring(0,15);
        return (
       <NavLink to={`movie/${imdbID}`} key={imdbID}>
       <div className="card">
       <div className="card-info">
       <h2>{moviename.length >= 15 ?`${moviename}...`: moviename}</h2>
       <img src={Poster} alt={imdbID} />
       </div>
       </div>
       </NavLink>
        );
    })};
    </div>
    </div>
  );
};

export default Movies 