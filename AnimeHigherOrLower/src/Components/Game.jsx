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
          <div>
            <img
              className="logo lg:h-[150px] md:h-13  h-10"
              src="https://cdn.discordapp.com/attachments/1092285231689646112/1184409284302360606/anime_higher_lower_logo.png?ex=658bde1a&is=6579691a&hm=76bcb4a3d14656290f1ee51336d5a187dbe974282daea6888c36cb577cabe521&"
            ></img>
            <h1 className="flex justify-center">Current Score: {score}</h1>
            <div className="animeContainer flex flex-col sm:flex-row md:flex-row justify-center">
              <div className="firstAnime">
                <div className="text-div 2xl:w-[500px] xl:w-[400px] md:w-[260px]  w-[250px]">
                  <p className="truncate">{animeData[0].node.title}</p>
                </div>
                <img
                  src={animeData[0].node.main_picture.large}
                  className="animeImage lg:h-[350px] md:h-[260px] h-[280px] sm:h-[220px]  rounded-lg"
                  onClick={() => {
                    animeData[0].ranking.rank < animeData[1].ranking.rank
                      ? correct()
                      : youLost();
                  }}
                />
              </div>

              <div className="secondAnime">
                <div className="text-div 2xl:w-[500px] xl:w-[400px]  md:w-[260px] w-[250px]">
                  <p className="truncate">{animeData[1].node.title}</p>
                </div>
                <img
                  src={animeData[1].node.main_picture.large}
                  className="animeImage lg:h-[350px] md:h-[260px] h-[280px]  sm:h-[220px]   rounded-lg"
                  onClick={() => {
                    animeData[1].ranking.rank < animeData[0].ranking.rank
                      ? correct()
                      : youLost();
                  }}
                />
              </div>
            </div>
            <footer>
              <svg
                className="w-10 h-10 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <a
                  href="https://github.com/SkylerBanana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </a>
              </svg>
            </footer>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <div className="buttonContainer">
          <button
            onClick={reset}
            className="relative inline-flex items-center justify-center p-0.5 mb-2   overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              PLAY AGAIN
            </span>
          </button>
          <h1 className="finalScore">Final Score: {score}</h1>
        </div>
      </div>
    );
  }
}
export default Game;
