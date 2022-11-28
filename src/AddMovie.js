import { useState } from "react";
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export function AddMovie({ setMoviesList, moviesList }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      rating,
      poster,
      summary,
    };
    setMoviesList([...moviesList, newMovie]);
    console.log(setMoviesList);
  };
  return (
    <div className='movie-addition'>
        <TextField 
        value={name} 
        onChange={(event) => setName(event.target.value)}
        id="filled-basic" label="name" variant="filled" />
         <TextField 
         value={rating} 
         onChange={(event) => setRating(event.target.value)}
        id="filled-basic" label="rating" variant="filled" />
       <TextField 
        value={poster} 
        onChange={(event) => setPoster(event.target.value)}
        id="filled-basic" label="poster" variant="filled" />
       <TextField 
        value={summary} 
        onChange={(event) => setSummary(event.target.value)}
        id="filled-basic" label="summary" variant="filled" />
     
      <Button onClick={addMovie} variant="outlined">ADD MOVIE</Button>
    </div>
  );
}
