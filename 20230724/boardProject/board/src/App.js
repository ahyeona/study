import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import BoardList from "./pages/boardList";
import BoardInsert from "./pages/boardInsert"
import BoardDetail from "./pages/boardDetail"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/boardlist" element={<BoardList />} />
          <Route path="/boardInsert" element={<BoardInsert />} />
          <Route path="/boarddetail/:id" element={<BoardDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
