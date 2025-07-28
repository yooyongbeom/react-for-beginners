import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./styles.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />s
      </Routes>
    </Router>
  );
}

export default App;
