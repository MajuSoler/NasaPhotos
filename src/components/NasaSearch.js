import React, { useState } from "react";
import axios from "axios";
import InformationCard from "./InformationCard";

export default function NasaSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [searchTextSol, setSearchTextSol] = useState("");
  const [selectedRover, setSelectedRover] = useState("");
  const [images, setImages] = useState([]);

  async function solInput() {
    if (searchTextSol === "" || selectedRover === "") {
      setErrorMsg("Both fields are mandatory!");
      return;
    }
    setIsLoading(true);
    setErrorMsg("");

    const queryParamSol = encodeURIComponent(searchTextSol);
    const queryParamRover = encodeURIComponent(selectedRover);

    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${queryParamRover}/photos?sol=${queryParamSol}&api_key=9fpxPaGTlU9c0Yqc5R6qabYqtyKsn2lm7lA5AsnG`
    );

    setIsLoading(false);
    setImages(response.data.photos);
  }

  return (
    <>
      {errorMsg !== "" && (
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      )}
      <div style={{ marginTop: "24px" }}>
        <h1>Let's See tome cool Martian Pictures!</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="SolSearch">
          <p>Type a sun (date) </p>
          <input
            value={searchTextSol}
            onChange={(e) => setSearchTextSol(e.target.value)}
          />
        </div>

        <div style={{ textAlign: "center", display: "inline-block" }}>
          <select
            style={{
              marginTop: "32px",
              width: "200px",
            }}
            className="form-select "
            onChange={(e) => setSelectedRover(e.target.value)}
          >
            <option value="">Select a rover</option>
            <option value="curiosity">Curiosity</option>
            <option value="spirit">Spirit</option>
            <option value="oportunity">Oportunity</option>
          </select>

          <button
            className="btn btn-danger"
            onClick={solInput}
            style={{ marginTop: "24px", marginBottom: "24px" }}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm" />
                <span style={{ marginLeft: "8px" }}>Loading...</span>
              </>
            ) : (
              <span>Search</span>
            )}
          </button>
        </div>

        {!isLoading && (
          <>
            {images.map((image) => (
              <InformationCard key={image.id} image={image} />
            ))}
          </>
        )}
      </div>
    </>
  );
}
