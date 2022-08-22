import React from "react";

import { GlobalStyles } from "./core/components/global-styles";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
