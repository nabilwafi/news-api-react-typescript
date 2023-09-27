import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./presentation/pages/NewsPage";
import HeaderComponent from "./presentation/components/HeaderComponent";
import NewsDetailPage from "./presentation/pages/NewsDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderComponent />}>
          <Route path="/" element={<NewsPage />} />
          <Route path="/article/:title" element={<NewsDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
