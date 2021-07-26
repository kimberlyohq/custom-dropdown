import "./App.css";
import { Dropdown } from "./components/Dropdown";


const OPTIONS = ["Item 1", "Item 2", "Item 3"];

function App() {
  return (
    <div className="App">
      <Dropdown options={OPTIONS} placement="top"/>
    </div>
  );
}

export default App;
