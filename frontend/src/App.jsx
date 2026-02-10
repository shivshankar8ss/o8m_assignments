import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BlogList from "./pages/BlogList.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import BlogAdmin from "./admin/BlogAdmin.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/admin/blog" element={<BlogAdmin />} />
    </Routes>
  );
}


export default App;
