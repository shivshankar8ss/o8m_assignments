import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BlogList from "./pages/BlogList.jsx";

function App() {
  return (
    <div>
      <h2>App is rendering</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
      </Routes>
    </div>
  );
}

export default App;
