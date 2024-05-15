import React, { useState } from "react";
import Playgame_Page from "./components/Playgame_Page";
import GameStarted from "./components/GameStarted";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
      {isGameStarted ? (
        <GameStarted />
      ) : (
        <Playgame_Page toggle={toggleGamePlay} />
      )}
    </div>
  );
}

export default App;
