import React, { Component } from "react";
import { Galleria } from "primereact/galleria";
import { Card } from "primereact/card";
import { image_api, image_large_api } from "../../services/api/api";

export const GalleriaImages = (props) => {
  if (!props.images.length) {
    return "Loading...";
  }
  console.log(props.images);
  const images = props.images.map((x) => `${image_large_api}${x.file_path}`);
  const itemTemplate = (item) => {
    return <img src={item} alt={item} style={{ width: "100%" }} />;
  };
  const thumbnailTemplate = (item) => {
    return <img src={item} alt={item.alt} />;
  };
  return (
    <div className="credits">
      <div className="container">
        <div className="row mt-3">
          <Galleria
            value={images}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            numVisible={5}
            autoPlay={true}
            className="galleria"
          ></Galleria>
        </div>
      </div>
    </div>
  );
};
