import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState} from 'react';
import { API } from './global';
import { Notfound } from './Notfound';
import { Movie } from './Movie';

export function MovieDetails() {
  const { id } = useParams();
  console.log(id);
  // const movie = moviesList[id];
  const [movie, setMovie] = useState({});
  useEffect(() => {fetch(`${API}/movies/${id}`, {
    method: "GET",})
    .then(res => res.json())
    .then((mv) => setMovie(mv)
    )}, [])


  const navigate = useNavigate();
  if(!movie){
    return<Notfound/>
  }

  return (
    <div className="movie-details">
      <iframe
        width="853"
        height="480"
        src={movie.trailer}
        title="Kuch Kuch Hota Hai Official Trailer | Shahrukh Khan, Kajol, Rani Mukherjee | Karn Johar"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
      <h2 className='movie-title'>{movie.name}</h2>
      <h2 className='movie-rating'>⭐{movie.rating}</h2>
      <p className='movie-description-trailer'>{movie.summary}</p>
      <Button onClick={() => navigate(-1)} variant="contained" startIcon={<ArrowBackIcon />}>Back</Button>

    </div>
  );
}
