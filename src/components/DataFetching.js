import React, {useState, useEffect} from 'react'
import axios from 'axios'
import InformationCard from './InformationCard'

export default function NasaData () {
    const [state, setState] = useState('')
    const [searchTextSol, setSearchTextSol] = useState("");
    const [searchTextRover, setSearchTextRover] = useState("");
    const [images, setImages]=useState([])
    

        async function solInput() {
            //console.log('this is the sol input')
            if (searchTextSol === "" && searchTextRover === "") {
                setState( "idle" );
                return;
            }
            setState( "searching" );
        
            const queryParamSol = encodeURIComponent(searchTextSol);
            const queryParamRover = encodeURIComponent(searchTextRover);
        
            const response = await axios.get(
              `https://api.nasa.gov/mars-photos/api/v1/rovers/${queryParamRover}/photos?sol=${queryParamSol}&api_key=9fpxPaGTlU9c0Yqc5R6qabYqtyKsn2lm7lA5AsnG`
            );
            
            setState( "done");
            setImages(response.data.photos)
          };
    
    return (
        <div>
            <div className="SolSearch">
            <p>Type a sol between </p>
            <input
          value={searchTextSol}
          onChange={(e) => setSearchTextSol(e.target.value)}
            /> 
            </div>
            <p>Type the name of the rover: curiosity,spirit, oportunity </p>
            <div className="RoverSearch">
        <input
        value={searchTextRover}
        onChange={(e) => setSearchTextRover(e.target.value)}
      />
        </div>
        <button onClick={solInput}>Search</button>
            { images.map((image) => ( 
                 <InformationCard key={image.id} image={image} /> 
                 ))}
        </div>
        
    )

};