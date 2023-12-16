function AnimeImages(props) {
  return (
    <div className="animeContainer flex flex-col sm:flex-row md:flex-row justify-center">
      <div className="firstAnime">
        <div className="text-div  xl:w-[400px] md:w-[260px]  w-[250px]">
          <p className="truncate">{props.animeData[0].node.title}</p>
        </div>
        <img
          src={props.animeData[0].node.main_picture.large}
          className="animeImage lg:h-[350px] md:h-[260px] h-[280px] sm:h-[220px]  rounded-lg"
          onClick={() => {
            props.animeData[0].ranking.rank < props.animeData[1].ranking.rank
              ? props.correct()
              : props.youLost();
          }}
        />
      </div>

      <div className="secondAnime">
        <div className="text-div  xl:w-[400px]  md:w-[260px] w-[250px]">
          <p className="truncate">{props.animeData[1].node.title}</p>
        </div>
        <img
          src={props.animeData[1].node.main_picture.large}
          className="animeImage lg:h-[350px] md:h-[260px] h-[280px]  sm:h-[220px]   rounded-lg"
          onClick={() => {
            props.animeData[1].ranking.rank < props.animeData[0].ranking.rank
              ? props.correct()
              : props.youLost();
          }}
        />
      </div>
    </div>
  );
}
export default AnimeImages;
