import { combineReducers } from "redux";
import {
  GET_CREDIT_DETAILS,
  GET_IMAGES,
  GET_MOVIE_DETAILS,
  GET_POPULAR,
  GET_TOP_RATED,
  GET_UPCOMING,
} from "../../types/types";

const initialState = {
  movies: [],
  topRated: [],
  upcoming: [],
  images: { backdrops: [] },
  movieDetails: null,
  creditDetails: {
    cast: [],
  },
};

const moviesReducer = (state = initialState.movies, action) => {
  switch (action.type) {
    case GET_POPULAR:
      return action.payload || [];

    default:
      return state;
  }
};

const moviesDetailsReducer = (state = initialState.movieDetails, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return action.payload || null;

    default:
      return state;
  }
};

const creditsDetailsReducer = (state = initialState.creditDetails, action) => {
  switch (action.type) {
    case GET_CREDIT_DETAILS:
      return action.payload || initialState.creditDetail;

    default:
      return state;
  }
};

const topRatedMoviesReducer = (state = initialState.topRated, action) => {
  switch (action.type) {
    case GET_TOP_RATED:
      return action.payload || initialState.topRated;

    default:
      return state;
  }
};

const upComingReducer = (state = initialState.upcoming, action) => {
  switch (action.type) {
    case GET_UPCOMING:
      return action.payload || initialState.upcoming;

    default:
      return state;
  }
};

const imagesReducer = (state = initialState.images, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return action.payload || initialState.images;

    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  moviesDetails: moviesDetailsReducer,
  creditDetails: creditsDetailsReducer,
  topRated: topRatedMoviesReducer,
  upComing: upComingReducer,
  images: imagesReducer,
});
