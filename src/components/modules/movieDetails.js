import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMovieDetailsAction,
  getCreditsDetailsAction,
  getImagesAction,
} from "../../services/actions";
import { useParams } from "react-router-dom";
import { image_large_api } from "../../services/api/api";
import { Credits } from "./credits";
import { GalleriaImages } from "./gallaria";

const withParams = (Component) => {
  return (props) => <Component {...props} params={useParams()} />;
};

class MovieDetails extends Component {
  componentDidMount() {
    this.props.getMovieDetailsAction(this.props.params.id);
    this.props.getCreditsDetailsAction(this.props.params.id);
    this.props.getImagesAction(this.props.params.id);
  }
  render() {
    if (!this.props.moviesDetails) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div
          className="bg mt-3"
          style={{
            backgroundImage: `url(
              ${image_large_api}${this.props.moviesDetails.backdrop_path}
            )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        >
          <div className="bg-overlay">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="poster">
                    <img
                      src={`${image_large_api}${this.props.moviesDetails.poster_path}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="details">
                    <div className="title mb-2">
                      {this.props.moviesDetails.title}
                    </div>
                    <small className="me-3 mb-2 d-inline-block">{`Released On: ${this.props.moviesDetails.release_date}`}</small>
                    <small className="me-3 mb-2">{`Language: ${this.props.moviesDetails.original_language}`}</small>
                    <small className="me-3 mb-2">{`Budget: $${this.props.moviesDetails.budget}`}</small>
                    <div className="clearfix"></div>
                    {this.props.moviesDetails.genres.map((x) => {
                      return (
                        <small key={x.id} className="chips">
                          {x.name}
                        </small>
                      );
                    })}
                    <div className="clearfix"></div>
                    <div className="tagline mb-2">
                      <em className="text-muted">
                        {this.props.moviesDetails.tagline}
                      </em>
                    </div>
                    <div className="description">
                      {this.props.moviesDetails.overview}
                    </div>
                    {this.props.moviesDetails.production_companies.map((x) => {
                      if (!x.logo_path) {
                        return (
                          <svg
                            className="bd-placeholder-img card-img-top"
                            width="40"
                            height="40"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder: Thumbnail"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                          >
                            <title>Placeholder</title>
                            <rect
                              width="100%"
                              height="100%"
                              fill="#55595c"
                            ></rect>
                            <text x="30%" y="50%" fill="#eceeef" dy=".3em">
                              {x.name}
                            </text>
                          </svg>
                        );
                      }
                      return (
                        <img
                          key={x.id}
                          src={`${image_large_api}${x.logo_path}`}
                          width="100px"
                          style={{ marginRight: "10px", marginTop: "10px" }}
                          alt={x.name}
                        />
                      );
                    })}
                    <div className="homepage">
                      <a
                        href={this.props.moviesDetails.homepage}
                        target="_blank"
                      >
                        Home Page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallaria">
          <GalleriaImages images={this.props.images.backdrops} />
        </div>
        <div className="credits">
          <h2 className="mt-3">Casting:</h2>
          <hr className="mb-3" />
          <Credits creditDetails={this.props.creditDetails} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    moviesDetails: state.moviesDetails,
    creditDetails: state.creditDetails,
    images: state.images,
  };
};

export default connect(mapStateToProps, {
  getMovieDetailsAction,
  getCreditsDetailsAction,
  getImagesAction,
})(withParams(MovieDetails));
