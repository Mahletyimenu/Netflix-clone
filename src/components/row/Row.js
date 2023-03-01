import React,{useState,useEffect} from 'react';
import YouTube from 'react-youtube/dist/YouTube';
import movieTrailer from 'movie-trailer';
import './Row.css';
import axios from '../../axios.js';


const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title,fetchurl,isLargeRow}) => {

    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    useEffect(()=>{
        async function featchData(){
            const request = await axios.get(fetchurl);
            setMovies(request.data.results);
            return request;
        }
        featchData();
    
    },[fetchurl]);

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    const handleClick = (movie) =>{
        if(trailerUrl){
           setTrailerUrl("");
        }else{
            movieTrailer(movie?.title||movie?.name||movie.original_name)
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error)=>console.log(error));
        }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie)=>{
                    return(
                        <img 
                        onClick={()=>handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        />
                    );
                    
                })}
            </div>
            <div style={{padding: '40px'}}>
                {trailerUrl && <YouTube videoid={trailerUrl} opts={opts}/>}
            </div>
        </div>
    );
}

export default Row;
