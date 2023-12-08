function Game({ getRandomAnime }) {
  return (
    getRandomAnime && (
      <div>
        <button onClick={() => getRandomAnime()}></button>
        <img src={getRandomAnime[0].node.main_picture.large} />
        <img src={getRandomAnime[1].node.main_picture.large} />
      </div>
    )
  );
}
export default Game;
