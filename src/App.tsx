import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";

export default function App() {
  return (
    <>
      <Header />
      <main id="main" className="container">
        <Routes>
          <Route index element={<PostList />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} My React Blog</small>
        </div>
      </footer>
    </>
  );
}
