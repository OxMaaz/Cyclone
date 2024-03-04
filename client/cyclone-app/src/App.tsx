import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Wrapper from "./front-end/Container2"
import Cyclone from "./ui-components/Container" 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/Cyclone" element={<Cyclone />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;