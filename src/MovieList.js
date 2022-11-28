import React from 'react';
import { Movie } from './Movie';
import { useEffect, useState} from 'react';
import {API} from './global';


export function MovieList() {
  const [moviesList,setMoviesList]=useState([])

  useEffect(()=>{
    fetch(`${API}/movies`,{
      method: 'GET',
    })
    .then(res=>res.json())
    .then((mvs)=>setMoviesList(mvs))
  },[])
  return (
    <div className="movie-list">
      {moviesList.map((mv, index) => (
        <Movie key={index} movie={mv} id={mv.id}/>
      ))}
    </div>
  );
}
