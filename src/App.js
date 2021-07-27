// @flow
import React from "react";

import "./App.css";
import { Dropdown } from "./components/Dropdown";

const OPTIONS = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

function App(): React$Element<"div"> {
  return (
    <div className="App">
      <Dropdown options={OPTIONS} placeholder="- Select -" placement="top" />
      <Dropdown options={OPTIONS} placeholder="- Select -" placement="bottom" />
    </div>
  );
}

export default App;
