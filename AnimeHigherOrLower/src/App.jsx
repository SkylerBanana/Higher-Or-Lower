import React, { useState, useEffect } from "react";
import ApiData from "./Components/ApiData";
function App() {
  const [shown, setShown] = useState(false);
  function Show() {
    setShown(true);
  }
  if (shown === true) {
    return (
      <div>
        <ApiData />
      </div>
    );
  } else {
    <button onClick={Show()}>PLAY</button>;
  }
}

export default App;
