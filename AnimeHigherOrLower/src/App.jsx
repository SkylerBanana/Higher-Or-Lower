import React, { useState, useEffect } from "react";
import Game from "./Game";
function App() {
  const [anime, setAnime] = useState({});
  function onComplete() {
    const animeObj = JSON.parse(this.responseText);
    setAnime(animeObj);
  }

  useEffect(() => {
    const url =
      "https://cors-anywhere.herokuapp.com/api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=100";
    const request = new XMLHttpRequest();
    request.addEventListener("load", onComplete);
    request.open("GET", url);
    request.setRequestHeader(
      "X-MAL-CLIENT-ID",
      "63f77e4caf7ff7334e9c7b343423fcf8"
    );
    request.send();
  }, []);

  return (
    <div>
      <Game passedCall={anime} />
    </div>
  );
}

export default App;
