import {useParams} from "react-router-dom";
import React from 'react';


export default function InformationCard ({image}) {
    //console.log('this is the image result', image)
    return (
        <div >
          {image? (
              <div>
                  <div>
                  <h1>{image.rover.name}</h1>
                  </div>
                  <h4>{image.earth_date}</h4>
                  <img src={image.img_src} alt=" " />
              </div>
          ):(
              <p> Loading</p>
          )}
        </div>
    )
}
