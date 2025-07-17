import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Podcasts from "./pages/podcasts2";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </Router>
  );
}

export default App;
