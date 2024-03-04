import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Wrapper from "./front-page/Wrapper";
import Forus from "./ui-components/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/Forus" element={<Forus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;