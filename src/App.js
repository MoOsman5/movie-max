import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/header/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MovieDetails from "./components/MovieDetails";

function App() {
  const [pageCount, setpageCount] = useState(0);
  const [Data, setData] = useState([]);
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d06effa40fabf4254a63bbe87a2ca2fd"
    );
    setData(res.data.results);
    if (res.data.total_pages > 500) {
      setpageCount(500);
    } else {
      setpageCount(res.data.total_pages);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=d06effa40fabf4254a63bbe87a2ca2fd&query=${word}`
      );
      setData(res.data.results);
      if (res.data.total_pages > 500) {
        setpageCount(500);
      } else {
        setpageCount(res.data.total_pages);
      }
    }
  };
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d06effa40fabf4254a63bbe87a2ca2fd&page=${page}`
    );
    setData(res.data.results);
  };

  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList Data={Data} getPage={getPage} pageCount={pageCount}/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
