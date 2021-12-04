import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from './components';
import { Home, NotFound, Category, Recipe } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="meal/:mealId" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
