import React, { useState, useEffect } from "react";
function Game(props) {
  const [animeData, setAnimeData] = useState();

  const [score, setScore] = useState(0);

  const [lost, setLost] = useState(true);

  function getRandomAnime() {
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
    console.log(props.passedCall.data[firstRandom].ranking.rank);
    console.log(props.passedCall.data[secondRandom].ranking.rank);
    console.log(lost);
    setLost(true);
    console.log(score);
  }

  function youLost() {
    setLost((prevLost) => {
      if (prevLost) {
        setLost(!prevLost);
      }
    });
  }

  function reset() {
    getRandomAnime();
    setScore(score - score);
  }

  function correct() {
    setScore(score + 1);
    getRandomAnime();
  }

  if (lost) {
    return (
      <div>
        <button onClick={getRandomAnime}>play</button>
        {animeData && (
          <div>
            <img
              src={animeData[0].node.main_picture.large}
              onClick={() => {
                animeData[0].ranking.rank < animeData[1].ranking.rank
                  ? correct()
                  : youLost();
              }}
            />
            <img
              src={animeData[1].node.main_picture.large}
              onClick={() => {
                animeData[1].ranking.rank < animeData[0].ranking.rank
                  ? correct()
                  : youLost();
              }}
            />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={reset}>Play Again?</button>
        <h1>Final Score{score}</h1>
      </div>
    );
  }
}
export default Game;
