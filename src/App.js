import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from './components';
import { Home, About, Contact, NotFound, Movies } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="movies/:id" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
