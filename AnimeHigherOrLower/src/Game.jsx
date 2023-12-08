import React, { useState } from "react";
function Game(props) {
  const [animeData, setAnimeData] = useState();
  function getRandomAnime() {
    console.log("A");
    let firstRandom = Math.floor(Math.random() * 100);
    let secondRandom = Math.floor(Math.random() * 100);
    while (firstRandom == secondRandom) {
      secondRandom = Math.floor(Math.random() * 100);
    }
    if (props.passedCall) {
      let firstAnime = props.passedCall.data[firstRandom];
      let secondAnime = props.passedCall.data[secondRandom];
      console.log(firstAnime);
      setAnimeData([firstAnime, secondAnime]);
    }
  }
  return (
    <div>
      <button onClick={getRandomAnime}>PLAY</button>
      {animeData && (
        <div>
          <img src={animeData[0].node.main_picture.large} />
          <img src={animeData[1].node.main_picture.large} />
        </div>
      )}
    </div>
  );
}
export default Game;
