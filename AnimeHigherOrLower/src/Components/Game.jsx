import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Play from "./Play";
import PlayAgain from "./PlayAgain";
import AnimeImages from "./AnimeImages";
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
    return <Play eventHandler={reset} />;
  } else if (lost) {
    return (
      <div>
        {animeData && (
          <div>
            <img
              className="logo lg:h-[150px] md:h-13  h-10"
              src="https://cdn.discordapp.com/attachments/1092285231689646112/1184409284302360606/anime_higher_lower_logo.png?ex=658bde1a&is=6579691a&hm=76bcb4a3d14656290f1ee51336d5a187dbe974282daea6888c36cb577cabe521&"
            ></img>
            <h1 className="flex justify-center">Current Score: {score}</h1>
            <AnimeImages
              youLost={youLost}
              correct={correct}
              animeData={animeData}
            />
            <Footer />
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <PlayAgain Score={score} eventHandler={reset} />
      </div>
    );
  }
}
export default Game;
