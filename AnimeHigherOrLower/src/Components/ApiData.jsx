import { useState, useEffect } from "react";
import Game from "./Game";

function ApiData() {
  const [anime, setAnime] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://node-js-server-8kvr.onrender.com/api/data"
        );
        const result = await response.json();
        setAnime(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Game passedCall={anime} />
    </div>
  );
}
export default ApiData;
