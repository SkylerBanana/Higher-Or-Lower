import React, { useState, useEffect } from "react";
function Game(props) {
  const [animeData, setAnimeData] = useState();
  const [score, setScore] = useState(-1);
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
      setAnimeData([firstAnime, secondAnime]);
    }
    setLost(true);
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
    setScore(0);
  }

  function correct() {
    setScore(score + 1);
    getRandomAnime();
  }

  if (score < 0) {
    return (
      <div className="buttonContainer">
        <button className="play" onClick={reset}>
          play
        </button>
      </div>
    );
  } else if (lost) {
    return (
      <div>
        {animeData && (
          <div className="animeContainer">
            <div className="firstAnime">
              <h2>{animeData[0].node.title}</h2>
              <img
                src={animeData[0].node.main_picture.large}
                onClick={() => {
                  animeData[0].ranking.rank < animeData[1].ranking.rank
                    ? correct()
                    : youLost();
                }}
              />
            </div>
            <div className="secondAnime">
              <h2>{animeData[1].node.title}</h2>
              <img
                src={animeData[1].node.main_picture.large}
                onClick={() => {
                  animeData[1].ranking.rank < animeData[0].ranking.rank
                    ? correct()
                    : youLost();
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="buttonContainer">
        <button className="play" onClick={reset}>
          Play Again?
        </button>
        <h1 className="finalScore">Final Score{score}</h1>
      </div>
    );
  }
}
export default Game;
