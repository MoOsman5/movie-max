import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Paginations from "./Paginations";


export default function MoviesList({Data,getPage,pageCount}) {
  return (
    <div className="container">
      <Row className="mt-3">
        { Data.length >=1 ?(Data.map((movie)=>{
          return (<MovieCard key={movie.id} movie={movie}/>)
        })):<h2 className="text-center p-5">There is no Movies</h2>}
          
          <Paginations getPage={getPage} pageCount={pageCount}/>


      </Row>
    </div>
  );
}
