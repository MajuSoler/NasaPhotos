import React from "react";

export default function InformationCard({ image }) {
  return (
    <div>
      {image ? (
        <div>
          <div >
            <h1 >{image.rover.name}</h1>
          </div>
          <h4>{image.earth_date}</h4>
          <img src={image.img_src} alt="planet images" />
        </div>
      ) : (
        <p> Loading</p>
      )}
    </div>
  );
}
