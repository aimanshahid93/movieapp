import { useState } from "react";
import React from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import {API} from "./global";


export function Movie({movie,id}) {
  const [show, setshow] = useState(true);
  const navigate=useNavigate();
  const styles={color:"red"}
  return (
  <Card className='movie-container'>
    <img src={movie.poster} alt={movie.name} className='movie-poster' />
    <CardContent>
    <div className='movie-spec'>
      <h2 className='movie-title'>{movie.name}
      <IconButton aria-label="delete" color="primary" onClick={() => setshow(!show)}>
    {show?<ExpandMoreIcon/>:<ExpandLessIcon/>}
    </IconButton>
    <IconButton aria-label="delete" 
    color="primary" 
    onClick={() => navigate(`/movies/${id}`)}>
    <InfoIcon/>
    </IconButton>
      </h2>
      <p className='movie-rating'>
        ⭐{movie.rating}</p>
    </div>
    {show ? <p className='movie-description'>{movie.summary}</p> : null} 
    <Counter />
    <IconButton className='Delete-button' 
       style={styles} aria-label="Example"
       onClick={()=>{
      fetch(`${API}/movies/${id}`,{
       method:'DELETE',
       })
      }}
        >
        <DeleteIcon />
        </IconButton>
    </CardContent>
  </Card>);
}
