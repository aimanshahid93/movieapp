import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import React from 'react';
import { ColorGame } from './ColorGame';
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Routes, Route, Link, Navigate, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import { MovieDetails } from './MovieDetails';
import { HomePage } from './HomePage';
import { Notfound } from './Notfound';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { ModeComment } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Icon } from '@mui/material';
import { BasicForm } from './BasicForm';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function App() {
  // const users=[
  //   {name:"Aiman",
  //    profile:"https://images.unsplash.com/photo-1429277005502-eed8e872fe52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWF0ZWQlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  //   },
  //   {name:"shahid",
  //    profile:"https://media.istockphoto.com/photos/3d-render-cartoon-character-young-caucasian-man-isolated-on-blue-picture-id1355979328?b=1&k=20&m=1355979328&s=170667a&w=0&h=qGz0HDKviwENPKhQOQX-lrnRNEeD5l1iOWMCF0j3NwY="
  //   },
  //    {name:"nazia",
  //     profile:"https://media.istockphoto.com/photos/relaxed-woman-breathing-fresh-air-in-a-green-forest-picture-id1314559532?b=1&k=20&m=1314559532&s=170667a&w=0&h=4REABdcIfgtRhE0LJAJ51o8aYA97kNFj-kQGZRPsEZ4="
  //   }]
    const [moviesList,setMoviesList]=useState([]);
    const[search,setSearch]=useState("");
    const navigate=useNavigate();
    const [mode,setmode]=useState("light")
   
    const darkTheme = createTheme({
      palette: {
        mode: mode,
      },
    });

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Paper  elevation={3} />
    <div className="App">
    <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
          <Button color="inherit" onClick={()=>navigate("/movies")}>Movies</Button>
          <Button color="inherit" onClick={()=>navigate("/movies/add")}>Add Movie</Button>
          <Button color="inherit" onClick={()=>navigate("/colorgame")}>Color Game</Button>
          <Button color="inherit" 
           onClick={()=>setmode(mode=="light"?"dark":"light")}>
            <Brightness4Icon />
            {(mode=="light"?"dark":"light")}{" "}
             Mode
            </Button>
            <Search sx={{marginLeft:"auto"}}>
            <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             value={search}
             onChange={(event)=>setSearch(event.target.value)}
             placeholder="Search…"
             inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<MovieList movies={moviesList.filter((mv)=>mv.name.toLowerCase().includes(search.toLowerCase()))} />} />
        <Route path="/movies/add" element={<AddMovie setMoviesList={setMoviesList} moviesList={moviesList}/>} />
        <Route path="/colorgame" element={ <ColorGame />} />
        <Route path="BasicForm" element={ <BasicForm />} />
        <Route path="*" element={<Notfound/>} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />

    </Routes>
    </div>
    <Paper />
    </ThemeProvider>
  );
}

export default App;
