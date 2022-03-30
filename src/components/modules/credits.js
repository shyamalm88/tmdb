import React, { Component } from "react";
import { Card } from "primereact/card";
import { image_api } from "../../services/api/api";

export const Credits = (props) => {
  const renderCredits = () => {
    if (!props.creditDetails) {
      return <div>Loading...</div>;
    }
    return props.creditDetails.cast.slice(0, 15).map((x) => {
      const header = x.profile_path ? (
        <img alt={x.name} src={`${image_api}${x.profile_path}`} key={x.id} />
      ) : (
        <svg
          key={x.id}
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="440"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="30%" y="50%" fill="#eceeef" dy=".3em">
            No Image Available
          </text>
        </svg>
      );
      return (
        <div className="col-md-3 mb-3" key={x.id}>
          <Card header={header}>
            <strong>{x.character}</strong>
            <div className="clearfix"></div>
            {x.original_name}
          </Card>
        </div>
      );
    });
  };
  return (
    <div className="credits">
      <div className="container">
        <div className="row mt-3">{renderCredits()}</div>
      </div>
    </div>
  );
};
