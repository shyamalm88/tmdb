import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/common/layout";
import Home from "./components/modules/home";
import MovieDetails from "./components/modules/movieDetails";
import TopRatedMovies from "./components/modules/topRatedMovies";
import UpComingMovies from "./components/modules/upComingMovies";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/movieDetails/:id" exact element={<MovieDetails />} />
          <Route path="/top_rated" exact element={<TopRatedMovies />} />
          <Route path="/upcoming" exact element={<UpComingMovies />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
