import React, { Component } from "react";
import { connect } from "react-redux";
import { getPopularMoviesAction } from "../../services/actions";
import { api_key, image_api } from "../../services/api/api";
import { Image } from "primereact/image";
import ReactSpeedometer from "react-d3-speedometer";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";

class MoviesList extends Component {
  componentDidMount() {
    this.props.getPopularMoviesAction();
  }

  movieListRender() {
    console.log(this.props);
    if (!this.props.movies.length) {
      return <div className="noMovies">No Movies Found</div>;
    }

    return this.props.movies.map((x) => {
      return (
        <div className="col-md-3 mb-3" key={x.id}>
          <div className="card">
            <Image
              src={`${image_api}${x.poster_path}`}
              alt={x.title}
              preview={true}
              imageClassName="images"
            />
            <div className="card-body position-relative">
              <div className="bgGradient">
                <ReactSpeedometer
                  value={x.vote_average}
                  maxValue={10}
                  segments={3}
                  width={90}
                  height={90}
                  ringWidth={6}
                  needleHeightRatio={0.5}
                  textColor="#fff"
                  valueTextFontSize="24px"
                  segmentColors={["#dc3545", "#f59e0b", "#22c55e"]}
                />
              </div>
              <div className="clearfix"></div>
              <h5 className="mb-0">{x.title}</h5>
              <div className="mb-1 text-muted">{x.release_date}</div>
              <p className="card-text mb-auto">
                <TextTruncate
                  line={4}
                  element="span"
                  truncateText="…"
                  text={x.overview}
                />
              </p>
              <div className="clearfix"></div>
              <Link
                to={`/movieDetails/${x.id}`}
                className="float-start btn btn-success btn-sm mt-3"
              >
                View Details
              </Link>
              <div className="float-end mt-3">{x.vote_count}</div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="row mb-2">{this.movieListRender()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { movies: state.movies };
};

export default connect(mapStateToProps, { getPopularMoviesAction })(MoviesList);
