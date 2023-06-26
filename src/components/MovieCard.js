import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieCard({movie}) {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}
            className="card__image"
            alt="movieImage"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <div className="center-div">
                <p>Movie Name: {movie.title}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Type: Action</p>
                <p>Rate: {movie.vote_average}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}
