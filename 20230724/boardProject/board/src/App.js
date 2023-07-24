import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
