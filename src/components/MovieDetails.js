import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';

export default function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=d06effa40fabf4254a63bbe87a2ca2fd`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetails()
  }, []);
  return (
    <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}
            className="poster_image"
            alt="movieImage"
          />
          {/* <img
            src={`https://image.tmdb.org/t/p/w500/`+movie.backdrop_path}
            className="poster_image"
            alt="movieImage"
          /> */}
          <div >
            <h1>{movie.title}</h1>
            <span><strong>Release Date:movie.release_date </strong></span>
            <br/>
            <span ><strong>Vote Average:</strong> movie.genres[0].name</span>
          </div>

    </div>
    )
}
