import React, { Component } from "react";
import MoviesList from "./moviesList";
import Search from "./search";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <MoviesList />
      </React.Fragment>
    );
  }
}

export default Home;
