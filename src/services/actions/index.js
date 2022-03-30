import axios from "axios";
import {
  GET_CREDIT_DETAILS,
  GET_IMAGES,
  GET_MOVIE_DETAILS,
  GET_POPULAR,
  GET_TOP_RATED,
  GET_UPCOMING,
} from "../../types/types";
import { api_key, api_url } from "../api/api";

export const getPopularMoviesAction = () => {
  return (dispatch) => {
    return axios.get(`${api_url}/discover/movie?api_key=${api_key}`).then(
      (res) => {
        console.log(res.data.results);
        dispatch({ type: GET_POPULAR, payload: res.data.results });
      }
      // (err) => dispatch({ type: GET_POPULAR_ERR, err })
    );
  };
};

export const getMovieDetailsAction = (data) => {
  return (dispatch) => {
    return axios.get(`${api_url}/movie/${data}?api_key=${api_key}`).then(
      (res) => {
        console.log(res.data);
        dispatch({ type: GET_MOVIE_DETAILS, payload: res.data });
      }
      // (err) => dispatch({ type: GET_POPULAR_ERR, err })
    );
  };
};

export const getCreditsDetailsAction = (data) => {
  return (dispatch) => {
    return axios
      .get(`${api_url}/movie/${data}/credits?api_key=${api_key}`)
      .then(
        (res) => {
          console.log(res.data);
          dispatch({ type: GET_CREDIT_DETAILS, payload: res.data });
        }
        // (err) => dispatch({ type: GET_POPULAR_ERR, err })
      );
  };
};

export const getImagesAction = (data) => {
  return (dispatch) => {
    return axios.get(`${api_url}/movie/${data}/images?api_key=${api_key}`).then(
      (res) => {
        console.log(res.data);
        dispatch({ type: GET_IMAGES, payload: res.data });
      }
      // (err) => dispatch({ type: GET_POPULAR_ERR, err })
    );
  };
};

export const getTopRatedMoviesAction = () => {
  return (dispatch) => {
    return axios.get(`${api_url}/movie/top_rated?api_key=${api_key}`).then(
      (res) => {
        console.log(res.data.results);
        dispatch({ type: GET_TOP_RATED, payload: res.data.results });
      }
      // (err) => dispatch({ type: GET_POPULAR_ERR, err })
    );
  };
};

export const getUpComingMoviesAction = () => {
  return (dispatch) => {
    return axios.get(`${api_url}/movie/upcoming?api_key=${api_key}`).then(
      (res) => {
        console.log(res.data.results);
        dispatch({ type: GET_UPCOMING, payload: res.data.results });
      }
      // (err) => dispatch({ type: GET_POPULAR_ERR, err })
    );
  };
};
