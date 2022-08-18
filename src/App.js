import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadGames } from "./core/actions/game-action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
