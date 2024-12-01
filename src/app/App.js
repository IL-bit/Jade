import Razvod from "./components/razvod/razvod";
import Discl from "./components/discl/discl";
import Main from "./components/main/main";
import Product from "./components/product/product";
import Feedback from "./components/feedback/feedback";
import About from "./components/about/about";
import News from "./components/news/news";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const isOpen = useSelector((state) => state.pop_up);
  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden'; 
    } else {
        document.body.style.overflow = 'unset'; 
    }
    return () => {
        document.body.style.overflow = 'unset'; 
    };
  }, [isOpen]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Razvod />} />
        <Route path="/discl" element={<Discl />} />
        <Route path="/main" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/product" element={<Product />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
