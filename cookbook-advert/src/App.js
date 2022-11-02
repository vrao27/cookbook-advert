import './App.css';
import Carousel from './components/Carousel/Carousel';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import TopNavBar from './components/TopNavBar';
import Recipe from './components/Recipe';


function App() {
  return (
    <>
    <TopNavBar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="recipe" element={<Recipe />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
