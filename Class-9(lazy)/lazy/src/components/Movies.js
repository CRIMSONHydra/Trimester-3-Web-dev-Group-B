import React, { useState } from "react";


function Movies() {
  const [movieData, setMovieData] = useState([]);

  function getData() {
    import('./movieData.js').then((module)=>{
       setMovieData(JSON.stringify(module.movies));
    })

  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <h3>{movieData}</h3>
    </div>
  );
}

export default Movies;
